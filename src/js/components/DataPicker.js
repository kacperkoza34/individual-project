import helpFunctions from '../helpFunctions.js';


class DatePicker {
  constructor(enableDate){
    const thisDataPicker = this;
    thisDataPicker.initPlugin(enableDate);
  }

  initPlugin(response){

    const enableDate = [];


    for(let label in response){
      //console.log(response[label].date);
      enableDate.push(response[label].date);
    }

    const thisDataPicker = this;
    const domElem = document.querySelector('#data-picker');

    const pickerSettings = {

    mode: "range",
    maxDate: "today",
    dateFormat: "Y-m-d",
    enable: enableDate,
    altInput: true,
    altFormat: "F j, Y",
    defaultDate: [enableDate[enableDate.length-5], enableDate[enableDate.length-1]]
  }

    //console.log(pickerSettings.defaultDate);
    flatpickr(domElem, pickerSettings);
  }
}

export default DatePicker;
