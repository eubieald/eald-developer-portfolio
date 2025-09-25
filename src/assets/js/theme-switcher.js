const themeSwitcher = document.getElementById('theme-switcher');
const bodyElement = document.body;

const storedValue = localStorage.getItem('light-mode');

if (storedValue !== null) {
  const isLight = storedValue === 'true';
  bodyElement.classList.toggle('light-mode', isLight);
  themeSwitcher.checked = isLight;
}

themeSwitcher.addEventListener('change', () => {
  const isLight = themeSwitcher.checked;
  bodyElement.classList.toggle('light-mode', isLight);
  localStorage.setItem('light-mode', isLight);
});
