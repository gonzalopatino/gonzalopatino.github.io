/* Minimal, reliable enhancements */

const THEME_KEY = 'gp_theme_choice';



/* Fixed-header spacing: measure and set CSS var */
function setHeaderHeightVar() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const h = Math.ceil(header.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--header-h', `${h}px`);
  // If CSS loaded earlier, ensure body respects the var now
  document.body.style.paddingTop = `var(--header-h)`;
}
// 
function initHeaderSpacing() {
  setHeaderHeightVar();
  window.addEventListener('resize', setHeaderHeightVar, { passive: true });
  document.addEventListener('shown.bs.collapse', setHeaderHeightVar);
  document.addEventListener('hidden.bs.collapse', setHeaderHeightVar);
}



function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);
  document.querySelectorAll('[data-theme-choice]').forEach(el => {
    el.addEventListener('click', (e) => {
      const choice = e.currentTarget.getAttribute('data-theme-choice');
      localStorage.setItem(THEME_KEY, choice);
      applyTheme(choice);
      setHeaderHeightVar(); // header colors might change size slightly
    });
  });
}

/* Scrollspy via IntersectionObserver */
function initScrollspy() {
  const links = Array.from(document.querySelectorAll('.navbar .nav-link[href^="#"]'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.navbar .nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
        history.replaceState(null, '', `#${id}`);
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });

  sections.forEach(sec => observer.observe(sec));
}



/* Smooth anchors accounting for fixed header */
function initSmoothAnchors() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
    const y = el.getBoundingClientRect().top + window.scrollY - (headerH + 6);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    if (!document.getElementById(id)) return;
    e.preventDefault();
    scrollToId(id);
  });

  if (location.hash.length > 1) {
    setTimeout(() => scrollToId(location.hash.slice(1)), 0);
  }
}

/* Safe external links */
function initExternalLinks() {
  const anchors = document.querySelectorAll('a[href]');
  const host = location.host;
  anchors.forEach(a => {
    try {
      const url = new URL(a.href, location.href);
      if (url.host !== host && !a.classList.contains('btn')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    } catch {}
  });
}

/* Boot */
document.addEventListener('DOMContentLoaded', () => {
  initHeaderSpacing();
  initTheme();
  initScrollspy();
  initSmoothAnchors();
  initExternalLinks();
});
