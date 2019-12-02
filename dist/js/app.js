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

  //new DataPicker;

  var ctx = document.getElementById('myChart').getContext('2d');


  const localHost = '//' + window.location.hostname + (window.location.hostname=='protected-taiga-06834.herokuapp.com' ? ':3333' : '');
  const url = localHost + '/chart-data';
  console.log('test heroku');

  fetch(url, { method: 'GET' })
    .then(function(response) {
      return response.json();
    }).then(function(response) {


      new DataPicker(response);

      let dates;

      const startChart = document.querySelector('#startChart');

      const domElem = document.querySelector('#data-picker');


      const chart = new Chart(ctx, {
        "type": "bar",
        "data": {
            "labels": ['test'],
            "datasets": [{
                "label": 'Signups',
                "backgroundColor": "#8DBEC8",
                "borderColor": "#8DBEC8",
                "data": [0]
            },
            {
                "label": 'FTD',
                "backgroundColor": "#F29E4E",
                "borderColor": "#F29E4E",
                "data": [3]
            },
            {
                "label": 'Earned',
                "backgroundColor": "#71B374",
                "borderColor": "#71B374",
                "data": [4]
            }]
        }
      }
      );

      //console.log(date);

      startChart.addEventListener('click', function(){
        dates = helpFunctions.separetDates(domElem.value);
        console.log("Po kliknioecu", chart);
        test(response, chart, dates.startDate, dates.endDate);

      });

        test(response, chart);
    })


    //console.log(dates);
    function test(response, chart,
                  startDate = (response[Object.keys(response)[Object.keys(response).length-5]].date),
                  endDate = (response[Object.keys(response)[Object.keys(response).length-1]].date))
    {


      //let chart = null;
      const blue = [];
      const orange = [];
      const green = [];
      const date = [];
      let myToggler = false;

      //console.log(Object.keys(response)[Object.keys(response).length-1]);
      //console.log('start',startDate);
      //console.log(endDate);


      if(endDate){
        for(let label in response){
          //console.log(response[label].date);

          if(response[label].date == startDate){
            myToggler = true;
            //console.log(startDate);

          }
          if(myToggler){
            date.push(response[label].date);
            blue.push(response[label].Signups);
            orange.push(response[label].FTD);
            green.push(response[label].Earned);

            if(response[label].date == endDate) myToggler = false;
          }
        }
      }
      else{
        for(let label in response){
          if(response[label].date == startDate){
            //console.log('test warunków');
            date.push(response[label].date);
            blue.push(response[label].Signups);
            orange.push(response[label].FTD);
            green.push(response[label].Earned);
          }
        }
      }

      //console.log(chart.data);

      chart.data.datasets[0].data = blue;
      chart.data.datasets[1].data = orange;
      chart.data.datasets[2].data = green;
      chart.data.labels = date;
      chart.update();


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
  console.log(pages);
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
