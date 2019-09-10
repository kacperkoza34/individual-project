





var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [20, 50, 100, 75, 25, 0],
            label: 'Left dataset',

            // This binds the dataset to the left y axis
            yAxisID: 'left-y-axis'
        }],
        labels: ['2019-9-2', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    options: {
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
            }, {
                id: 'right-y-axis',
                type: 'linear',
                position: 'right'
            }]
        }
    }
});



const app ={

initPages: function(){
  const thisApp = this;

  thisApp.pages = document.querySelector('#pages').children;
  console.log('pages: ', thisApp.pages );

  thisApp.navLinks = document.querySelectorAll('aside nav .sidebar-ul a');
  console.log('navLinks: ', thisApp.navLinks );

  thisApp.linksArray = Array.from(thisApp.navLinks);

  const idFromHash = window.location.hash.replace('#/','');
  console.log(idFromHash);

  let pageMatchingHash = thisApp.pages[0].id;

  for(let page of thisApp.pages){
    if(page.id == idFromHash){
      pageMatchingHash = page.id;
      break;
    }
  }

  thisApp.activatePage(pageMatchingHash);

  for(let link of thisApp.linksArray){
    //console.log('link z node list:',link);
    link.addEventListener('click', function(event){
      const clickedElement = this;
      event.preventDefault();

      console.log(clickedElement);
      /* get pade id from href attribute */
      //////////////////
      const id = clickedElement.getAttribute('href').replace('#','');
      /* run thisApp.activatePage with that id */
      ///////////////////

      thisApp.activatePage(id);
      /* change URL hash */
      window.location.hash = '#/' + id;

      });
    }
  },


  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
    page.classList.toggle('content', page.id == pageId);
    }


    for(let link of thisApp.linksArray){
      //console.log('link z node list:',link);

      let listElement = link.querySelector('li');
      //console.log(listElement);

      listElement.classList.toggle(
        'sidebar-li-active',
        link.getAttribute('href') == '#' + pageId
      );
      //if(link.getAttribute('href') == '#' + pageId & '#' + pageId == '#home') check = true;
      //console.log(link.getAttribute('href'));
    }

  },

}

app.initPages();









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
},15000);




function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  modal.classList.add('show')
}
