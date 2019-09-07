





document.querySelector('.sidebar-header span').addEventListener('click', function(e) {
  e.preventDefault();

  const mobileMenu = document.querySelector('.mobile-nav');

  let condition = mobileMenu.classList.toggle('mobile-nav-active');

  if(!condition) mobileMenu.classList.add('mobile-nav-disactive');
  else mobileMenu.classList.remove('mobile-nav-disactive');

  const fullMenu = document.querySelector('.aside-bar');

  fullMenu.classList.toggle('side-bar-active');
});

/*=====================================================================================*/
                                       /* MODAL*/

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}


document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})



document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})


document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

setTimeout(function(){
  openModal(document.getElementById('myModal'));
},3000);




function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}
