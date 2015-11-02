"use strict";

// JSON.stringify();
// JSON.parse()

var object = {key: "value", array: [1,2,3], obj: {color: "blue"}};
console.log(object)

var str = JSON.stringify(object);

console.log("stringify: " + str);

var resObject = JSON.parse(str);

console.log("parse: " + resObject);

console.log(JSON.parse(str).key);






