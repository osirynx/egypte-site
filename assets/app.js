/* Shared shell: nav, reveal, lightbox, footer, analytics */

/* -------- NAV + FOOTER -------- */
function injectShell(activePage) {
  const navHTML = `
    <nav class="nav" id="nav" role="navigation" aria-label="Navigation principale">
      <a href="/" class="nav-logo" aria-label="Accueil — Égypte MMXXVI">ÉGYPTE<span>·</span>MMXXVI</a>
      <div class="nav-links" id="navLinks">
        <a href="/" data-page="home" aria-label="Accueil">Accueil</a>

        <div class="nav-dropdown" id="villesDropdown" role="navigation" aria-label="Villes">
          <button aria-haspopup="true" aria-expanded="false" aria-controls="villesMenu">
            Destinations <span class="dd-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="dropdown-menu" id="villesMenu" role="menu">
            <a href="/le-caire.html"    role="menuitem"><span class="dd-icon">🏛</span>Le Caire</a>
            <a href="/assouan.html"     role="menuitem"><span class="dd-icon">⛵</span>Assouan</a>
            <a href="/louxor.html"      role="menuitem"><span class="dd-icon">𓂀</span>Louxor</a>
            <a href="/abou-simbel.html" role="menuitem"><span class="dd-icon">❂</span>Abou Simbel</a>
            <div class="dd-sep" role="separator"></div>
            <a href="/croisiere.html"   role="menuitem"><span class="dd-icon">🚢</span>Croisière Nil</a>
            <a href="/mer-rouge.html"   role="menuitem"><span class="dd-icon">🐠</span>Mer Rouge</a>
          </div>
        </div>

        <a href="/galerie.html" data-page="galerie" aria-label="Galerie">Galerie</a>
        <a href="/blog/" data-page="blog" aria-label="Guides pratiques">Guides</a>

        <div class="nav-dropdown" id="voyageDropdown" role="navigation" aria-label="Le Voyage">
          <button aria-haspopup="true" aria-expanded="false" aria-controls="voyageMenu">
            Mon Voyage <span class="dd-arrow" aria-hidden="true">▾</span>
          </button>
          <div class="dropdown-menu" id="voyageMenu" role="menu">
            <a href="/itineraire.html" data-page="itineraire" role="menuitem"><span class="dd-icon">🗺</span>Itinéraire</a>
            <a href="/journal.html"    data-page="journal"    role="menuitem"><span class="dd-icon">📖</span>Journal</a>
            <a href="/carte.html"      data-page="carte"      role="menuitem"><span class="dd-icon">📍</span>Carte interactive</a>
          </div>
        </div>

        <a href="/mythologie.html" data-page="mythologie" aria-label="Mythologie">Mythologie</a>
        <a href="/infos.html"      data-page="infos"      aria-label="Infos pratiques">Infos</a>
      </div>
      <button class="nav-burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
    </nav>`;

  const footHTML = `
  <footer role="contentinfo">
    <div class="foot-brand">
      <div class="foot-logo">Égypte · MMXXVI</div>
      <div class="foot-tagline">Temples, Nil & Mer Rouge · Avril 2026</div>
    </div>

    <div class="foot-columns">
      <div class="foot-col">
        <div class="foot-col-title">Destinations</div>
        <nav aria-label="Destinations">
          <a href="/le-caire.html"><span class="foot-icon">🏛</span>Le Caire</a>
          <a href="/assouan.html"><span class="foot-icon">⛵</span>Assouan</a>
          <a href="/louxor.html"><span class="foot-icon">𓂀</span>Louxor</a>
          <a href="/abou-simbel.html"><span class="foot-icon">❂</span>Abou Simbel</a>
          <a href="/croisiere.html"><span class="foot-icon">🚢</span>Croisière Nil</a>
          <a href="/mer-rouge.html"><span class="foot-icon">🐠</span>Mer Rouge</a>
        </nav>
      </div>

      <div class="foot-col">
        <div class="foot-col-title">Guides & Ressources</div>
        <nav aria-label="Guides">
          <a href="/blog/"><span class="foot-icon">💰</span>Budget voyage Égypte</a>
          <a href="/mythologie.html"><span class="foot-icon">𓆣</span>Mythologie égyptienne</a>
          <a href="/infos.html"><span class="foot-icon">📋</span>Infos pratiques</a>
          <a href="/galerie.html"><span class="foot-icon">📸</span>Galerie photos</a>
          <a href="mailto:osirynx@gmail.com"><span class="foot-icon">✉</span>Contact</a>
        </nav>
      </div>

      <div class="foot-col">
        <div class="foot-col-title">Mon Voyage</div>
        <nav aria-label="Mon Voyage">
          <a href="/itineraire.html"><span class="foot-icon">🗺</span>Itinéraire jour par jour</a>
          <a href="/journal.html"><span class="foot-icon">📖</span>Journal de bord</a>
          <a href="/carte.html"><span class="foot-icon">📍</span>Carte interactive</a>
          <a href="/"><span class="foot-icon">⌂</span>Accueil</a>
        </nav>
      </div>
    </div>

    <div class="foot-bottom">
      <div class="foot-credit">De Nice au Caire — d'Assouan à la Mer Rouge</div>
      <p class="foot-affiliate">Ce site contient des liens affiliés. Si vous réservez via ces liens, je perçois une petite commission sans surcoût pour vous.</p>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footHTML);

  const gygScript = document.createElement('script');
  gygScript.async = true;
  gygScript.defer = true;
  gygScript.src = 'https://widget.getyourguide.com/dist/pa.umd.production.min.js';
  gygScript.dataset.gygPartnerId = 'JDK0THN';
  document.head.appendChild(gygScript);

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

/* -------- INIT -------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  injectShell(page);
  initReveal();
  initLightbox();
  initAnalytics();
});
