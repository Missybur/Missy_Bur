// var numWords;
// var characters;

// function numWords(str){
//   var words = str.split("");
//   var numWords = words.length;
//   return numWords;
//   var characters = str.length;
//   return characters;
// }

// var output = '';
// for (var property in object) {
//   output += property + ': ' + object[property]+'; ';
// }

// console.log(numWords("Hi, this is a test string"));

// function wordCount(str, sep) {

// return str.split(' ').length;
// };

// console.log(wordCount("Hi, this is a test string"));

function numberText(str) {
    var wordsSplit = str.split(" ");
    var words = wordsSplit.length;
    var chars = str.length;
    var spaces = words - 1;
    var justWords = chars - spaces;
    var avgLength = justWords / words;

    var result = {"words": words, "chars": chars, "avgLength": avgLength, "spaces": spaces};
    return result;
}

