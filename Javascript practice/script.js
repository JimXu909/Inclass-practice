
var date= new Date();
document.body.innerHTML 
= "<p>Today is:"+date+"</p>";

/**/

var a;
var b;
var sum =a+b;
var theNumbersMatch;


if (a==b){
	theNumbersMatch = true;
} else {
	theNumbersMatch = false;
}

//The same as the Ternery operator below;
// a==b? console.log("Match"):console.log("No match");

console.log("theNumbersMatch" +theNumbersMatch)

var pens;

var colorX =0;
var colorY = 0;

function getMouseCor(e){
	// if (IE){
	// 	colorX = event.clientX +document.body.scrollleft;
	// 	colorY= event.clientY+document.body.scrollTop;
	// }
	// else{
	var body=document.getElementsByTagName("body");
	if (colorX<0) {colorX=0};
	if (colorY<0){colorY=0};

		colorX=e.pageX;
		colorY=e.pageY;

body[0].style.backgroundColor = "rgb(colorX,colorY,0)";
	// }
	
	console.log(colorX);
	console.log(colorY);
	return true;
}
document.addEventListener("mouseover", getMouseCor);

