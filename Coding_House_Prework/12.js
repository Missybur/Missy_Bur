function getYearsMonthsDays(month, day, year) {

  var date1 = new Date();
  var date2 = new Date(month + '/' + day + '/' + year);
  var date1Month = date1.getMonth() + 1;
  var date2Month = date2.getMonth() + 1;
  var date1Day = date1.getDate();
  var date2Day = date2.getDate();
  var date1Year = date1.getFullYear();
  var date2Year = date2.getFullYear();
  var monthDiff = Math.abs(date1Month - date2Month);
  var dayDiff = Math.abs(date1Day - date2Day);
  var yearDiff = Math.abs(date1Year - date2Year);
  var dateMonth = new Date();
  var month = dateMonth.getMonth() + 1

  var finalMonthDayYearDiff = yearDiff + " year(s), " +monthDiff + " month(s), " + dayDiff + " day(s) ";

  return finalMonthDayYearDiff;
}

console.log(getYearsMonthsDays(2010, 3, 20));