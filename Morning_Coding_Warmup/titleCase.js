function titleCase(str){

  return str.replace(/\w\S*/g, function(text){return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();});
}

console.log(titleCase("How can miRRors be real if our eYES aren't real"));

// Cade's Solution:

function titleCase2(str){

return str.split(' ').map(function(word){
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}).join(' ');
}

console.log(titleCase2("How can miRRors be real if our eYES aren't real"));




