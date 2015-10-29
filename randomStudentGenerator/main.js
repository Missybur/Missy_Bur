var students = [];
var randomStudent = [];

document.getElementById("add-random-student-button").addEventListener('click', generateRandomStudent)
document.getElementById('addButton').addEventListener('click', addStudent)

var studentNameInput = document.getElementById('studentName');
studentNameInput.addEventListener('keypress', keyPressed)

studentNameInput.focus();

function keyPressed(event){
  if (event.charCode === 13) {
    addStudent();
  }
}

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
  // generateRandomStudent(students);
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
  // document.getElementById('add-random-student-button').addEventListener('click', generateRandomStudent)
  // ("add-random-student-button").onclick=(

  document.getElementById("random-student-box").innerHTML = randStudentIndex;
  return randStudentIndex;
  generateRandomStudent();

  }


  // function buttonClick(event, array){

  // var randIndex = Math.floor(Math.random() * array.length);
  // var randStudentIndex = array[randIndex];
  // document.getElementById("random-student-box").innerHTML = randStudentIndex;
  // // return randStudentIndex;
  // buttonClick();

  // }

  function randomPairTeamSelector(students){
  console.log(students)
  // var pair = students.slice(1,2);
  var randIndex = Math.floor(Math.random() * students.length);
  var randStudentIndexPair = students[randIndex] ;
  document.getElementById("random-team-box-button").addEventListener('click', randomPairTeamSelector)

  document.getElementById("random-team-box").innerHTML = randStudentIndexPair;
  return randStudentIndexPair;
  randomPairTeamSelector();

  }

  // var studentsTempArr = [Missy, Alicia, V, Paul, Joe, Austin, Sammy, Charles, Ethan, Rachel



