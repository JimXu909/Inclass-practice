$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >6000) {
    $(".title1").fadeOut();
} 
  else {
    $('.title1').fadeIn();
  }
  console.log(y);
});

$(document).scroll(function() {
  var x = $(this).scrollTop();
  if (x < 11000 && x >8000) {
    $(".title2").fadeIn();
  }
  else {
    $(".title2").fadeOut();
    
  }
});

$(document).scroll(function() {
  var z = $(this).scrollTop();
  if (z < 20000 && z >16000) {
    $(".title3,.introduction").fadeIn();
  }
  else {
    $(".title3,.introduction").fadeOut();
   
  }
});

$(document).ready(function() {
  var a = $(this).scrollTop();
  if (a < 6000) {
    $(".title2,.title1,.title3,.introduction").hide();
  }
});

