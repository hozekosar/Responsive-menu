$(document).on('click', ".menu-toggle", function (e) {
	e.preventDefault();
	if (!$('.top-menu').length) {
		$menu = $('.menu_wrap').html();
		$('body').append('<div class="overlay"></div><button type="button" class="close_nav"></button><nav class="top-menu"><a href="#" class="menu-mobile-logo"><img src="' + IRA_THEME_URL + '/assets/images/logo-iranicard.svg" alt="" class="img-fluid logo" /></a><ul class="menu_wrap p-0">' + $menu + '</ul></nav>');
		setTimeout(function () {
			$('body').addClass("open-nav");
			$('.top-menu').toggleClass("open");
			$('.overlay').toggleClass("show");
			$('header .menu_wrap').remove();
		}, 300)
	} else {
		$('body').addClass("open-nav");
		$('.top-menu').toggleClass("open");
		$('.overlay').toggleClass("show");
	}

});
