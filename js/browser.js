var agent = navigator.userAgent;

var isIE =
	/*@cc_on!@*/ false || !!document.documentMode || agent.indexOf("MSIE") > -1;
var isBrowser = {
	// Opera 8.0+
	".browser-opera": (!!window.opr && !!opr.addons) ||
		!!window.opera ||
		agent.indexOf("Opera") > -1 ||
		agent.indexOf("OPR") > -1,
	// Firefox 1.0+
	".browser-firefox": typeof InstallTrigger !== "undefined" || agent.indexOf("Firefox") > -1,
	// Safari 3.0+ "[object HTMLElementConstructor]"
	".browser-safari": /constructor/i.test(window.HTMLElement) ||
		(function (p) {
			return p.toString() === "[object SafariRemoteNotification]";
		})(
			!window["safari"] ||
			(typeof safari !== "undefined" && safari.pushNotification)
		),
	// Internet Explorer 6-11
	".browser-ie": isIE,
	// Edge 20+
	".browser-edge": (!isIE && !!window.StyleMedia) ||
		agent.indexOf("Edge") > -1 ||
		agent.indexOf("Edg") > -1,
	// Chrome 1 - 71
	".browser-chrome": (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) ||
		agent.indexOf("Chrome") > -1,
	// Blink engine detection
	//".browser-blink": (isChrome || isOpera) && !!window.CSS,
	// IOS
	".browser-ios": /iPhone|iPad|iPod/i.test(agent),
	// Android
	".browser-android": /Android/i.test(agent),
	// Mobile
	".browser-mobile": /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent),
};

for (let i in isBrowser)
	if (isBrowser[i])
		$('head').append(`<style>${i}{display:initial}</style>`);

$(".modrow-buttons").each(function () {
	var bItem = $(this);
	for (let i in isBrowser) {
		if (isBrowser[i] && bItem.children(i).length > 0) {
			bItem.children(".browser-none").hide();
			break;
		}
	}
});