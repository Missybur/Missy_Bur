'use strict';
// function sumIntegerUpTo(number){
//   return (1 + number) * number / 2;
// }

// console.log(sumIntegerUpTo(999));


let fact = function(number){

  if (number === 1){
    return 1;
  }

  return number * fact(number - 1);
};

console.log(fact(5)) // 120
console.log(fact(1)) // 1
console.log(fact(128))// ....

let sum = function(number){

  if (number <= 1) {
    return 0;
  }

  return number + sum(number - 1) - 1;
};

console.log(sum(5)) // 120
console.log(sum(1))// 1
console.log(sum(128)) // ....





