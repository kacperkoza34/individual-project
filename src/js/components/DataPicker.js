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
            return !(date.getDate() % 8);
        }
    ],
    altInput: true,
    altFormat: "F j, Y",
    maxDate: '',
    minDate: '',
    defaultDate: new Date,

  }
    console.log(domElem);
    flatpickr(domElem, pickerSettings);
  }


  parseValue(value){
    return value;
  }
  isValid(value){
    return true;
  }
}

export default DatePicker;
