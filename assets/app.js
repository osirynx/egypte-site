/* Shared shell: nav, reveal, lightbox, footer, analytics */

/* ============================================================
   VERSION DU SITE — SOURCE DE VERITE UNIQUE
   ------------------------------------------------------------
   Affichee en bas de chaque page via le footer genere ci-dessous.
   A incrementer AVANT chaque commit deploye, puis taguer :
     git tag -a v1.0.0 -m "..." && git push origin v1.0.0
   Semantique retenue :
     MAJEUR  refonte structurelle / changement de navigation
     MINEUR  nouvel article, nouvelle page, nouvelle fonctionnalite
     PATCH   correction de contenu, de lien, de style
   ============================================================ */
const SITE_VERSION = '1.5.0';

/* -------- NAV + FOOTER -------- */
function injectShell(activePage) {
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

/* -------- AFFILIATE CLICK TRACKING (GA4) -------- */
function initAffiliateTracking() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="getyourguide.com"]');
    if (!link || typeof window.gtag !== 'function') return;
    window.gtag('event', 'affiliate_click', {
      affiliate: 'getyourguide',
      link_url: link.href,
      page_path: window.location.pathname
    });
  });
}

/* -------- INIT -------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  injectShell(page);
  initReveal();
  initLightbox();
  initAnalytics();
  initAffiliateTracking();
});
