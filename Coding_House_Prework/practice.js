function getYearsMonthsDays(month, day, year) {

  var date1 = new Date();
  console.log(date1);
  var date2 = new Date(month + '/' + day + '/' + year);
  var date1Month = date1.getMonth() + 1;
  var date2Month = date2.getMonth() + 1;
  var date1Day = date1.getDate();
  var date2Day = date2.getDate();
  var date1Year = date1.getFullYear();
  var date2Year = date2.getFullYear();

  console.log(date1Year);

  console.log(date1Day);
  console.log(date2Day);
  var monthDiff = Math.abs(date1Month - date2Month);
  var dayDiff = Math.abs(date1Day - date2Day);
  console.log(dayDiff);
  console.log(monthDiff);

  console.log(date1Month);
  console.log(date2Month);

  console.log(date2);
  var dateMonth = new Date();
  var month = dateMonth.getMonth() + 1
  console.log(month)

  var finalMonthDayYearDiff = monthDiff + " month(s) " + dayDiff + " day(s)";
  console.log(finalMonthDayYearDiff);

}

console.log(getYearsMonthsDays(2010, 3, 20));