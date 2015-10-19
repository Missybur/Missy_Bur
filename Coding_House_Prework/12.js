function dateDiffChecker(year, month, day){

  var date1 = new Date();
  var date2 = new Date(month + '/' + day + '/' + year);
  var month1 = date1.getMonth() + 1;
  var month2 = date2.getMonth() + 1;
  var day1= date1.getDate();
  var day2 = date2.getDate();
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();

  var yearDiff = Math.abs(year1 - year2);
  var monthDiff = Math.abs(month1 - month2);
  var dayDiff = Math.abs(day1 - day2);


  var finalDateDifference =  yearDiff + " year(s) " + monthDiff + " month(s) " + dayDiff + " day(s) "

  return finalDateDifference
}



console.log(dateDiffChecker(2010, 2, 17));