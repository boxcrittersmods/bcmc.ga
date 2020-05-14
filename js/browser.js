var agent = navigator.userAgent;

var noneText =
  '<span class="browser-none">This tool is not supported on your browser.</span>';

var isIE =
  /*@cc_on!@*/ false || !!document.documentMode || agent.indexOf("MSIE") > -1;
var isBrowser = [
  // Opera 8.0+
  (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    agent.indexOf("Opera") > -1 ||
    agent.indexOf("OPR") > -1,
  // Firefox 1.0+
  typeof InstallTrigger !== "undefined" || agent.indexOf("Firefox") > -1,
  // Safari 3.0+ "[object HTMLElementConstructor]"
  /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    ),
  // Internet Explorer 6-11
  isIE,
  // Edge 20+
  (!isIE && !!window.StyleMedia) ||
    agent.indexOf("Edge") > -1 ||
    agent.indexOf("Edg") > -1,
  // Chrome 1 - 71
  (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) ||
    agent.indexOf("Chrome") > -1,
  // Blink engine detection
  //(isChrome || isOpera) && !!window.CSS,
  //IOS
  /iPhone|iPad|iPod/i.test(agent),
  //Androis
  /Android/i.test(agent),
  //Mobile
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent),
];

var browserQuery = [
  ".browser-opera",
  ".browser-firefox",
  ".browser-safari",
  ".browser-ie",
  ".browser-edge",
  ".browser-chrome",
  ".browser-blink",
  ".browser-ios",
  ".browser-android",
  ".browser-mobile",
];
var noneQuery = ".browser-none";

$(".browser-list").each(function () {
  var bItem = $(this);
  var browserSupported = browserQuery.map((bQuery, i) => {
    var item = bItem.children(bQuery);
    return {
      item,
      supported: isBrowser[i] && item.length > 0,
    };
  });
  var noneSupported = {
    item: bItem.children(noneQuery),
    supported: !browserSupported
      .map((bs) => bs.supported)
      .reduce((sum, item) => sum || item),
  };

  browserSupported.forEach((bs) => {
    if (bs.supported) {
      bs.item.attr("style", "display: inline");
    }
  });

  if (!noneSupported.supported) {
    noneSupported.item.hide();
  }
});
