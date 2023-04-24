function register() {
  var email = document.getElementById("emailData2").value;
  var password = document.getElementById("passwordData2").value;
  localStorage.setItem("localemail", email);
  localStorage.setItem("localpassword", password);
  window.location.replace("https://accountdemo.netlify.app");
}

document.addEventListener("click", function(e){
  const targetId = e.target.id
    
  if(targetId == 'registerButton'){
    register();
  }
});



 
