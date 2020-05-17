function updateNav(e) {
	if( $(this).scrollTop() < $('.page-header').height()) {
		$('.bcmc-header').removeClass('fixed');
	} else {
		$('.bcmc-header').addClass('fixed');
	}
}
updateNav();
$(window).scroll(updateNav);

$('.navbar-toggler').click(()=>{
	$('.bcmc-header').addClass('fixed');
});

var params = new URLSearchParams(location.search);
var authCode = params.get("code");

if (authCode)
{
	fetch(`https://auth.boxcrittersmods.ga/user/${authCode}`).then((res) => {
		return res.text();
	}).then((body) => {
		var parsed = JSON.parse(body);
		if (parsed.scope == "read:user")
		{
			sessionStorage.setItem("tmp_tok", parsed.access_token);
			login();
		}
	});
} else if (sessionStorage.getItem("tmp_tok"))
{
	login();
} else
{
	$("#loginout").click((event) => {
		location.href = "https://github.com/login/oauth/authorize?client_id=1731af4285015be120e7&scope=read:user";
	});
}

function login()
{
	fetch("https://api.github.com/user", {
		"headers": {
			"Accept": "application/json",
			"User-Agent": "BCMC User Login",
			"Authorization": `token ${sessionStorage.getItem("tmp_tok")}`
		}
	}).then((res) => {
		return res.text();
	}).then((body) => {
		$("#avatar").src = `https://github.com/${body.login}.png`;
	});
	$("#loginout").innerHTML = "Log Out";
	$("#loginout").off("click");
	$("#loginout").click((event) => {
		logout();
	});
}

function logout()
{
	sessionStorage.clear();
	$("#avatar").src = `/uploads/guest.png`;
	$("#loginout").innerHTML = "Log Out";
	$("#loginout").off("click");
	$("#loginout").click((event) => {
		login();
	});
}
