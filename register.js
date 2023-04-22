function register() {
  var email = document.getElementById("emailData2").value;
  var password = document.getElementById("passwordData2").value;
  localStorage.setItem("localemail", email);
  localStorage.setItem("localpassword", password);
}

document.getElementById("registerButton").addEventListener("click", register);


 