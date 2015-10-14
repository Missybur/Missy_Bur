function isPalindrome(str) {

  var string = str.toLowerCase().match(/\w/g).join("");
  var revStr = string.split('').reverse().join('');

  if (string === revStr){
    return true;
  } else {
    return false
  }
}

