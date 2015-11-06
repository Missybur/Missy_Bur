'use strict';

var sentence = require("./sentence")


// var http = require('http');

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res){
  re.setHeader("Access-Control-Allow-Origin", "*");

  var params = req.url.split("%20");
  var route = params[1];
  var lettersCount = params[2].length;' '

//   switch(route){
//     case "letters":
//     var str = params[2]
//     res.write(`{$str.length}`)
//     res.end();
//     break;
//   }
// });
exports.numWords = words;

function numberText(str) {
    var wordsSplit = str.split("%20");
    var words = wordsSplit.length;
    var chars = str.length;
    var spaces = words - 1;
    var justWords = chars - spaces;
    var avgLength = justWords / words;

    var result = {"words": words, "chars": chars, "avgLength": avgLength, "spaces": spaces};
    return result;
}

});


// console.log(numberText("Count me in"));


//   switch(route){
//     case "numWords":
//       var str = params[2];
//       res.write(str + " this is my string ");
//       res.end();
//       break;
//     case 'cube':
//       var num = params[2];
//       res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
//       res.end();
//       break;
//     case 'add':
//       var nums = params.slice(2);
//       var sum = nums.reduce(function(previousValue, currentValue){
//         return parseInt(previousValue) + parseInt(currentValue);
//       })
//       res.write("sum is: " + `${sum}` + " ");
//       res.end();
//       break;
//     default:
//       res.write('Unknown operation\n');
//       res.end();
//   }





// });

// exports.double = n => n * 2;
// exports.square = n => n * n;
// exports.cube = n => n * n * n;
// exports.sum = nums => nums.reduce((sum, n) => sum + n, 0);


// var server = http.createServer(function(req, res){
//   re.setHeader("Access-Control-Allow-Origin", "*");

//   var params = req.url.split('/');
  // var route = params[1];

//   switch(route){
//     case 'cube':
//       var num = params[2];
//       res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
//       res.end();
//       break;
//     case 'add':
//       var nums = params.slice(2);
//       var sum = nums.reduce(function(previousValue, currentValue){
//         return parseInt(previousValue) + parseInt(currentValue);
//       })
//       res.write("sum is: " + `${sum}` + " ");
//       res.end();
//       break;
//     default:
//       res.write('Unknown operation\n');
//       res.end();
//   }




// });

// server.listen(3000);

