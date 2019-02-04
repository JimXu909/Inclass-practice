$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >8000) {
    $(".title1").fadeOut();
} 
  else {
    $('.title1').fadeIn();
  }
  console.log(y);
});

$(document).scroll(function() {
  var x = $(this).scrollTop();
  if (x >9917) {
    $(".title2").css("position","fixed");
} 
  
});


