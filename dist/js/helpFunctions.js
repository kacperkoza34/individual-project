const helpFunctions = {}; // eslint-disable-line no-unused-vars


helpFunctions.dateToStr = function(dateObj){
  //console.log(dateObj);
 return dateObj.toISOString().slice(0, 10);
};

helpFunctions.addDays = function(dateStr, days){
 const dateObj = new Date(dateStr);
 dateObj.setDate(dateObj.getDate() + days);
 return dateObj;
};

helpFunctions.separetDates = function(dates){
    //console.log(dates);
    let twoDates = {};
    twoDates.startDate = dates.slice(0, 10);
    twoDates.endDate = dates.slice(14, 24);
    return twoDates;
};

export default helpFunctions;
