// Natura Agrobrand — shared site behavior. Plain JS, no build step, no dependencies.

(function mobileNav() {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  var iconMenu = toggle.querySelector('.icon-menu');
  var iconClose = toggle.querySelector('.icon-close');

  toggle.addEventListener('click', function () {
    var willOpen = menu.hidden;
    menu.hidden = !willOpen;
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Close menu' : 'Open menu');
    if (iconMenu && iconClose) {
      iconMenu.hidden = willOpen;
      iconClose.hidden = !willOpen;
    }
  });
})();

(function contactForm() {
  var form = document.querySelector('[data-form]');
  if (!form) return;
  var status = form.querySelector('.form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(function (response) {
        if (!response.ok) throw new Error('submission failed');
        status.textContent = "Thank you — your enquiry has been sent. We'll be in touch soon.";
        status.hidden = false;
        form.reset();
      })
      .catch(function () {
        status.textContent = 'Something went wrong sending your message. Please email us directly instead.';
        status.hidden = false;
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();

(function countUpStats() {
  var els = document.querySelectorAll('.stat-value[data-target]');
  if (!els.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animate(el) {
    var target = parseInt(el.dataset.target, 10);
    var suffix = el.dataset.suffix || '';
    if (reduceMotion || !target) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    var duration = 1200;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  els.forEach(function (el) {
    observer.observe(el);
  });
})();
