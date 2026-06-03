/* Блог СинтезЛаб — фильтр по рубрикам, поиск, мобильное меню */
(function () {
  'use strict';

  // --- Фильтр по рубрикам ---
  var filterButtons = document.querySelectorAll('.cat-filter button');
  var cards = document.querySelectorAll('.posts-grid .card');
  var searchInput = document.getElementById('blog-search');
  var noResults = document.querySelector('.no-results');
  var activeCat = 'all';

  function applyFilters() {
    var query = (searchInput && searchInput.value || '').trim().toLowerCase();
    var visible = 0;

    cards.forEach(function (card) {
      var cat = card.getAttribute('data-category');
      var text = card.textContent.toLowerCase();
      var matchCat = activeCat === 'all' || cat === activeCat;
      var matchText = !query || text.indexOf(query) !== -1;

      if (matchCat && matchText) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // --- Подписка (демо) ---
  var subForm = document.querySelector('.subscribe form');
  if (subForm) {
    subForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = subForm.querySelector('input');
      if (input && input.value) {
        subForm.innerHTML = '<p style="margin:0;color:#fff;">Спасибо! Мы пришлём свежие материалы на ' + input.value + '</p>';
      }
    });
  }

  // --- Мобильное меню (демо-заглушка) ---
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      alert('Меню навигации — демонстрационная заглушка.');
    });
  }
})();
