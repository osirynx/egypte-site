/* Shared shell: nav, reveal, lightbox, footer, analytics, visitor counter */

/* -------- NAV + FOOTER -------- */
function injectShell(activePage) {
  const navHTML = `
    <nav class="nav" id="nav" role="navigation" aria-label="Navigation principale">
      <a href="index.html" class="nav-logo" aria-label="Accueil — Égypte MMXXVI">ÉGYPTE<span>·</span>MMXXVI</a>
      <div class="nav-links" id="navLinks">
        <a href="index.html" data-page="home" aria-label="Accueil">Accueil</a>

        <div class="nav-dropdown" id="villesDropdown" role="navigation" aria-label="Villes">
          <button aria-haspopup="true" aria-expanded="false" aria-controls="villesMenu">
            Villes <span class="dd-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="dropdown-menu" id="villesMenu" role="menu">
            <a href="le-caire.html"    role="menuitem"><span class="dd-icon">🏛</span>Le Caire</a>
            <a href="assouan.html"     role="menuitem"><span class="dd-icon">⛵</span>Assouan</a>
            <a href="louxor.html"      role="menuitem"><span class="dd-icon">𓂀</span>Louxor</a>
            <a href="abou-simbel.html" role="menuitem"><span class="dd-icon">❂</span>Abou Simbel</a>
            <div class="dd-sep" role="separator"></div>
            <a href="croisiere.html"   role="menuitem"><span class="dd-icon">🚢</span>Croisière Nil</a>
            <a href="mer-rouge.html"   role="menuitem"><span class="dd-icon">🐠</span>Mer Rouge</a>
          </div>
        </div>

        <a href="galerie.html" data-page="galerie" aria-label="Galerie">Galerie</a>

        <div class="nav-dropdown" id="voyageDropdown" role="navigation" aria-label="Le Voyage">
          <button aria-haspopup="true" aria-expanded="false" aria-controls="voyageMenu">
            Le Voyage <span class="dd-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="dropdown-menu" id="voyageMenu" role="menu">
            <a href="itineraire.html" data-page="itineraire" role="menuitem"><span class="dd-icon">🗺</span>Itinéraire</a>
            <a href="journal.html"    data-page="journal"    role="menuitem"><span class="dd-icon">📖</span>Journal</a>
            <a href="carte.html"      data-page="carte"      role="menuitem"><span class="dd-icon">📍</span>Carte interactive</a>
          </div>
        </div>

        <a href="mythologie.html" data-page="mythologie" aria-label="Mythologie">Mythologie</a>
        <a href="infos.html"      data-page="infos"      aria-label="Infos pratiques">Infos</a>
      </div>
      <button class="nav-burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

  const footHTML = `
    <footer role="contentinfo">
      <div class="logo">Égypte · MMXXVI</div>
      <div class="sub">14 jours sur les terres des pharaons · Avril 2026</div>
      <nav class="foot-nav" aria-label="Navigation pied de page">
        <a href="index.html">Accueil</a>
        <a href="galerie.html">Galerie</a>
        <a href="itineraire.html">Itinéraire</a>
        <a href="journal.html">Journal</a>
        <a href="carte.html">Carte</a>
        <a href="mythologie.html">Mythologie</a>
        <a href="infos.html">Infos</a>
      </nav>
      <nav class="foot-nav" aria-label="Villes" style="margin-top:.6rem;opacity:.7">
        <a href="le-caire.html">Le Caire</a>
        <a href="assouan.html">Assouan</a>
        <a href="louxor.html">Louxor</a>
        <a href="abou-simbel.html">Abou Simbel</a>
        <a href="croisiere.html">Croisière Nil</a>
        <a href="mer-rouge.html">Mer Rouge</a>
      </nav>
      <div class="visitor-counter" id="visitorCounter" aria-live="polite"></div>
      <div class="credit">De Nice au Caire — d'Assouan à la Mer Rouge</div>
    </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footHTML);

  if (activePage) {
    const a = document.querySelector(`.nav-links a[data-page="${activePage}"]`);
    if (a) a.classList.add('active');
    if (activePage === 'villes') {
      const dd = document.getElementById('villesDropdown');
      if (dd) dd.classList.add('active');
    }
    if (['itineraire','journal','carte'].includes(activePage)) {
      const dd = document.getElementById('voyageDropdown');
      if (dd) dd.classList.add('active');
    }
  }

  const nav = document.getElementById('nav');
  if (activePage && activePage !== 'home') {
    nav.classList.add('always-solid');
  } else {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, {passive: true});
  }

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // Mobile dropdown toggle for Villes & Le Voyage
  ['villesDropdown', 'voyageDropdown'].forEach(id => {
    const dd = document.getElementById(id);
    const btn = dd ? dd.querySelector('button') : null;
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 1100) {
        e.stopPropagation();
        const isOpen = dd.classList.toggle('mob-open');
        btn.setAttribute('aria-expanded', isOpen);
      }
    });
  });

  // Desktop hover: add 200ms delay before closing so mouse can travel to menu
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    let closeTimer;
    dd.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      dd.classList.add('dd-open');
      const btn = dd.querySelector('button');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    });
    dd.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        dd.classList.remove('dd-open');
        const btn = dd.querySelector('button');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }, 150);
    });
  });
}

