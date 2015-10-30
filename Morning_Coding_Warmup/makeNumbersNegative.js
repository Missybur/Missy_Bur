// var makeNegative = function(arr) {

//     var negArray = [];

//     arr.forEach(function(val){
//         if (val < 0 || val === 0){
//             negArray.push(val)
//         }
//         else {
//           negArray.push(val * -1)
//         }
//     });
//     return negArray;
// };

// console.log(makeNegative([5,-1,0,2,-5]))


// var numbers = [2,6,4,89,2,4];

var every = function(arr, cb) {

  var e = arr.pop();

  while (e) {
    if(cb(e)) {return true;}
    e = arr.pop();
  }

  return false

};

console.log(every[2,6,4,89,2,4], function(e) {return e > 4});

console.log(every[1,2,3], function(e) {return e < 4});



