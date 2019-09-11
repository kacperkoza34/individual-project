class MobileNav{
  constructor(){
    const thisMobileNav = this;
    thisMobileNav.eventListner();
  }

  eventListner(){
    const thisMobileNav = this;

    document.querySelector('.sidebar-header span').addEventListener('click', function(event) {
      thisMobileNav.toggleNav(event);
    });

    const links = document.querySelectorAll('.mobile-nav a')
    for(let link of links){
      link.addEventListener('click', function(event) {
        thisMobileNav.toggleNav(event);
      });
    }
  }

  toggleNav(event){
    const thisMobileNav = this;

    event.preventDefault();

    const mobileMenu = document.querySelector('.mobile-nav');

    let condition = mobileMenu.classList.toggle('mobile-nav-active');

    if(!condition) mobileMenu.classList.add('mobile-nav-disactive');
    else mobileMenu.classList.remove('mobile-nav-disactive');

    const fullMenu = document.querySelector('.aside-bar');

    fullMenu.classList.toggle('side-bar-active');
  }
}

export default MobileNav;
