// Rotating hero headline word
document.addEventListener('DOMContentLoaded', function () {
  const rotatingWord = document.getElementById('heroRotatingWord');
  if (!rotatingWord) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const words = ['Disruptive', 'Unforgettable', 'Award-Winning', 'Culture-Shifting'];
  let index = 0;

  setInterval(function () {
    index = (index + 1) % words.length;
    rotatingWord.classList.add('is-swapping');

    setTimeout(function () {
      rotatingWord.textContent = words[index];
      rotatingWord.classList.remove('is-swapping');
    }, 400);
  }, 2800);
});

// Portfolio category filter
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  if (!filterButtons.length || !portfolioItems.length) return;

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      portfolioItems.forEach(function (item) {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !match);
      });
    });
  });
});
