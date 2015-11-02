"use strict";

let UTIL = {}

UTIL.generateStars = function(n){
  let stars = "";

  for (let i = 0; i < n; i++){
    stars += "*";
  }
  return stars;
}