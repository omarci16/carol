/* ============================================================
   Carol Gasztroműhely — Main Script
   ============================================================ */

(function () {
  'use strict';

  // ── Translations ─────────────────────────────────────────
  const T = {
    hu: {
      // Nav
      'nav-about':       'Rólunk',
      'nav-services':    'Szolgáltatások',
      'nav-courses':     'Kurzusaink',
      'nav-menu':        'Heti menü',
      'nav-alacarte':    'Állandó menü',
      'nav-contact':     'Kapcsolat',
      // Hero
      'hero-title':      'Főzőiskola<br><span class="indent">&amp; <em>Gasztroműhely</em></span>',
      'hero-tagline':    '<strong>Élményfőzés.</strong> Minőségi konyhaművészet.<br>Felnőtteknek · Gyerekeknek · Csapatoknak',
      'hero-btn1':       'Heti menü',
      'hero-btn2':       'Állandó menü',
      // About
      'label-about':     'Rólunk',
      'about-h2':        '<em>Rácz Karolina</em> vagyok,<br>a hely megálmodója',
      'about-lead':      'Debrecen szívében hoztam létre ezt a teret, ahol a főzés több mint puszta konyhai tevékenység — élmény, közösség, alkotás. A Carol Gasztroműhely az én álmom: egy hely, ahol mindenki otthonra talál a tűzhely előtt.',
      'about-p2':        'Rendszeresen tartunk főzőkurzusokat felnőtteknek és gyerekeknek — kezdőknek és haladóknak, húsevőknek és vegán életmódot folytatóknak. Magas minősítéssel rendelkező séfjeink nemcsak főzni tanítanak: megmutatják, hogyan válik egy fogás igazi élménnyé.',
      'about-p3':        'A Carol Art&Cafe tere a gasztronómia, a művészet és a közösség metszéspontján születik újra minden alkalommal — legyen szó főzőiskoláról, csapatépítőről, kisebb esküvőről vagy szakmai előadásról.',
      'stat-1':          'Fő / rendezvény',
      'stat-2':          'Szolgáltatás',
      'stat-3':          'Naponta nyitva',
      // Services
      'label-services':  'Szolgáltatások',
      'services-h2':     'Amit kínálunk',
      's1-name':         'Főzőkurzusok',
      's1-desc':         'Felnőtt és gyermek kurzusok · Kezdő és haladó szintek · Vegán workshopok',
      's2-name':         'Rendezvény helyszín',
      's2-desc':         '15–60 fő · Születésnapok, névnapok, esküvők · Egyedi menük',
      's3-name':         'Csapatépítő tréningek',
      's3-desc':         'Gasztronómiai csapatépítés · Oldott légkör · Közös főzés és étkezés',
      's4-name':         'Előadások',
      's4-desc':         'Egészség · Pszichológia · Művészet · Belső építészet · Marketing',
      'service-cta':     'Érdeklődöm',
      // Courses
      'label-courses':   'Kurzusaink',
      'courses-h2':      'Közelgő <em>kurzusaink</em>',
      'courses-sub':     'Minden kurzus korlátozott létszámmal indul — foglald le helyedet időben.',
      // Gift cards
      'label-gift':      'Ajándékkártyák',
      'gift-h2':         'Adj ajándékba<br><em>élményt</em>',
      'gift-p1':         'Az ajándékkártya a legtökéletesebb meglepetés minden gasztronómia-rajongónak. Válassz értéket, és add ajándékba a Carol Gasztroműhely élményét — főzőkurzust, különleges vacsorát vagy workshopot.',
      'gift-p2':         'Ajándékkártyáink személyesen vásárolhatók meg a műhelyben, vagy telefonon és e-mailben is megrendelhetők.',
      'gift-cta':        'Megrendelem',
      // Weekly menu
      'label-menu-s':    'Heti menü',
      'menu-h2':         'A hét <em>fogásai</em>',
      // Carol Fantasy
      'label-fantasy':   'Hamarosan',
      'fantasy-h2':      'Carol <em>Fantasy</em>',
      'fantasy-p':       'Kézműves konyhai eszközök és prémium lakberendezési tárgyak.<br>Egyedi belső építészet — ahol a szépség és a funkció találkozik.',
      'fantasy-btn':     'Fedezd fel',
      // Testimonials
      'label-testi':     'Vendégeink mondták',
      'testi-h2':        'Valódi <em>élmények</em>',
      // Contact
      'label-contact':   'Kapcsolat',
      'contact-h2':      'Találkozzunk<br><em>Debrecenben</em>',
      'contact-addr':    'Cím',
      'contact-hours-l': 'Nyitvatartás',
      'contact-hours-v': 'Mindennap · 09:30 – 18:30',
      'contact-phone-l': 'Telefon',
      'contact-email-l': 'E-mail',
      'contact-social':  'Kövess minket',
      // Footer
      'footer-about':    'Rólunk',
      'footer-courses':  'Kurzusaink',
      'footer-menu':     'Heti menü',
      'footer-alacarte': 'Állandó menü',
      'footer-privacy':  'Adatvédelem',
    },
    en: {
      // Nav
      'nav-about':       'About',
      'nav-services':    'Services',
      'nav-courses':     'Courses',
      'nav-menu':        'Weekly Menu',
      'nav-alacarte':    'À La Carte',
      'nav-contact':     'Contact',
      // Hero
      'hero-title':      'Cooking School<br><span class="indent">&amp; <em>Gastro Workshop</em></span>',
      'hero-tagline':    '<strong>Experiential Cooking.</strong> Quality culinary arts.<br>For Adults · For Children · For Teams',
      'hero-btn1':       'Weekly Menu',
      'hero-btn2':       'À La Carte',
      // About
      'label-about':     'About Us',
      'about-h2':        'I am <em>Rácz Karolina</em>,<br>the creator of this place',
      'about-lead':      'In the heart of Debrecen, I created a space where cooking is more than a kitchen activity — it is an experience, a community, a form of creation. Carol Gastro Workshop is my dream: a place where everyone feels at home by the stove.',
      'about-p2':        'We regularly host cooking courses for adults and children — for beginners and advanced cooks, for meat-lovers and vegans alike. Our highly qualified chefs don\'t just teach cooking: they show you how a dish becomes a true experience.',
      'about-p3':        'The Carol Art&amp;Cafe space is reborn at the intersection of gastronomy, art and community — whether for a cooking class, a team-building event, a small wedding, or a professional lecture.',
      'stat-1':          'Guests / event',
      'stat-2':          'Services',
      'stat-3':          'Open daily',
      // Services
      'label-services':  'Services',
      'services-h2':     'What We Offer',
      's1-name':         'Cooking Courses',
      's1-desc':         'Adult &amp; children\'s courses · Beginner &amp; advanced levels · Vegan workshops',
      's2-name':         'Event Venue',
      's2-desc':         '15–60 guests · Birthdays, name days, weddings · Custom menus',
      's3-name':         'Team Building',
      's3-desc':         'Culinary team building · Relaxed atmosphere · Cooking &amp; dining together',
      's4-name':         'Lectures',
      's4-desc':         'Health · Psychology · Art · Interior Architecture · Marketing',
      'service-cta':     'Enquire',
      // Courses
      'label-courses':   'Our Courses',
      'courses-h2':      'Upcoming <em>Courses</em>',
      'courses-sub':     'Each course runs with limited spots — reserve your place in time.',
      // Gift cards
      'label-gift':      'Gift Cards',
      'gift-h2':         'Give the Gift<br><em>of Experience</em>',
      'gift-p1':         'A gift card is the perfect surprise for any food enthusiast. Choose a value and give the Carol Gastro Workshop experience — a cooking course, a special dinner, or a workshop.',
      'gift-p2':         'Our gift cards can be purchased in person at the workshop, or ordered by phone or email.',
      'gift-cta':        'Order Now',
      // Weekly menu
      'label-menu-s':    'Weekly Menu',
      'menu-h2':         'This Week\'s <em>Dishes</em>',
      // Carol Fantasy
      'label-fantasy':   'Coming Soon',
      'fantasy-h2':      'Carol <em>Fantasy</em>',
      'fantasy-p':       'Artisan kitchen tools and premium home décor.<br>Bespoke interior design — where beauty meets function.',
      'fantasy-btn':     'Discover',
      // Testimonials
      'label-testi':     'Our Guests Said',
      'testi-h2':        'Real <em>Experiences</em>',
      // Contact
      'label-contact':   'Contact',
      'contact-h2':      'Let\'s Meet in<br><em>Debrecen</em>',
      'contact-addr':    'Address',
      'contact-hours-l': 'Opening Hours',
      'contact-hours-v': 'Every Day · 09:30 – 18:30',
      'contact-phone-l': 'Phone',
      'contact-email-l': 'E-mail',
      'contact-social':  'Follow Us',
      // Footer
      'footer-about':    'About',
      'footer-courses':  'Courses',
      'footer-menu':     'Weekly Menu',
      'footer-alacarte': 'À La Carte',
      'footer-privacy':  'Privacy Policy',
    }
  };

  let currentLang = localStorage.getItem('carol-lang') || 'hu';

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'hu';
    localStorage.setItem('carol-lang', lang);

    const dict = T[lang];
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var key = el.getAttribute('data-t');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Sync all lang buttons (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // Wire all lang buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.dataset.lang);
    });
  });

  // Apply saved language on load
  applyLang(currentLang);

  // ── Navigation scroll state ──────────────────────────────
  const nav = document.getElementById('nav');

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Mobile menu ──────────────────────────────────────────
  const toggle   = document.getElementById('nav-toggle');
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

    toggle.addEventListener('click', function () {
      navLinks.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking the overlay background (not a link or button)
    navLinks.addEventListener('click', function (e) {
      if (e.target === navLinks) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
    });
  }

  // ── Scroll reveal (Intersection Observer) ────────────────
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  // ── Smooth anchor scrolling (offset for fixed nav) ───────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();

      var navH = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;

      var top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ── Auto-resize menu iframe ───────────────────────────────
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'carol-menu-height') {
      var iframe = document.querySelector('.menu-frame-wrap iframe');
      if (iframe) iframe.style.height = e.data.height + 'px';
    }
  });

})();
