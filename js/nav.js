function updateNav(e) {
	if (window.scrollY <= $('.page-header').outerHeight() - $('.bcmc-header').outerHeight()) {
		$('.bcmc-header').removeClass('fixed');
	} else {
		$('.bcmc-header').addClass('fixed');
	}
}
updateNav();
$(window).scroll(updateNav);

$('.navbar-toggler').click(() => {
	$('.bcmc-header').addClass('fixed');
});

var params = new URLSearchParams(location.search);
var authCode = params.get("code");

$("#loginout").click((event) => {
	location.href = "https://api.utteranc.es/authorize?redirect_uri=https%3A%2F%2Fboxcrittersmods.ga";
});
