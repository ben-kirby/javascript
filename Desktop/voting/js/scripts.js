$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $("#under18").show();
  }
  else if (age > 65) {
    $("#over65").show();
  }
  else {
    $("#over18").show();
  }
});
