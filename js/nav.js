'use strict';

function updateNav(e) {
	if (document.getElementById('bcmc-header').offsetHeight + window.scrollY <= document.getElementsByClassName('page-header')[0].offsetHeight)
		document.getElementById('bcmc-header').classList.remove('fixed');
	else
		document.getElementById('bcmc-header').classList.add('fixed');
}
updateNav();
window.addEventListener('scroll', updateNav);

Array.from(document.getElementsByClassName('navbar-toggler')).forEach(e => e.addEventListener('click', e => {
	document.getElementById('bcmc-header').classList.add('fixed');
}));
/*
let
	params = new URLSearchParams(location.search),
	authCode = params.get("code");
*/
document.getElementById("loginout").addEventListener('click', e => {
	location.href = "https://api.utteranc.es/authorize?redirect_uri=https%3A%2F%2Fboxcrittersmods.ga";
});