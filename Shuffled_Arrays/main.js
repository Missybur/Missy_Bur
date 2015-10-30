
var a = [5,3,4,1,1,9,7,99,1]




function sample(array){
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Shuffling array
function shuffle(array){
  array = array.concat();
  var shuffled = [];
  while(array.length){
    var index = Math.floor(Math.random() * array.length);
    var randomSplice = array.splice(index, 1);
    shuffled = shuffled.concat(randomSplice);
  }
  return shuffled;
}

// Chunking arrays into teams based on size
function chunk(array, size){
  size = size || 2;

  array = array.concat();
  var teams = [];

  while(array.length){
    var team = [];

    for (var i = 0; i < size && array.length; i++){
      team.push(array.shift());
    }
    teams.push(team);
  }

  return teams;
}

// function chunk2(array, size){
//   size = size || 2;

//   array = array.concat();
//   var teams = [];

//   while(array.length){
//     var team = [];

//     for (var i = 0; i < size && array.length; i++){
//       team.push(array.shift());
//     }
//     teams.push(team);
//   }

//   return teams;
// }
console.log(chunk(a), 2);
console.log(chunk(shuffle(a), 5));

