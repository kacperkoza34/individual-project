





document.querySelector('.sidebar-header span').addEventListener('click', function(e) {
  e.preventDefault();
  const mobileMenu = document.querySelector('.mobile-nav')
  console.log(mobileMenu);
  mobileMenu.classList.toggle('mobile-nav-active');

  const fullMenu = document.querySelector('.side-bar')
  console.log(fullMenu);
  fullMenu.classList.toggle('side-bar-active');

});
