
function revString(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(revString("I am a dog"));

console.log(revString("This is fun hopefully."));