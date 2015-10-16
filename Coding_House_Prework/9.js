function isPalindrome(str) {
  var arr = [];
  var string = str.toLowerCase().split(' ');
  string.map(function(each){
    var reverse = each.split('').reverse().join('');
    if (each === reverse) {
       arr.push(true);
    }
    else {
       arr.push(false);
    }
  })

  return arr;

}

console.log(isPalindrome("stash and pop on this level"));
