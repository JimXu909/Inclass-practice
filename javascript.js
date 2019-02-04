$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >3810) {
    $(".title1,.301e").fadeOut();
} 
  else {
    $('.title1,.301e').fadeIn();
  }
  console.log(y);
});

$(document).scroll(function() {
  var x = $(this).scrollTop();
  if (x < 9200 && x >5600) {
    $(".title2").fadeIn();
  }
  else {
    $(".title2").fadeOut();
    
  }
});

$(document).scroll(function() {
  var z = $(this).scrollTop();
  if (z <= 14000 && z >12000) {
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

