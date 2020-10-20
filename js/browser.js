'use strict';

let agent = navigator.userAgent;

let isIE =
	/*@cc_on!@*/ false || document.documentMode || agent.indexOf("MSIE") > -1;
let isBrowser = {
	// Opera 8.0+
	opera: (window.opr && opr.addons) ||
		window.opera ||
		agent.indexOf("Opera") > -1 ||
		agent.indexOf("OPR") > -1,
	// Firefox 1.0+
	firefox: typeof InstallTrigger !== "undefined" || agent.indexOf("Firefox") > -1,
	// Safari 3.0+ "[object HTMLElementConstructor]"
	safari: /constructor/i.test(window.HTMLElement) ||
		(function (p) {
			return p.toString() === "[object SafariRemoteNotification]";
		})(
			!window["safari"] ||
			(typeof safari !== "undefined" && safari.pushNotification)
		),
	// Internet Explorer 6-11
	ie: isIE,
	// old edge 20+
	edge: (!isIE && window.StyleMedia) ||
		agent.indexOf("Edge") > -1 ||
		agent.indexOf("Edg") > -1,
	chrome: (window.chrome && (window.chrome.webstore || window.chrome.runtime)) ||
		agent.indexOf("Chrome") > -1,
	// blink: (isChrome || isOpera) && window.CSS,
	ios: /iPhone|iPad|iPod/i.test(agent),
	android: /Android/i.test(agent),
	mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent),
};

{
	let s = document.createElement('style');
	for (let i in isBrowser)
		if (isBrowser[i])
			s.innerHTML += `.browser-${i}, `;
	if (s.innerHTML) {
		s.innerHTML = s.innerHTML.replace(/,\s*$/, ` { display:initial; }`) // remove last comma and add style
		document.head.append(s);
	}
}

Array.from(document.getElementsByClassName("modrow-buttons")).forEach(function (bItem) {
	//let primaryButtons = bItem.getElementsByClassName(`primary`)
	for (let i in isBrowser)
		if (isBrowser[i] && bItem.querySelectorAll(`.browser-${i}.primary`).length > 0) {
			bItem.getElementsByClassName("browser-none").hidden = true;
			break;
		}
});