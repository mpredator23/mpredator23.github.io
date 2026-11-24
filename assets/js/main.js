/* Miftahul Ulum — portfolio interactions */
(function () {
  'use strict';

  /* ---- Sticky nav shadow ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  const items = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('in'));
  }

  /* ---- Highlight nav link of the section in view ---- */
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  if ('IntersectionObserver' in window && sections.length && navAnchors.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = '#' + entry.target.id;
          navAnchors.forEach((a) =>
            a.classList.toggle('active', a.getAttribute('href') === id)
          );
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Copy email to clipboard ---- */
  const copyBtn = document.querySelector('[data-copy-email]');
  if (copyBtn) {
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = copyBtn.getAttribute('data-copy-email');
      try {
        await navigator.clipboard.writeText(email);
        const original = copyBtn.querySelector('strong').textContent;
        copyBtn.querySelector('strong').textContent = 'Tersalin ✓';
        setTimeout(() => {
          copyBtn.querySelector('strong').textContent = original;
        }, 1600);
      } catch (_) {
        window.location.href = 'mailto:' + email;
      }
    });
  }
})();
