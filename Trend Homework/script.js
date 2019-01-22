/*
#1 listen to the mouse position event
#2 get the coodinate and convert them into words
#3 put the words inside the paragraphs
#4 check if the paragraphs are full
#5 if the paragraphs are full move it to the next paragraph
*/


/*#1listen to the mouse position event*/
var coordX = 0
var coordY= 0 
var words=0
var words2=0
function getMouseXY(a) {
     lemX = a.pageX;
     
    if (coordX < 0){coordX = 0;}
    if (coordY < 0){coordY = 0;}

	coordX = Math.floor(lemX/window.innerWidth*26+64);
    coordY = Math.floor(lemX/window.innerWidth*26+96);

    console.log("X coordinate: " + coordX);
    console.log("Y coordinate: " + coordY);
    return coordY;
    return coordX;
  }

  function numberToLetter(){
  	var coordXs =coordX.toString();
  	var coordYs =coordY.toString();
  	words =String.fromCharCode(coordXs);
  	words2 = String.fromCharCode(coordYs);
  	console.log(words + words2);
  	
  	return words2;
  	return words;

  }


function addthingstopara(){
	var CE = document.createElement("P");
	var BE = document.createTextNode(words);
	CE.appendChild(BE);
	
	document.getElementById("sqbox1").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	
	document.getElementById("sqbox2").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words);
	CE.appendChild(BE);
	document.getElementById("sqbox3").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox4").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words);
	CE.appendChild(BE);
	document.getElementById("sqbox5").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox6").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words);
	CE.appendChild(BE);
	document.getElementById("sqbox7").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox8").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words);
	CE.appendChild(BE);
	document.getElementById("sqbox9").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox10").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox11").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox12").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox13").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox14").appendChild(CE);
	var CE = document.createElement("P");
	var BE = document.createTextNode(words2);
	CE.appendChild(BE);
	document.getElementById("sqbox15").appendChild(CE);
	
	
}

function addspace(){
	var CE = document.createElement("P");
	var BE = document.createTextNode("  ");
	CE.appendChild(BE);
	document.querySelector(".sqbox").appendChild(CE);
}
document.addEventListener("mousemove", getMouseXY);
document.addEventListener("click", addthingstopara);
document.addEventListener("keydown", addspace);

document.addEventListener("mousemove", numberToLetter);







