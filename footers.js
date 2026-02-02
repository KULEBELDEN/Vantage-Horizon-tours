// Animate stats counters
const statBoxes = document.querySelectorAll('.stat-box');
statBoxes.forEach(box => {
  const h3 = box.querySelector('h3');
  if (h3) {
    const text = h3.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    if (!isNaN(number)) {
      h3.dataset.target = number;
      h3.textContent = '0';
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(h3, number);
            statsObserver.unobserve(entry.target);
          }
        });
      });
      statsObserver.observe(box);
    }
  }
});