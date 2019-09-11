import helpFunctions from '../helpFunctions.js';


class DatePicker {
  constructor(){
    const thisDataPicker = this;
    thisDataPicker.initPlugin();
  }

  initPlugin(){
    const thisDataPicker = this;
    const domElem = document.querySelector('#data-picker');

    const pickerSettings = {

    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
    disable: [
        function(date) {
            // disable every multiple of 8
            return !(date.getDate() % 12);
        }
    ],
    altInput: true,
    altFormat: "F j, Y",
    maxDate: new Date,
    minDate: '2019-08-17',
    defaultDate: [helpFunctions.dateToStr(helpFunctions.addDays(new Date(), -10)), helpFunctions.dateToStr(new Date())]

  }

    //console.log(new Date);
    flatpickr(domElem, pickerSettings);
  }
}

export default DatePicker;
