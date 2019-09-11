import Modal from './components/Modal.js';
import MobileNav from './components/MobileNav.js';
import DataPicker from './components/DataPicker.js';
import helpFunctions from './helpFunctions.js';




const app ={

initModal: function(){
  new Modal;
},

initMobileNav: function(){
  new MobileNav;
},

initChart: function(){

  new DataPicker;

  var ctx = document.getElementById('myChart').getContext('2d');

  const localHost = 'http://localhost:3333';
  const url = localHost + '/chart-data';

  fetch(url, { method: 'GET' })
    .then(function(response) {
      return response.json();
    }).then(function(response) {
      test(response);
      let dates;
      const startChart = document.querySelector('#startChart');
      const domElem = document.querySelector('#data-picker');
      startChart.addEventListener('click', function(){
        dates = helpFunctions.separetDates(domElem.value);
        test(response, dates.startDate, dates.endDate);
      });
    })


    //console.log(dates);
    function test(response,
                  startDate = helpFunctions.dateToStr(helpFunctions.addDays(new Date(), -10)),
                  endDate = helpFunctions.dateToStr(new Date()))
    {
      let chart = null;
      let blue = [];
      let orange = [];
      let green = [];
      let date = [];
      let myToggler = false;
      console.log('start date:',startDate);
      console.log('end date:',endDate);

      console.log('blue:',blue);
      console.log('orange:',orange);
      console.log('green:',green);
      console.log('date:',date);



      for(let label in response){
        //console.log(response[label].date);
        if(response[label].date == startDate){
          console.log(startDate, 'test togglera');
          myToggler = true;
        }
        if(myToggler){
          date.push(response[label].date);
          blue.push(response[label].Signups);
          orange.push(response[label].FTD);
          green.push(response[label].Earned);


          if(response[label].date == endDate) myToggler = false;
        }
      }


      chart = new Chart(ctx, {
        "type": "bar",
        "data": {
            "labels": date,
            "datasets": [{
                "label": 'Signups',
                "backgroundColor": "#8DBEC8",
                "borderColor": "#8DBEC8",
                "data": blue
            },
            {
                "label": 'FTD',
                "backgroundColor": "#F29E4E",
                "borderColor": "#F29E4E",
                "data": orange
            },
            {
                "label": 'Earned',
                "backgroundColor": "#71B374",
                "borderColor": "#71B374",
                "data": green,
            }]
        }
      }
      );
    }

},



initPages: function(){
  const thisApp = this;

  thisApp.pages = document.querySelector('#pages').children;
  //console.log('pages: ', thisApp.pages );

  thisApp.navLinks = document.querySelectorAll('aside nav .sidebar-ul a');
  //console.log('navLinks: ', thisApp.navLinks );

  thisApp.linksArray = Array.from(thisApp.navLinks);

  const idFromHash = window.location.hash.replace('#/','');

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
    }

  },

}

app.initChart();
app.initMobileNav();
app.initModal();
app.initPages();
