#!/bin/bash
# =============================================================================
#  bump.sh — Gestion de version du site Voyage Égypte
# -----------------------------------------------------------------------------
#  Incrémente SITE_VERSION dans assets/app.js, aligne TOUTES les références
#  ?v= des assets sur cette version, commite, tague, pousse, et purge le
#  cache Cloudflare si les identifiants sont disponibles.
#
#  Pourquoi les deux doivent bouger ensemble :
#  les assets sont servis en "cache-control: max-age=31536000, immutable".
#  Sans changement d'URL, aucun navigateur ne rechargera app.js ni styles.css.
#
#  USAGE
#    ./bump.sh patch "message de commit"     1.0.1 -> 1.0.2
#    ./bump.sh minor "message de commit"     1.0.1 -> 1.1.0
#    ./bump.sh major "message de commit"     1.0.1 -> 2.0.0
#    ./bump.sh 1.4.2 "message de commit"     version explicite
#
#  OPTIONS
#    --dry-run   affiche ce qui serait fait, ne modifie rien
#    --no-push   commit + tag en local, sans push ni déploiement
#
#  CONVENTION
#    MAJEUR  refonte structurelle, changement de navigation
#    MINEUR  nouvel article, nouvelle page, nouvelle fonctionnalité
#    PATCH   correction de contenu, de lien, de style
# =============================================================================

set -euo pipefail

DRY_RUN=0
NO_PUSH=0
ARGS=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY_RUN=1 ;;
    --no-push) NO_PUSH=1 ;;
    *) ARGS+=("$a") ;;
  esac
done

if [ ${#ARGS[@]} -lt 1 ]; then
  sed -n '2,30p' "$0" | sed 's/^# \?//'
  exit 1
fi

BUMP="${ARGS[0]}"
MSG="${ARGS[1]:-}"

# --- Se placer à la racine du dépôt --------------------------------------
cd "$(dirname "$0")"
if [ ! -f assets/app.js ]; then
  echo "ERREUR : assets/app.js introuvable. Lancer le script depuis la racine du dépôt." >&2
  exit 1
fi

# --- Vérifier que l'arbre est propre --------------------------------------
if [ -n "$(git status --porcelain)" ] && [ "$DRY_RUN" -eq 0 ]; then
  echo "ERREUR : des modifications non commitées sont présentes." >&2
  git status --short >&2
  echo "Commite-les ou annule-les avant de lancer un bump." >&2
  exit 1
fi

# --- Calculer la nouvelle version -----------------------------------------
CURRENT=$(grep -oE "const SITE_VERSION = '[0-9]+\.[0-9]+\.[0-9]+'" assets/app.js | grep -oE "[0-9]+\.[0-9]+\.[0-9]+" || true)
if [ -z "$CURRENT" ]; then
  echo "ERREUR : SITE_VERSION introuvable dans assets/app.js" >&2
  exit 1
fi

IFS='.' read -r MA MI PA <<< "$CURRENT"
case "$BUMP" in
  major) NEW="$((MA+1)).0.0" ;;
  minor) NEW="${MA}.$((MI+1)).0" ;;
  patch) NEW="${MA}.${MI}.$((PA+1))" ;;
  [0-9]*.[0-9]*.[0-9]*) NEW="$BUMP" ;;
  *) echo "ERREUR : '$BUMP' n'est ni major/minor/patch ni une version X.Y.Z" >&2; exit 1 ;;
esac

if [ -z "$MSG" ]; then
  echo "ERREUR : message de commit manquant." >&2
  echo "  ./bump.sh $BUMP \"description des changements\"" >&2
  exit 1
fi

echo "════════════════════════════════════════════════════════"
echo "  Version   : $CURRENT  ->  $NEW"
echo "  Message   : $MSG"
[ "$DRY_RUN" -eq 1 ] && echo "  Mode      : DRY-RUN (aucune modification)"
[ "$NO_PUSH" -eq 1 ] && echo "  Mode      : NO-PUSH (local uniquement)"
echo "════════════════════════════════════════════════════════"

# --- Vérifier que le tag n'existe pas déjà --------------------------------
if git rev-parse "v$NEW" >/dev/null 2>&1; then
  echo "ERREUR : le tag v$NEW existe déjà." >&2
  exit 1
fi

# --- Appliquer les modifications ------------------------------------------
export NEW DRY_RUN
python3 - <<'PYEOF'
import io, os, re, glob, sys

VER = os.environ["NEW"]
DRY = os.environ["DRY_RUN"] == "1"

def write(path, content):
    if DRY:
        return
    io.open(path + ".tmp", "w", encoding="utf-8").write(content)
    os.rename(path + ".tmp", path)

# 1. Constante SITE_VERSION
p = "assets/app.js"
s = io.open(p, encoding="utf-8").read()
s2 = re.sub(r"const SITE_VERSION = '[^']*';",
            "const SITE_VERSION = '%s';" % VER, s, count=1)
if s2 == s:
    sys.exit("ERREUR : impossible de remplacer SITE_VERSION")
