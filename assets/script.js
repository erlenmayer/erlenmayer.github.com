var w = window;
var d = document;
var s = 100;
var ss = 175;
var sss = 350;

$(w).load(function() {
	$("#jiv").raptorize();

	$(window).scroll(function() {
		var ys = -1 * window.scrollY;
		$("#header, #footer").css("background-position", "0px " + ys + "px");
	});
});