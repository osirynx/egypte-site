#!/bin/bash
# =============================================================================
#  indexnow.sh — Notifie les moteurs IndexNow (Bing, Yahoo, DuckDuckGo via
#  Bing, Yandex, Seznam, Naver...) des pages ajoutées ou modifiées.
# -----------------------------------------------------------------------------
#  USAGE
#    ./indexnow.sh --all                   toutes les URLs du sitemap
#    ./indexnow.sh --since <A> [<B>]       pages HTML modifiées entre A et B
#                                          (B = HEAD par défaut)
#    ./indexnow.sh <url> [<url>...]        URLs explicites
#    --dry-run                             affiche sans envoyer
#
#  Clé : fichier <clé>.txt (32 hex) à la racine du site, servi en
#  https://egypte.osirynx.com/<clé>.txt. Ne pas le renommer ni le supprimer.
#  Appelé automatiquement par bump.sh après vérification de la production.
#  Les pages "noindex" sont exclues. Réponses : 200/202 = OK, 403 = clé non
#  trouvée en ligne, 422 = URL hors domaine, 429 = trop d'envois.
# =============================================================================
set -euo pipefail
cd "$(dirname "$0")"

HOST="egypte.osirynx.com"
KEYFILE=$(ls *.txt 2>/dev/null | grep -E '^[0-9a-f]{32}\.txt$' | head -1 || true)
if [ -z "$KEYFILE" ]; then
  echo "  IndexNow             clé introuvable (<32 hex>.txt à la racine)" >&2
  exit 1
fi
KEY="${KEYFILE%.txt}"

DRY=0
ARGS=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    *) ARGS+=("$a") ;;
  esac
done
[ ${#ARGS[@]} -ge 1 ] || { sed -n '2,19p' "$0" | sed 's/^# \?//'; exit 1; }

file_to_url() {
  local f="$1"
  # pages exclues de l'index : inutile de les signaler
  if [ -f "$f" ] && grep -qiE '<meta[^>]+noindex' "$f"; then return; fi
  case "$f" in
    index.html)      echo "https://$HOST/" ;;
    blog/index.html) echo "https://$HOST/blog/" ;;
    *)               echo "https://$HOST/$f" ;;
  esac
}

URLS=()
case "${ARGS[0]}" in
  --all)
    while IFS= read -r u; do URLS+=("$u"); done < <(grep -oE '<loc>[^<]+</loc>' sitemap.xml | sed -E 's#</?loc>##g')
    ;;
  --since)
    A="${ARGS[1]:?commit de départ manquant}"
    B="${ARGS[2]:-HEAD}"
    while IFS= read -r f; do
      u=$(file_to_url "$f"); [ -n "$u" ] && URLS+=("$u")
    done < <(git diff --name-only --diff-filter=AMR "$A" "$B" -- '*.html')
    ;;
  *)
    URLS=("${ARGS[@]}")
    ;;
esac

if [ ${#URLS[@]} -eq 0 ]; then
  echo "  IndexNow             aucune page modifiée à signaler"
  exit 0
fi

PAYLOAD=$(python3 -c '
import json, sys
host, key = sys.argv[1], sys.argv[2]
print(json.dumps({"host": host, "key": key,
                  "keyLocation": "https://%s/%s.txt" % (host, key),
                  "urlList": sys.argv[3:]}))' "$HOST" "$KEY" "${URLS[@]}")

if [ "$DRY" -eq 1 ]; then
  echo "  IndexNow (dry-run)   ${#URLS[@]} URL(s) :"
  printf '                       %s\n' "${URLS[@]}"
  exit 0
fi

CODE=$(curl -s -o /tmp/indexnow.out -w '%{http_code}' --max-time 30 \
  -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data "$PAYLOAD" || echo "000")

case "$CODE" in
  200|202) echo "  IndexNow             ${#URLS[@]} URL(s) signalée(s) (HTTP $CODE)" ;;
  *) echo "  IndexNow             ECHEC HTTP $CODE : $(head -c 300 /tmp/indexnow.out 2>/dev/null)"; exit 1 ;;
esac
