$(document).ready(function() {
	// POPUP //
	function popup() {
		
		$.each(arrayFromPHP, function (i, elem) {

			var popup = elem.popup;
			var title = elem.title;
			var subtitle = elem.subtitle;
			var text = elem.text;
			var callToAction = elem.callToAction;
			var link = elem.link;
			var image = elem.image;

			function popupTitle() {
				if (title == "") {
					return "";
				} else {
					return title;
				};
			}

			function popupSubtitle() {
				if (subtitle == "") {
					return "";
				} else {
					return subtitle;
				};
			}

			function popupFinalTitle() {

				var titleText = "<h2>" + popupTitle() + "<br /><small>" + popupSubtitle() + "</small>" + "</h2>";

				if ( (title == "") && (subtitle == "") ) {
					return "";
				} else {
					return titleText;
				};
			}

			function preview() {
				if (image == "") {
					return "";
				} else {
					return "<img class='img-responsive' src='http://www.futurecom.com.br/images/'" + image + " />"
				};
			}

			function popupText() {
				if (text == "") {
					return "";
				} else {
					return text;
				};
			}
			
			var finalText = popupText() + '<br />' + preview();

			function popupTrigger() {

				if ( (callToAction == "") || (link == "")) {
					bootbox.dialog({
						message: finalText,
						title: finalTitle,
						buttons: {
							main: {
								label: textClose,
								className: "btn-default"
							}
						}
					});
				} else {
					bootbox.dialog({
						message: finalText,
						title: finalTitle,
						buttons: {
							main: {
								label: textClose,
								className: "btn-default"
							},
							primary: {
								label: callToAction,
								className: "btn-primary",
								callback: function() {
									window.location.href = link;
								}
							}
						}
					});
				};
			}

			if ( (popup === "true") ) {
				var language = $("html").attr("lang");
				var textClose;
				
				var finalTitle = popupFinalTitle();

				switch(language) {
					case "es":
						textClose = "Cerrar";
						break;

					case "pt":
						textClose = "Fechar";
						break;

					default: 
						textClose = "Close";
						break;
				}

				popupTrigger()
				
			};
		});
	}
	popup();
})