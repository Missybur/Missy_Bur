var students = [];
var randomStudent = [];

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
  console.log(generateRandomStudent(students));
}
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

function generateRandomStudent(array){
  console.log(array)
  var randIndex = Math.floor(Math.random() * array.length);
  var randStudentIndex = array[randIndex];
  document.getElementById("random-student-box").innerHTML = randStudentIndex;
  return randStudentIndex;

  }





