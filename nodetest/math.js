'use strict';


// var _ = require("lodash");

// exports.strSplit = str.split(" ");
// exports.numWords = strSplit.length;

// var http = require('http');
// var port = 3000;

// var server = http.createServer(function(req, res){
//   res.setHeader("Access-Control-Allow-Origin", "*");

function mathExport(res, req){
  // var params = req.url.split('/');
  // var route = params[1];
  // mathOperators(params, route);
  res.write("hiiiii")
  res.end();
}


exports.double = n => n * 2;
exports.square = n => n * n;
exports.cube = n => n * n * n;
exports.sum = nums => nums.reduce((sum, n) => sum + n, 0);

function mathOperators(params, route){
  switch(route){
    case 'cube':
      var num = params[2];
      res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
      res.end();
      break;
    case "square":
      var num = params[2];
      var squared = num * num
      res.write(num + " is squared " + squared + "\n");
      res.end();
    case 'add':
      var nums = params.slice(2);
      var sum = nums.reduce(function(previousValue, currentValue){
        return parseInt(previousValue) + parseInt(currentValue);
      })
      res.write("sum is: " + `${sum}` + " ");
      res.end();
      break;
    default:
      res.write('Unknown operation\n');
      res.end();
  }

}





// });


