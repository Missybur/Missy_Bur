
date1 = new Date(2015,04,02)
date2 = new Date(2017,11,17)

function dateDiff(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    return months + " months ago"

    }

a = dateDiff(date1,date2)
console.log(a)