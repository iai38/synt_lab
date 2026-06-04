/* Карусели (scroll-snap) + липкая CTA для вариантов главной */
(function () {
  'use strict';

  // --- Карусели ---
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var viewport = carousel.querySelector('.carousel-viewport');
    var prev = carousel.querySelector('[data-prev]');
    var next = carousel.querySelector('[data-next]');
    if (!viewport) return;

    function step() {
      var slide = viewport.querySelector('.carousel-slide');
      var gap = 24;
      return slide ? slide.getBoundingClientRect().width + gap : viewport.clientWidth * 0.8;
    }
    if (prev) prev.addEventListener('click', function () { viewport.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { viewport.scrollBy({ left: step(), behavior: 'smooth' }); });
  });

  // --- Липкая нижняя CTA (вариант C) ---
  var sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 700) sticky.classList.add('show');
      else sticky.classList.remove('show');
    }, { passive: true });
  }

  // --- Демо-формы заявок ---
  document.querySelectorAll('form[data-lead]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.innerHTML = '<p style="margin:0;color:var(--primary);font-weight:700;text-align:center;">Спасибо! Мы свяжемся с вами в ближайшее время.</p>';
    });
  });
})();