/* -------- REVEAL -------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold: .12, rootMargin: '0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* -------- LIGHTBOX -------- */
function initLightbox() {
  if (!window.PHOTOS) return;
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Visionneuse de photos');
  lb.innerHTML = `
    <button class="lb-close" id="lbClose" aria-label="Fermer">✕ Fermer</button>
    <button class="lb-nav lb-prev" id="lbPrev" aria-label="Photo précédente">‹ Préc.</button>
    <img id="lbImg" alt="Photo du voyage en Égypte"/>
    <button class="lb-nav lb-next" id="lbNext" aria-label="Photo suivante">Suiv. ›</button>
    <div class="lb-counter" id="lbCounter" aria-live="polite"></div>`;
  document.body.appendChild(lb);

  const lbImg = document.getElementById('lbImg');
  const lbCounter = document.getElementById('lbCounter');
  let lbIndex = 0;

  function openLB(idx) {
    lbIndex = ((idx % window.PHOTOS.length) + window.PHOTOS.length) % window.PHOTOS.length;
    lbImg.src = window.PHOTOS[lbIndex];
    lbCounter.textContent = `${String(lbIndex + 1).padStart(2, '0')} / ${window.PHOTOS.length}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lbClose').focus();
  }
  function closeLB() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-img]');
    if (t) openLB(parseInt(t.dataset.img, 10));
  });
  document.getElementById('lbClose').addEventListener('click', closeLB);
  document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); openLB(lbIndex - 1); });
  document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); openLB(lbIndex + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowRight') openLB(lbIndex + 1);
    if (e.key === 'ArrowLeft') openLB(lbIndex - 1);
  });
}

/* -------- GOOGLE ANALYTICS -------- */
function initAnalytics() {
  const id = window.GA_ID;
  if (!id || id === 'G-XXXXXXXXXX') return; // placeholder — GA non encore configuré

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
}

/* -------- VISITOR COUNTER -------- */
function initCounter() {
  const el = document.getElementById('visitorCounter');
  if (!el) return;

  const SESSION_KEY = 'egypte_counted';
  const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

  function displayCount(n) {
    if (n === null || n === undefined) return;
    const formatted = Number(n).toLocaleString('fr-FR');
    el.textContent = `— ${formatted} visite${Number(n) > 1 ? 's' : ''} —`;
  }

  if (!alreadyCounted) {
    fetch('/api/count', { method: 'POST' })
      .then(r => r.json())
      .then(data => {
        sessionStorage.setItem(SESSION_KEY, '1');
        displayCount(data.count);
      })
      .catch(() => {});
  } else {
    fetch('/api/count')
      .then(r => r.json())
      .then(data => displayCount(data.count))
      .catch(() => {});
  }
}

/* -------- INIT -------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  injectShell(page);
  initReveal();
  initLightbox();
  initAnalytics();
  initCounter();
});
