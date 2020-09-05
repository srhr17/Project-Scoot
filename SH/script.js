function resetProfile() {
  alert("Reset Profilie Successful!");
}

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

function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-<>{}[]";
  var passwordLength = 16;
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
  }
  document.getElementById("password").value = password;
}
