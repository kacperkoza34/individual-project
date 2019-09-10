class Modal{
  constructor(){
    const thisModal = this;
    thisModal.closeListers();
    thisModal.displayModal();

  }

  closeModal(){
    const thisModal = this;

    document.getElementById('overlay').classList.remove('show')
  }

  closeListers(){
    const thisModal = this;

    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault()
          thisModal.closeModal()
        })
      });

      document.querySelector('#overlay').addEventListener('click', function(e) {
        if(e.target === this) {
          thisModal.closeModal()
        }
      });


      document.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {
          thisModal.closeModal()
        }
      });
   }

    openModal(modal){
      const thisModal = this;

      document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show')
      })
      document.querySelector('#overlay').classList.add('show');
      modal.classList.add('show')
    }

  displayModal(){
    const thisModal = this;

    setTimeout(function(){
      thisModal.openModal(document.getElementById('myModal'));
    },3000);
  }
}

export default Modal;
