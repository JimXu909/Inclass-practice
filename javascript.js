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

