const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menus = document.querySelector('.navbar__menus');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click' , () => {
  menus.classList.toggle('active');
  icons.classList.toggle('active');
});
