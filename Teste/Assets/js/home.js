// Marquee //
var marqueeImgCnt = $(".marquee img").length;
var marqueeImgTimer = marqueeImgCnt*1000;

$('.marquee').marquee({
	duration: marqueeImgTimer,
	duplicated: true
});

function laudaView(){
	if ($(window).width() >= 1900) {
		$("#slider-wrapper").removeClass("container");
		$("#slider-wrapper").addClass("container-fluid");
	} else {
		$("#slider-wrapper").removeClass("container-fluid");
		$("#slider-wrapper").addClass("container");
	};
}

function mobileBtn(){
	($(window).width() <= 720) ? $("#header-nav a.btn").addClass("btn-block") : $("#header-nav a.btn").removeClass("btn-block");
}

laudaView();
mobileBtn();

$(window).resize(function(){
	laudaView();
	mobileBtn();
})