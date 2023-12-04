document.addEventListener('DOMContentLoaded', function () {
   const burgerMenu = document.querySelector('.burger-menu');
   const navbarNav = document.querySelector('.navbar-collapse');
   const iconAnimation = document.querySelector('.burger-icon');

   burgerMenu.addEventListener('click', function () {
      iconAnimation.classList.toggle('is-active');
      navbarNav.classList.toggle('active');
   });
});