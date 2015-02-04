// RESPONSIVE FEATURES //
function responsiveFeatures(){
	($(window).width() <= 720) ? $(".btn-block-xs").addClass("btn-block") : $(".btn-block-xs").removeClass("btn-block"); // Button Block XS
	($(window).width() >= 920) ? $(".navbar-toggle").attr("data-canvas", "body") : $(".navbar-toggle").attr("data-canvas", ""); // Navbar Toggle
	($(window).width() >= 1200) ? $(".navmenu").removeClass("offcanvas") : $(".navmenu").addClass("offcanvas"); tooltipNavmenu(); // Navmenu Show or Hide
	if ( ($(window).width() < 1200) || ($(window).width() >= 1500) ) {
		$(".navmenu a").tooltip("destroy");
	} else {
		$(".navmenu a").tooltip();
	};;
}

function tooltipNavmenu() {
	$(".navmenu a").each(function(){
		var thisText = $(this).text();
		$(this).attr("data-placement", "right");
		$(this).attr("data-container", "body");
		$(this).attr("title", thisText);
	});
}
// ./RESPONSIVE FEATURES //

// IDIOMA //
function detectLanguage(){
	var language = $("html").attr("lang");

	switch(language) {
		case "es":
		$(".lang-en, .lang-pt").hide();
		$(".lang-es").show();
		$("#btn-en, #btn-pt").removeClass("active");
		$("#btn-es").addClass("active");
		break;

		case "pt":
		$(".lang-en, .lang-es").hide();
		$(".lang-pt").show();
		$("#btn-en, #btn-es").removeClass("active");
		$("#btn-pt").addClass("active");
		break;

		default: 
		$(".lang-en").show();
		$(".lang-es, .lang-pt").hide();
		$("#btn-en").addClass("active");
		$("#btn-es, #btn-pt").removeClass("active");
		break;
	}
}
// ./IDIOMA //

$(document).ready(function(){

	detectLanguage(); // IDIOMA //
	responsiveFeatures(); // RESPONSIVE FEATURES //

	// PAGESPY //
	var str=location.href.toLowerCase();

	$(".navmenu li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$(".navmenu li.active").removeClass("active");
			$(this).parent().addClass("active");
			var parentDropDown = $(this).closest('.dropdown');
			if(parentDropDown !== undefined){
				parentDropDown.addClass('active');
			}
		}
	});
	$(".navbar li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$(".navbar li.active").removeClass("active");
			$(this).parent().addClass("active");
			var parentDropDown = $(this).closest('.dropdown');
			if(parentDropDown !== undefined){
				parentDropDown.addClass('active');
			}
		}
	});
	$(".page-spy").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$(".page-spy.active").removeClass("active");
			$(this).addClass("active");
		}	
	});
	$(".page-spy").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			$(".page-spy.active").removeClass("active");
			$(this).addClass("active");
		}	
	});
	// ./PAGESPY //

	// BOOTSTRAP FORM VALIDATOR //
	$(function() {
		$(".validated").jqBootstrapValidation();
	});
	// ./BOOTSTRAP FORM VALIDATOR //

	// FORM ANCHOR //
	$(".field-hidden").hide();
	function fieldRevealer() {
		$(".field-revealer").each(function() {
			var anchorId = '#' + $(this).attr("form-anchor");
			var anchorValue = $(this).attr("form-anchor-value");
			if ( !$(this).is("select") ) {
				if ( $(this).is(':checked') ) {
					$(anchorId).slideDown("fast"); //Slide Down Effect
				} else {
					$(anchorId).slideUp("fast");  //Slide Up Effect
				};
			} else {
				if ( $(this).val() != anchorValue ) {
					$(anchorId).slideDown("fast"); //Slide Down Effect
				} else {
					$(anchorId).slideUp("fast");  //Slide Up Effect
				};
			};
		})
	}
	fieldRevealer();
	$(".field-revealer").click(function(){
		fieldRevealer();
	});
	// ./FORM ANCHOR //
});
// ./Document.Ready() //

$(window).resize(function(){
	responsiveFeatures();
}) // ./Window.Resize() //

// ADD SLIDEDOWN ANIMATION TO BOOTSTRAP DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
});

// ADD SLIDEUP ANIMATION TO BOOTSTRAP  DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
});

// DATEPICKER //
$('.datepicker-pt').datepicker({
	format: "dd/mm/yyyy",
	todayBtn: "linked",
	language: "pt-BR"
});

// PAGE SCROLL //
$(function() {
	$('a.page-scroll[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - '60'
				}, 1000);
				return false;
			}
		}
	});
});
// ./PAGE SCROLL //

// FLOATER //
$("#floater").not(".floater-visible").fadeOut();

var floaterTop = $("#floater").offset().top;
var dataFloaterMax = $("#floater").attr("data-floater-max");

function floaterOffset() {
	if ($(".navbar").length) {
		return floaterTop - 51;
	} else {
		return floaterTop;
	};
};
function floaterHide() {
	if ($("#floater").hasClass("floater-visible")) {
		return null;
	} else {
		return $("#floater").fadeOut();
	};
}
function floaterFix() {
	if ($(".navbar").length) {
		return "floater-navbar-fixed";
	} else {
		return "floater-fixed";
	};
}
function floaterMaximum() {
	if (dataFloaterMax != null) {
		return dataFloaterMax;
	} else {
		return 1000000000;
	};
}
// ./FLOATER //

$(window).scroll(function() {
	if ($(this).scrollTop() > floaterOffset() && $(this).scrollTop() < floaterMaximum()) {
		$("#floater").fadeIn();
		$("#floater").addClass(floaterFix());
	} else {
		floaterHide();
		$("#floater").removeClass(floaterFix());
	}
	var y = $(this).scrollTop();
	$('.list-group-item').each(function (event) {
		if (y >= $($(this).attr('href')).offset().top - 80) {
			$('.list-group-item').not(this).removeClass('active');
			$(this).addClass('active');
		}
	});
});