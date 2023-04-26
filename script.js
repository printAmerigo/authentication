function auth() {
  var formEmail = document.getElementById("emailData").value;
  var formPassword = document.getElementById("passwordData").value;
  var localemail = localStorage.getItem("localemail");
  var localpassword = localStorage.getItem("localpassword");
  
  if (formEmail == localemail && formPassword == localpassword) {
    var email = formEmail
    var password = formPassword.slice(0, -4) + '****';
    alert(`Welcome to the site, ${email}. We see your password is ${password}`)
  } else {
    alert("Hmm... It seems this Info was not registered in this session. Please go to the registration page!")
  }
}
document.getElementById("loginButton").addEventListener("click", auth);
