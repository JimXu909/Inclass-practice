$("button:first").click(function(){
	$(".stick2").animate({left: 200}, 1000, "swing");
	console.log("hello");
		
	
})
$(".button1").click(function(){
	
	$(".stick2").animate({right: 200}, 1000, "swing");
	console.log("2nd button clicked");
		
	
})
$(".button2").click(
	function(){
	$(".stick2").css({"left":"200px","position":"absolute"});
	console.log("3rd button clicked");
		
		
	
})