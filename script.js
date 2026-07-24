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
