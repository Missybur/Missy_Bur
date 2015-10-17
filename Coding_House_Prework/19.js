// WHILE:

var arr1 = [2, 7, 4, 8, 6, 4];
var largest1 = 0;
var i = 0;

while (i < arr1.length) {

  if (arr1[i] > largest1)
    largest1 = arr1[i];

  i++;
}
console.log("while loop result: " + largest1);

// DO WHILE:

var arr2 = [2, 7, 4, 8, 6, 4];
var largest2 = arr2[0];
var i = 0;

do {
    if (arr2[i] > largest2){

      largest2 = arr2[i];
    };

    i++;
} while ( i <= arr2.length -1);
console.log("do while loop result: " + largest2);

//FOR:

var arr3 = [2, 7, 4, 8, 6, 4];
var largest3 = 0;

for (var i = 0; i < arr3.length; i++){
  if (largest3 < arr3[i]){
    largest3 = arr3[i];
  };

};

console.log("for loop result: " + largest3);

//FOR EACH:

var arr4 = [2, 7, 4, 8, 6, 4];
var largest4 = 0;
var i = 0;

arr4.forEach(function (item, index, array){

  for (var i = 0; i < arr4.length; i++){
    if (largest4< arr4[i]){
      largest4 = arr4[i];
    };

  };

});

console.log("for each loop result: " + largest4);


// FOR IN:


var obj = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] }

for (var prop in obj){
  console.log("obj." + prop + " = " + obj[prop]);
}

//MAP:

var numArray = [1, 2, 5, 7, 11];
var sqrRootArray = numArray.map(Math.sqrt);

console.log(sqrRootArray);

//REDUCE:

var reduceArray = [3, 5, 7, 9, 12];

var total = reduceArray.reduce(function(a, b){
  return a + b;
});

console.log("reduce function result: " + total);

//FILTER:

// var oddsAndEvens = [1, 22, 35, 2, 4, 7, 9];

function getOddNumbers(arr) {
  return arr.filter(function(value){
    return value % 2 !== 0;
  });
}

console.log(getOddNumbers([1, 22, 35, 2, 4, 7, 9]));

//SORT:

var wordList = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee']

var revAlpha = wordList.sort().reverse();

console.log(revAlpha);










































// WHILE LOOP:
// console.log("*****");



// // DO WHILE LOOP:
// console.log("*****");

// var arr2 = [2, 7, 4, 8, 6, 4];
// var i = 0;
// var highestNumber = arr[0];


// // FOR LOOP:
// console.log("*****");

// var arr = [2, 7, 4, 8, 6, 4];
// var largestNumArr = arr[0];

// for ( var i = 0; i < arr.length; i++) {
//   if (largestNumArr < arr[i] ) {
//       largestNumArr = arr[i];
//   }
// }

// console.log(largestNumArr);

// // REDUCE:
// console.log("*****");


// var reduceNums = [3, 5, 7, 9, 12].reduce(function(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// });

// console.log(reduceNums);


// // FILTER:
// console.log("*****");

// var arr = [1, 22, 35, 2, 4, 7, 9];

// function removeOdd(arr) {
//     return arr.filter(function(value) {
//         return value % 2 !== 0;
//     });
// }

// console.log(removeOdd(arr));

// // FOR EACH LOOP:
// console.log("*****");



// // FOR...IN LOOP:
// console.log("*****");


// var obj = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] };

// for (var prop in obj) {
//     console.log("o." + prop + " = " + obj[prop]);
// }

// // MAP:
// console.log("*****");

// var nums = [1, 2, 5, 7, 11];
// var doubles = nums.map(function(num) {
//     return num * 2;
// });

// console.log(doubles);

// // SORT REVERSE ALPHABETICALLY

// var aZ = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
// var aZReverse = aZ.reverse();
// var zA = aZReverse.reverse();

// console.log(zA)

// console.log("*****");


