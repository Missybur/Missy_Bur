"use strict";

var http = require('http');
var PORT = 3000;
var math = require("./math");

function handleRequest(request, response){
  var params = request.url.split('/');
  console.log(params);
  switch(params[1]){
    case "math":
    mathOperators(params);
    console.log("math operators")
    // res.end();
    break;
    case "letters":
    letterFunctions(params);
    console.log("letters")
    break;
    case "gravitar":
    gravitarFunctions();
    console.log("gravitar")
    break;

  }
  response.write("It works! Path hit: " + request.url);
  response.end();

}

function mathOperators(request, response){
  var params = request.url.split('/');
  console.log("Math function is working")
  switch(params[2]){
    case "square":
    // var num = params[3];
    // var numSquared = num * num;
    res.write(num + " squared is: " + numSquared );
    res.end();
    break;
    case:
  }

}

function letterFunctions(){
  console.log("letter functions are working!")
}

function gravitarFunctions(){
  console.log("gravitar function is working")
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:%s", PORT);
});


// var server = http.createServer(function(req, res){

//   function mathOperators(params, route){
//   switch(route){
//     case 'cube':
//       var num = params[2];
//       res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
//       res.end();
//       break;
//     case "square":
//       var num = params[2];
//       var squared = num * num
//       res.write(num + " is squared " + squared + "\n");
//       res.end();
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

// }
  // res.setHeader("Access-Control-Allow-Origin", "*");

  // var route = params[1];
  // console.log(route)

// })

// .listen(port, function(){
//   console.log('hello')
// })


// var nums = [1,2,3,4,5,6,7];

// console.log(math.square(5));

// var request = require('request');

// request('http://swapi.co/api/people/2/', function (error, response, body) {
//   if (!error && response.statusCode == 200){
//     var bodyOb = JSON.parse(body);
//     console.log(bodyOb)
//   }
// })

// var _ = require("lodash");


// var names = ["bob", "sally", "ammar", "ray", "missy", "anjali"];

// var teams = _chunk(._shuffle(names)