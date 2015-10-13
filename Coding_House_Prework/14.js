var quote = "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"
var arr = [];
var wordArray = quote.split(/\W/);
console.log(wordArray)
var quoteObject = {};
var a = [];
var b = [];
// var wordArray = str.split(/\W/);
// var word = wordArray[i];

var wordCounter = function(quote) {
    var word = quote.split(/\W/);
    for (var i = 0, len = word.length; i < len; i++) {
    var word = quote[i];
    quoteObject[word] = (quoteObject[word] || 0) + 1;
    }
};

console.log(quoteObject);
console.log(wordCounter("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));