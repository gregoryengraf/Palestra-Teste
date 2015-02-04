$(function(){
	SyntaxHighlighter.all();
});

// BOOTBOX //
bootbox.setDefaults({
  locale: "pt",
  onEscape: function() {}
});

$(document).ready(function() {
	new WOW().init();
	// Fancybox //
	$(".fancybox")
	.attr('rel', 'gallery')
	.fancybox({
		openEffect: 'elastic',
		closeEffect: 'elastic',
		nextEffect: 'fade',
		prevEffect: 'fade',
		padding : 0,
		margin      : [20, 60, 20, 60],
		afterLoad   : addLinks,
		beforeClose : removeLinks
	});
	function addLinks() {
		var list = $("#fancybox-links");
		
		if (!list.length) {    
			list = $('<ul id="fancybox-links">');

			for (var i = 0; i < this.group.length; i++) {
				$('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
			}
			
			list.appendTo( 'body' );
		}

		list.find('li').removeClass('active').eq( this.index ).addClass('active');
	}

	function removeLinks() {
		$("#fancybox-links").remove();    
	}
	// ./Fancybox //

	$('#quicksand-source').quicksand( $('#quicksand li') );// Quicksand //

	// FlexSlider Scale //
	$('.flexslider').flexslider({
		pauseOnAction: true,
		pauseOnHover: true,
		useCSS: true,
		touch: true,
		pausePlay: false, 
		animationLoop: true,
		animation: "slide"
	});

	var flexSliderResize = function(){
		
		var flexScale = $(".flexslider").width();
		var flexWidthScale = flexScale/50;
		var flexWidthScaleMin = 10;
		var flexWidthScaleMax = 48;

		if ( flexWidthScale <= flexWidthScaleMin ) {
			flexWidthScale = flexWidthScaleMin;
		};

		if ( flexWidthScale >= flexWidthScaleMax ) {
			flexWidthScale = flexWidthScaleMax;
		};

		var flexCaption = flexWidthScale*1;
		var flexCaptionSpan = flexWidthScale*0.5833333333;
		var flexButton = flexWidthScale*0.6666666667;
		var flexImg = flexScale*0.18;
		var flexBtnMargin = flexScale/4;

		$(".flex-caption").css("font-size", flexCaption + "pt");
		$(".flex-caption span").css("font-size", flexCaptionSpan + "pt");
		$(".flex-caption button, .flex-caption a").css("font-size", flexButton + "pt");
		$(".flexslider .slides .flex-img").css("width", flexScale + "px");
		$(".flexslider .slides .flex-img img").css("max-height", flexImg + "px");
		$(".flex-img-top-middle .flex-img-wrapper, .flex-img-middle .flex-img-wrapper, .flex-img-bottom-middle .flex-img-wrapper").each(function(){
			var flexImgWidth = flexScale/2 - ($(this).find('img').width())/2;
			$(this).css("left",  flexImgWidth + "px" );
		})
		$(".flex-img-middle-right .flex-img-wrapper, .flex-img-top-right .flex-img-wrapper, .flex-img-bottom-right .flex-img-wrapper").each(function(){
			var flexImgWidth = flexScale - ($(this).find('img').width())*1.6;
			$(this).css("left", flexImgWidth  + "px" );	
		})
		$(".flex-caption-bottom-left-01 .btn, .flex-caption-bottom-left-02 .btn, .flex-caption-middle-left .btn, .flex-caption-top-left .btn").css("margin-left", flexBtnMargin + "px");
		$(".flex-caption-bottom-right-01 .btn, .flex-caption-bottom-right-02 .btn, .flex-caption-middle-right .btn, .flex-caption-top-right .btn").css("margin-right", flexBtnMargin + "px");

		var flexHeightScale = flexScale*0.333;
		
		if ($(window).width() <= 440) {
			var flexBottom1 = flexHeightScale*0.5;
			var flexBottom2 = flexHeightScale*0.35;
			var flexBottom3 = flexHeightScale*0.15;
			var flexTop = 0;
		} else if (($(window).width() > 440) && ($(window).width() <= 1200)) {
			var flexBottom1 = flexHeightScale*0.7;
			var flexBottom2 = flexHeightScale*0.6;
			var flexBottom3 = flexHeightScale*0.3;
			var flexTop = flexHeightScale*0.005;
		} else {
			var flexBottom1 = flexHeightScale*0.8;
			var flexBottom2 = flexHeightScale*0.6;
			var flexBottom3 = flexHeightScale*0.4;
			var flexTop = flexHeightScale*0.005;
		};

		$(".flex-caption-bottom-left-01, .flex-caption-bottom-right-01, .flex-caption-bottom-middle-01").css("top", flexBottom1 + "px");
		$(".flex-caption-bottom-left-02, .flex-caption-bottom-right-02, .flex-caption-bottom-middle-02").css("top", flexBottom2 + "px");
		$(".flex-caption-middle-left, .flex-caption-middle-right, .flex-caption-middle").css("top", flexBottom3 + "px");
		$(".flex-caption-top-left, .flex-caption-top-right, .flex-caption-top-middle").css("top", + flexTop + "px");
		$(".flex-img-middle .flex-img-wrapper, .flex-img-middle-left .flex-img-wrapper, .flex-img-middle-right .flex-img-wrapper").css("top", flexHeightScale*0.3 + "px" );
		$(".flex-img-bottom-left .flex-img-wrapper, .flex-img-bottom-right .flex-img-wrapper, .flex-img-bottom-middle .flex-img-wrapper").css("top", flexHeightScale*0.55 + "px" );

		var flexOverlayWidth = flexScale;
		var flexOverlayHeight = flexHeightScale;

		$(".flex-overlay").css("width", flexOverlayWidth + "px");
		$(".flex-overlay").css("height", flexOverlayHeight + "px");

		if ($(window).width() <= 720){
			$(".flexslider br").hide();
		} else{
			$(".flexslider br").show();
		};
	}
	
	flexSliderResize();

	setTimeout(flexSliderResize, 100);

	$(window).resize(function(){
		flexSliderResize();
	})
	// ./FlexSlider Scale //

	// DATATABLES //
	$('#dataTables-example, #dataTables, .dataTables').dataTable( {
		"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
		"language": {
			"lengthMenu": "_MENU_ Resultados por página",
			"zeroRecords": "Nenhum resultado encontrado",
			"info": "Mostrando _PAGE_ de _PAGES_",
			"infoEmpty": "Sem registros disponíveis",
			"infoFiltered": "(filtrado de _MAX_ registros)",
			"sSearch": "Filtro:  ",
			"paginate": {
				"previous": "<i class='icon-seta-esquerda'></i>",
				"next": "<i class='icon-seta-direita'></i>"
			}
		},
	});

	// CONFIRMATION MODAL //
	$(document).on("click", ".delete-confirmation", function(){
		var itemId      = $(this).attr("id");
		var itemNome    = $(this).attr("data-delete-nome");
		var itemPreview = $(this).attr("data-delete-preview");
		var itemDeleteHref    = $(this).attr("data-delete-href");
		function itemImg(){
			if (itemPreview == null) {
				return "";
			} else {
				return "<img class='img-responsive' src=" + itemPreview + " />"
			};
		}

		var mensagem    = "<p>O item <strong>" + itemNome + "</strong> será excluído!</p>" + itemImg();

		bootbox.confirm(mensagem, function(resposta) {
			if (resposta == true) {
				var location = itemDeleteHref + itemId;
				window.location.href= location;
			};
		}); 
	});
})