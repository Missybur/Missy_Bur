function isOddNumber(nums){
  return "13579".indexOf(nums) > -1;
}

function isEvenNum(nums){
  return "2468".indexOf(nums) > -1;
}

function weirdNumSplitter(num){
  var str = num.toString();
  var answer = "";

  for (var i = 0; i < str.length-1; i++){
    answer += str[i];
    if(isOddNumber(str[i]) && isOddNumber(str[i +1])) {
      answer += "-"
    } if (isEvenNum(str[i]) && isEvenNum(str[i +1])) {
      answer += "*"
    }
  }

  answer += str[str.length-1];
  return answer
}

console.log(weirdNumSplitter(56647302));
console.log(weirdNumSplitter(97946));

// Cade's solution:

function weirdNumbersSplitter(num) {

  var numChars = num.toString().split('');

  var nums = numChars.map(function(char){
    return parseInt(char);
  });

  nums.reduce(function(result, num, i, array){
    if(num === 0 || array[i - 1] === 0){
      return result + num;
    }

    if (num % 2 === 0 && array[i - 1] % 2 === 0){
      return result + "*" + num;
    }

    if(num % 2 === 1 && array[i - 1] % 2 === 1) {
      return result + "-" + num;
    }

    return result + num;

  });


console.log(weirdNumbersSplitter(56647302))
console.log(weirdNumbersSplitter(97946))


