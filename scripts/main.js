/* ============================================================
   Carol Gasztroműhely — Main Script
   ============================================================ */

(function () {
  'use strict';

  // ── Navigation scroll state ──────────────────────────────
  const nav = document.getElementById('nav');

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Mobile menu ──────────────────────────────────────────
  const toggle  = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {

    function openMenu() {
      navLinks.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      animateToggle(true);
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      animateToggle(false);
    }

    function animateToggle(open) {
      const [top, mid, bot] = toggle.querySelectorAll('span');
      if (open) {
        top.style.transform = 'rotate(45deg) translate(4px, 5px)';
        mid.style.opacity   = '0';
        bot.style.transform = 'rotate(-45deg) translate(4px, -5px)';
      } else {
        top.style.transform = '';
        mid.style.opacity   = '';
        bot.style.transform = '';
      }
    }

    toggle.addEventListener('click', () => {
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
    });
  }

  // ── Scroll reveal (Intersection Observer) ────────────────
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Smooth anchor scrolling (offset for fixed nav) ───────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();

      const navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Auto-resize menu iframe ───────────────────────────────
  // Listen for postMessage from the menu widget to adjust height
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'carol-menu-height') {
      const iframe = document.querySelector('.menu-frame-wrap iframe');
      if (iframe) iframe.style.height = e.data.height + 'px';
    }
  });

})();
