function Validation() {
  var uid = document.assign.id;
  var uname = document.assign.name;
  var udept = document.assign.dept;
  var uemail = document.assign.email;
  if (id_validation(uid, 5, 12)) {
    if (allLetter(uname)) {
      if (select(udept)) {
        if (ValidateEmail(uemail)) {
        }
      }
    }
  }

  return false;
}

function id_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );
    uid.focus();
    return false;
  }
  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}

function select(udept) {
  if (udept.value == "Default") {
    alert("Select your state from the list");
    udept.focus();
    return false;
  } else {
    return true;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    alert("Faculty added Succesfully");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function addEmployee() {
  window.location.href =
    "https://second-omniscient-sunscreen.glitch.me/addEmployee.html";
}
function adminMessages() {
  window.location.href =
    "https://second-omniscient-sunscreen.glitch.me/adminMessage.html";
}

function removeEmployee() {
  window.location.href =
    "https://second-omniscient-sunscreen.glitch.me/removeEmployee.html";
}

