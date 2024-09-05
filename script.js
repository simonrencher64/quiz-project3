$(document).ready(function() {
	
	$("#continue").click(function() {
		$(".active").last().find("*").addClass("hidden");
		$(".active").last().next().addClass("active");
		//$(".active").first().removeClass("active");
		$(".active").last().find("*").removeClass("hidden");
		console.log($(".active"));
		
		
		$("#submit").addClass("hidden");
		$("#correct").addClass("hidden");
		$("#continue").addClass("hidden");
		$("#wrong").addClass("hidden");
	});
	
	$('[onclick="sel()"]').click(function() {
		$(".active").last().find(".answer").filter(".selected").removeClass("selected");
		$(this).addClass("selected");
		$("#submit").removeClass("hidden");
		$("#continue").addClass("hidden");
	});
	
	$("#submit").click(function() {
		if($(".active").last().find(".correct").hasClass("selected")){
			$("#submit").addClass("hidden");
			$("#correct").removeClass("hidden");
			$("#continue").removeClass("hidden");
			$("#wrong").addClass("hidden");
		} else {
			$("#wrong").removeClass("hidden");
			$("#correct").addClass("hidden");
			$("#continue").addClass("hidden");
		}
	});
	
	
});

function sel(){
	
}