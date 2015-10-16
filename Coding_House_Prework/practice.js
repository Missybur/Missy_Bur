function getYearsMonthsDays(numDays) {
  var getYearsMonthsDaysDifference = '';
  var valuesYearMonthDay = {
    ' year(s)': 365,
    ' month(s)': 30,
    ' day(s)': 1
  };

  for (var x in valuesYearMonthDay) {
    var diffYearsMonthsDays = Math.floor(numDays / valuesYearMonthDay[x]);

    console.log(diffYearsMonthsDays);

    numDays -= diffYearsMonthsDays * valuesYearMonthDay[x];
  }

  return getYearsMonthsDaysDifference;
}

console.log(getYearsMonthsDays(3853));