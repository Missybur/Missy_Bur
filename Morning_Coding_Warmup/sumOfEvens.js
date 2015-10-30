// function sumEvens(numbers) {

//     var evenArr = [];

//     numbers.forEach(function(val){
//         if (val % 2 === 0 ){
//             evenArr.push(val);
//         }
//     })

//       var sum = evenArr.reduce(function(prevVal, curVal){
//       return prevVal + curVal;
//     })

//     return sum;

// }

// console.log(sumEvens([1,2,3,4,5]));


// Cade's solution

var arr = [1,2,3,4,5];

// element, index, array

// accumulator, element, index, array

var sum = arr.reduce(function(acc, n, i){
    console.log(i, 'acc', 'n:', 'n', 'i:', 'i')

    return acc + n;
}), 100;

console.log(sum);