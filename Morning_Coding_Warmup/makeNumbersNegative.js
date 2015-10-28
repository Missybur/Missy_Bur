var makeNegative = function(arr) {

    var negArray = [];

    arr.forEach(function(val){
        if (val < 0 || val === 0){
            negArray.push(val)
        }
        else {
          negArray.push(val * -1)
        }
    });
    return negArray;
};



console.log(makeNegative([5,-1,0,2,-5]))