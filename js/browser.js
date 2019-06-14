// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

var isAndroid = /Android/i.test(navigator.userAgent);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var noneText = '<span class="browser-none">This tool is not supported on your browser.</span>';

var isBrowser = [
    isOpera,
    isFirefox,
    isSafari,
    isIE,
    isEdge,
    isChrome && !(isOpera|isAndroid),
    isBlink  && !(isChrome || isOpera),
    isIOS,
    isAndroid,
    isMobile && !(isAndroid|isIOS)
]

var operaQuery = ".browser-opera";
var firefoxQuery = ".browser-firefox";
var safariQuery = ".browser-safari";
var ieQuery = ".browser-ie";
var edgeQuery = ".browser-edge";
var chromeQuery = ".browser-chrome";
var blinkQuery = ".browser-blink";
var iosQuery = ".browser-ios";
var androidQuery = ".browser-android";
var mobileQuery = ".browser-mobile"
var noneQuery = ".browser-none";

var browserQuery = [
    operaQuery,
    firefoxQuery,
    safariQuery,
    ieQuery,
    edgeQuery,
    chromeQuery,
    blinkQuery,
    iosQuery,
    androidQuery,
    mobileQuery
];

$('.browser-list').each(function(){
    var bItem = $(this);
    var browserSupported = browserQuery.map((bQuery,i)=>{
        var item = bItem.children(bQuery);
        return {
            item,
            supported:isBrowser[i] && item.length >0
        };
    });
    var noneSupported = {
        item: bItem.children(noneQuery),
        supported:!browserSupported.map(bs=>bs.supported).reduce((sum,item)=>sum||item)
    }

    browserSupported.forEach(bs=>{
        if(bs.supported){
            bs.item.show();
        }
    });

    if(!noneSupported.supported) {
        noneSupported.item.hide();
    }
});

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
  });