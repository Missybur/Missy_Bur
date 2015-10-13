function isPalindrome(str) {
  if(str.length === 0) { return true; }
  if(str[0] !== str[str.length-1]) { return false;}
  return isPalindrome(str.slice(1,str.length-1));
}

console.log(isPalindrome("no x in nixon"));

console.log(isPalindrome("aasdkh uasfkjb jgkhvasf"));

console.log(isPalindrome("amanaplanacanalpanama"));

