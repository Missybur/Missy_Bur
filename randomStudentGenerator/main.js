// var students = [];
var randomStudent = [];
var teamsArr = [];
var team = [];



document.getElementById("add-random-student-button").addEventListener('click', generateRandomStudent)
document.getElementById("random-team-box-button").addEventListener('click', randomPairTeamSelector)
document.getElementById('addButton').addEventListener('click', addStudent)

var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', keyPressed)

studentNameInput.focus();

function keyPressed(event){
  if (event.charCode === 13) {
    addStudent();
  }
}
∏
function addStudent(){
  var inputStr = studentNameInput.value;
  if(inputStr){

    var names = inputStr.split(",");

    names = names.map(function(name){
      return name.trim();
    }).filter(function(name){
      return name;
    });
    students = students.concat(names);
    studentNameInput.value = "";
    addStudentsToList();
  }
  document.getElementById("add-random-student-button").addEventListener('click', generateRandomStudent)
}

function addStudentsToList(){

  document.getElementById("bigList").innerHTML = ""

  var div, otherDiv = document.createElement("div")
  students.forEach(function (name) {
    div = document.createElement('div');
    div.textContent = name;
    div.setAttribute("class", "nameItem");
    otherDiv.appendChild(div);
  });
  document.getElementById("bigList").appendChild(otherDiv);
}

function generateRandomStudent(event){
  console.log(event)
  var randIndex = Math.floor(Math.random() * students.length)
  var randStudentIndex = students[randIndex];
  console.log(randIndex, randStudentIndex)

  document.getElementById("random-student-box").innerHTML = randStudentIndex;
  return randStudentIndex;
  generateRandomStudent();
}

// function chunk(array, size){
//   size = size || 2;

//   array = array.concat();
//   var teams = [];

//   while(students.length){
//     var team = [];

//     for (var i = 0; i < size && array.length; i++){
//       team.push(array.shift());
//     }
//     teams.push(students);
//   }

//   return teams;
// }

// console.log(teams = (chunk(students), 2));
// console.log(chunk(students), 2);



function randomPairTeamSelector(event){
  console.log(students)

  var randIndex1 = Math.floor(Math.random() * students.length);
  var randIndex2 = Math.floor(Math.random() * students.length);

  var randStudentIndexPair1 = students[randIndex1] + "&" + students[randIndex2]
  var randStudentIndexPair2 = students[randIndex2];
  document.getElementById("random-team-box-button").addEventListener('click', randomPairTeamSelector)

  document.getElementById("random-team-box").innerHTML = randStudentIndexPair1;
  return randStudentIndexPair1;
  randomPairTeamSelector();

}

  // var studentsTempArr = [Missy, Alicia, V, Paul, Joe, Austin, Sammy, Charles, Ethan, Rachel



