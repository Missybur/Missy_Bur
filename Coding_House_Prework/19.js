// WHILE LOOP:
console.log("*****");



// DO WHILE LOOP:
console.log("*****");

var arr = [2, 7, 4, 8, 6, 4];
var i = 0;
var highestNumber = arr[0];

do {
    if (arr[i] > highestNumber
     ){
        highestNumber
         = arr[i];
    }


    // console.log(arr[i]);
    i++;
} while ( i <= arr.length -1);
console.log(highestNumber
    );

// FOR LOOP:
console.log("*****");

var arr = [2, 7, 4, 8, 6, 4];
var largestNumArr = arr[0];

for ( var i = 0; i < arr.length; i++) {
  if (largestNumArr < arr[i] ) {
      largestNumArr = arr[i];
  }
}

console.log(largestNumArr);

// REDUCE:
console.log("*****");


var reduceNums = [3, 5, 7, 9, 12].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

console.log(reduceNums);


// FILTER:
console.log("*****");

var arr = [1, 22, 35, 2, 4, 7, 9];

function removeOdd(arr) {
    return arr.filter(function(value) {
        return value % 2 !== 0;
    });
}

console.log(removeOdd(arr));

// FOR EACH LOOP:
console.log("*****");



// FOR...IN LOOP:
console.log("*****");


var obj = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] };

for (var prop in obj) {
    console.log("o." + prop + " = " + obj[prop]);
}

// MAP:
console.log("*****");

var nums = [1, 2, 5, 7, 11];
var doubles = nums.map(function(num) {
    return num * 2;
});

console.log(doubles);

// SORT REVERSE ALPHABETICALLY

var aZ = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
var aZReverse = aZ.reverse();
var zA = aZReverse.reverse();

console.log(zA)

console.log("*****");


