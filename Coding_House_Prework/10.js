function revString(str) {
  var strArr = [];
  var strSplit = str.split(/(\b|\s)/g);

  for (var i = 0; i < strSplit.length; i++) {
      strArr.push(strSplit[i].split("").reverse().join(""));

  }

  return strArr.join("");
}

console.log(revString("This is fun, hopefully."));