write(p, s2)
print("  app.js               SITE_VERSION -> %s" % VER)

# 2. Toutes les references ?v= des assets
pat = re.compile(r'((?:\.\./)?assets/(?:app\.js|data\.js|styles\.css))(\?v=[^"\']*)?')
total, touched = 0, 0
for f in sorted(glob.glob("*.html") + glob.glob("blog/*.html")):
    s = io.open(f, encoding="utf-8").read()
    new, n = pat.subn(lambda m: m.group(1) + "?v=" + VER, s)
    if n and new != s:
        write(f, new)
        total += n
        touched += 1
print("  %-20s %d references alignees sur ?v=%s (%d pages)"
      % ("assets HTML", total, VER, touched))

# 3. Version affichee dans le footer statique de chaque page
pat_footver = re.compile(r'(<div class="foot-version">)v[0-9]+\.[0-9]+\.[0-9]+(</div>)')
total2, touched2 = 0, 0
for f in sorted(glob.glob("*.html") + glob.glob("blog/*.html")):
    s = io.open(f, encoding="utf-8").read()
    new, n = pat_footver.subn(lambda m: m.group(1) + "v" + VER + m.group(2), s)
    if n and new != s:
        write(f, new)
        total2 += n
        touched2 += 1
print("  %-20s %d occurrences mises a jour (%d pages)"
      % ("footer version", total2, touched2))
PYEOF

# --- Contrôle de syntaxe JS ------------------------------------------------
NODE=$(command -v node || ls /var/packages/Node.js_v20/target/usr/local/bin/node 2>/dev/null || true)
if [ -n "$NODE" ]; then
  "$NODE" --check assets/app.js && echo "  Syntaxe JS           OK"
else
  echo "  Syntaxe JS           non verifiee (node absent)"
fi

if [ "$DRY_RUN" -eq 1 ]; then
  echo "────────────────────────────────────────────────────────"
  echo "DRY-RUN terminé — aucune modification écrite."
  exit 0
fi

# --- Commit + tag ----------------------------------------------------------
git add -A
git commit -q -m "v$NEW — $MSG

SITE_VERSION $CURRENT -> $NEW
References d'assets ?v= alignees sur $NEW (cache navigateur + Cloudflare)."
git tag -a "v$NEW" -m "v$NEW — $MSG"
echo "  Commit               $(git rev-parse --short HEAD)"
echo "  Tag                  v$NEW"

if [ "$NO_PUSH" -eq 1 ]; then
  echo "────────────────────────────────────────────────────────"
  echo "NO-PUSH — pour publier :"
  echo "  git push origin HEAD:main && git push origin v$NEW"
  exit 0
fi

# --- Push ------------------------------------------------------------------
git push -q origin HEAD:main
git push -q origin "v$NEW"
echo "  Push                 main + v$NEW -> GitHub"
echo "  Vercel               deploiement declenche (~40s)"

# --- Purge Cloudflare (si identifiants disponibles) ------------------------
CF_ENV=""
for c in "$HOME/.egypte-cloudflare.env" "/volume1/specific/egypte-cloudflare.env"; do
  [ -f "$c" ] && CF_ENV="$c" && break
done

if [ -n "$CF_ENV" ]; then
  # shellcheck disable=SC1090
  . "$CF_ENV"
  if [ -n "${CF_ZONE_ID:-}" ] && [ -n "${CF_API_TOKEN:-}" ]; then
    RESP=$(curl -s -X POST \
      "https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache" \
      -H "Authorization: Bearer ${CF_API_TOKEN}" \
      -H "Content-Type: application/json" \
      --data '{"purge_everything":true}' --max-time 30)
    if echo "$RESP" | grep -q '"success":true'; then
      echo "  Cloudflare           cache purge"
    else
      echo "  Cloudflare           ECHEC de la purge — purger manuellement"
    fi
  else
    echo "  Cloudflare           variables CF_ZONE_ID / CF_API_TOKEN absentes de $CF_ENV"
  fi
else
  echo "  Cloudflare           identifiants introuvables — PURGE MANUELLE REQUISE"
  echo "                       dashboard -> Caching -> Configuration -> Purge Everything"
fi

# --- Vérification en production -------------------------------------------
echo "────────────────────────────────────────────────────────"
echo "Attente du deploiement Vercel..."
sleep 50
LIVE=$(curl -s --max-time 25 "https://egypte.osirynx.com/?nocache=$(date +%s)" \
       | grep -oE 'assets/app\.js\?v=[0-9]+\.[0-9]+\.[0-9]+' | head -1)
if [ "$LIVE" = "assets/app.js?v=$NEW" ]; then
  echo "PRODUCTION OK — la page d'accueil reference bien ?v=$NEW"
else
  echo "ATTENTION — la production reference encore : ${LIVE:-<introuvable>}"
  echo "Verifier le deploiement Vercel, puis purger le cache Cloudflare."
fi
echo "Site en ligne : https://egypte.osirynx.com  (v$NEW)"
