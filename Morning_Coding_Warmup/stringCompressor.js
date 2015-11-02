function isOddNumber(nums){
  return "13579".indexOf(nums) > -1;
}

function isEvenNum(nums){
  // if (nums % 2 === 0) {
  //   return nums
  // }
  return "2468".indexOf(nums) > -1;
}

// console.log(isOddNumber(56647302));

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

