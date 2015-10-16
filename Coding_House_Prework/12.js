function dateDiffChecker(month, day, year){

    var date1 = new Date();
    var date2 = new Date(month + "/" +day+ "/" +year);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    // console.log(timeDiff);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // console.log(diffDays);

    var getYearsMonthsDaysDifference = [];

    var valuesYearMonthDay = {
      'month(s)': 30,' day(s)': 1, 'year(s)':365
    };

    for (var x in valuesYearMonthDay) {
      var diffYearsMonthsDays = Math.floor(diffDays / valuesYearMonthDay[x]);

      getYearsMonthsDaysDifference.push(diffYearsMonthsDays);
      console.log("dif", diffYearsMonthsDays);

      getYearsMonthsDaysDifference -= diffYearsMonthsDaysDifference * valuesYearMonthDay[x];w
    }
      console.log(diffDays);

    return getYearsMonthsDaysDifference;
    // }
  }


console.log(dateDiffChecker(10,15,2014));
