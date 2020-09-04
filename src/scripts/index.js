// toggle

const toggleTheme = document.querySelector('.toggle-wrap');
const theme = document.querySelector('.theme');

toggleTheme.addEventListener('click', function (e) {
  theme.classList.toggle('dark');
  this.classList.toggle('off');
})