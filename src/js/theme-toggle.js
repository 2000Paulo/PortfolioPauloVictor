(() => {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const iconLight = document.getElementById('modo-claro');
  const iconDark = document.getElementById('modo-escuro');

  const setTheme = theme => {
    if (theme === 'dark') {
      root.classList.add('dark');
      iconDark.classList.add('hidden');
      iconLight.classList.remove('hidden');
    } else {
      root.classList.remove('dark');
      iconLight.classList.add('hidden');
      iconDark.classList.remove('hidden');
    }
    localStorage.setItem('theme', theme);
  };

  toggleBtn.addEventListener('click', () => {
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  const stored = localStorage.getItem('theme');
  if (stored) {
    setTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
})();