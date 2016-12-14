$(document).ready(function() {

  loggedIn = document.cookie.indexOf('loggedIn')
  if (loggedIn != -1) {
    $('#navDashboard').show()
  }
  else {
    $('#navLogin').show()
    $('#navSignup').show()
   }

});