function Validation() {
  var uid = document.login.userid;
  var passid = document.login.passid;
  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      var type = document.getElementById("select").value;
      document.cookies = "userType=" + type;
      if (type == "admin") {
        window.location.href =
          "https://second-omniscient-sunscreen.glitch.me/admin_dashboard.html";
      } else {
        localStorage.setItem("userType", type);
        window.location.href =
          "https://second-omniscient-sunscreen.glitch.me/dashboard.html"; //success
        //type of user
      }
    }
  }
  return false;
}

function userid_validation(uid, mx, my) {
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

function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    passid.focus();
    return false;
  } else {
    alert("Login succesful");
    return true;
  }
}
