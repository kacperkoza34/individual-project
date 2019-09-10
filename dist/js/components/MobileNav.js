class MobileNav{
  constructor(){
    const thisMobileNav = this;
    thisMobileNav.toggleNav();
  }

  toggleNav(){
    const thisMobileNav = this;

    document.querySelector('.sidebar-header span').addEventListener('click', function(e) {
      e.preventDefault();

      const mobileMenu = document.querySelector('.mobile-nav');

      let condition = mobileMenu.classList.toggle('mobile-nav-active');

      if(!condition) mobileMenu.classList.add('mobile-nav-disactive');
      else mobileMenu.classList.remove('mobile-nav-disactive');

      const fullMenu = document.querySelector('.aside-bar');

      fullMenu.classList.toggle('side-bar-active');
    });
  }
}

export default MobileNav;
