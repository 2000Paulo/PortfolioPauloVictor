// dentro de src/js/main.js
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    const target = link.getAttribute('href');
    if (target && target !== '#') {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  