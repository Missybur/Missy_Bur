  var arrayAnalyzer = function(){
    var negArray = [];
    var oddArray = [];
    var total = 0;
    var args = Array.prototype.slice.call(arguments);

    args.forEach(function(val){
      if (val < 0 ) {
        negArray.push(true);
      }
      if (val % 2 !== 0 && val !== 0) {
          oddArray.push(val);
      }
    });

    var sum = args.reduce(function(prevVal, curVal){
      return prevVal + curVal;
    })

    var sorted = args.sort(function(a, b){
      return (a - b);
    })

    var half = Math.floor(sorted.length / 2);

    var median = function(){
      if (sorted.length % 2) {
        return sorted[half];
      } else {
        return (sorted[half -1] + sorted[half]) / 2.0;
      }
    }

    var average1 = sum/args.length;
    var average = average1.toFixed(2);
    var negatives = negArray.length;
    var odds = oddArray.length;


    return  {"odds" : odds, "negatives" : negatives, "avg" : average, "median" : median()}

  }

console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));


