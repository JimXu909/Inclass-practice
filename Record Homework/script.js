/*------------
#1. scroll event listener
#2. get scroll distance and 
put it in a variable(global)
#3. use scroll top distance to set
an if argument, depends on different
scrolling distance
#4. use those functions to show and 
hide(or toggle)

*/
// var first = 500 ;
// var firstend = 1000;
// var second= 1800;
// var distance = $(window).scrollTop();
// function firstfunction() {

//     if (distance<first) {
//         $("hugeboard,.aug18,.aug18des").hide(1000);}
//     else {
//     $(".hugeboard,.aug18,.aug18des").show(1000);
//     console.log(distance);
// }
// };
// window.addEventListener("scroll",firstfunction);

$(document).scroll(function() {
  var x = $(this).scrollTop();
  if (x < 1000) {
    $(".scroll").fadeIn();
} 
  else {
    $('.scroll').fadeOut();
  }
});
$(document).ready(function() {
  var x = $(this).scrollTop();
  if (x < 6000) {
    $(".scroll,.animation,.aug18des,.aug18,.aug19,.toword,.amp").hide();
  }
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >= 800) {
    $(".animation,.aug18des,.aug18,.aug19,.toword,.amp").fadeIn();
} 
	else {
    $('.animation,.aug18des,.aug18,.aug19,.toword,.amp').fadeOut();
  }
});











