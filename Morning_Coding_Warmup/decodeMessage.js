function decoder(key, code) {

  var keySplit = key.split("");
  var keyDecoded = ""

  for (var i = 0; i < code.length; i++) {
   keyDecoded = keyDecoded + (keySplit[code[i]])

  }
  return keyDecoded

}

console.log(decoder("ABCDEFGHIJKLMNOPQRSTUVWXYZ", [2,14,3,8,13,6]))

// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var strCode = str.charAt(2,14,3,8,13,6)
//   console.log(strCode)
//   var map = Array.prototype.map;
//   var a = map.call(str)
//   console.log(a)
// }

// console.log(myString("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), [2,14,3,8,13,6])


// function titleCase2(str){

// return str.split(' ').map(function(word){
//   return str.charAt[arr];
// }

// console.log(titleCase2("ABCDEFGHIJKLMNOPQRSTUVWXYZ", [2,14,3,8,13,6]);


// var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var strSplit = str.charAt(2,14,3,8,13,6)
// console.log(strSplit);

// console.log(decodeStr("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), [2,14,3,8,13,6]);

// [2,14,3,8,13,6]

