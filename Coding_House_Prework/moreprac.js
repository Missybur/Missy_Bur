// function letterChanges(str){

//   return str.replace(/[A-Z]/g, function(x){
//     return String.fromCharCode(x.charCodeAt(0)+1); }).replace(/[0-9]/g, function(y){
//       return y.toUpperCase();
//   })
// }

function sumEvens(numbers) {

    var evenArr = [];

    numbers.forEach(function(val){
        if (val % 2 !== 0 && val !== 0){
            evenArr.push(val);
        }
    })

}

// console.log(letterChanges("Aa1h2vjh Bb37hcj Cca976hjvh"));



// var compressor = function(s) {

//   var objContainer = {};
//   for (var i = 0; i < s.length; i++){
//     objContainer[str[i]] = (objContainer[str[i]] || 0) + 1;
//   }

//   var max =1;
//   for (var val in objContainer){
//     max = Math.max(max, objContainer[val]);
//   }

//   return max;

// }

// console.log(compresser("aaaaabbbbbbbbbccccpqrstuv"))


// function mostFrequentCount(str) {
//     var objContainer = {};
//     for (var i = 0; i < str.length; i++) {
//         objContainer[str[i]] = (objContainer[str[i]] || 0) + 1;
//     }
//     var max = 1;
//     for (var val in objContainer) {
//         max = Math.max(max, objContainer[val]);
//     }
//     return max;
// }

// function wordsWithMaxRepeatedLetters(str) {
//     var maxRepeatedLetters = 0, wordsWithMaxRepeatedLetters = [];

//     var words = str.split(/\W/);
//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         var numRepeatedCharacters = mostFrequentCount(word);

//         if (maxRepeatedLetters < numRepeatedCharacters) {
//             maxRepeatedLetters = numRepeatedCharacters;
//             wordsWithMaxRepeatedLetters = [word];
//         } else if (maxRepeatedLetters == numRepeatedCharacters) {
//             wordsWithMaxRepeatedLetters.push(word);
//         }
//     }
//     return wordsWithMaxRepeatedLetters;
// }

// console.log(wordsWithMaxRepeatedLetters("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));

// function decoder(key, code){

//   var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//   var alphanew = String.fromCharCode(2,14,3,8,13,16)
//   return alphanew

// console.log(alphanew);
// };


// // String.fromCharCode(73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115);

// console.log(decoder("ABCDEFGHIJKLMNOPQRSTUVWXYZ", [2,14,3,8,13,16]));

// function encode(key, message)

//    {
//         // var alphabet, coded, i, ch, index;

//         alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//         coded = "";
//         for (i = 0; i < message.length; i++) {        // for as many letters as there are
//             ch = message.charAt(i);                   //   access the letter in the message
//             index = alphabet.indexOf(ch);             //   find its position in alphabet
//             if (index == -1) {                        //   if it's not a letter,
//                 coded = coded + ch;                   //     then leave it as is & add
//             }                                         //   otherwise,
//             else {                                    //     find the corresponding
//                 coded = coded + key.charAt(index);    //     letter in the key & add
//             }
//         }
//         return coded;
//     }

//     console.log(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", [2,14,3,8,13,16]))



    //

// 1.

// 0, 1, 2, 10, 11, 12 (20, 21, 22)



// var alpha = String.fromCharCode(2,14,3,8,13,16);
// return alpha

// console.log(alpha);

// function findRepeats(str){
//   str.
// }


// var obj={}
// var repeats=[];
// str="aaaaabbbbbbbbbccccpqrstuv"

// for(x = 0, length = str.length; x < length; x++) {
//     var l = str.charAt(x)
//     obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
// }

// console.log(obj)


