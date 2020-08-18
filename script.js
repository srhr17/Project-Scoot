// const list = document.getElementById("employeelist");
// console.log(list);
console.log("hi");

function validateForm() {
  var name = document.forms["addEmployee"]["name"].value;
  var department = document.forms["addEmployee"]["department"].value;
  var designation = document.forms["addEmployee"]["designation"].value;
  var age = document.forms["addEmployee"]["age"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else {
    if (age == "") {
      alert("Age must be filled out");
      return false;
    }
  }
}
