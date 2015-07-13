$(document).ready(function() {

	var wnd = $(window),
		wrapper = $('.js-wrapper'),
		header = $('.js-header'),
		menu = $('.js-menu'),
		menuBtn = $('.js-menu-btn'),
		menuClose = $('.js-menu-close'),
		dropdown = $('.js-dropdown');

	menuBtn.on('click', function () {
		menu.addClass('is-open');
	});

	menuClose.on('click', function () {
		menu.removeClass('is-open');
	});

	dropdown.on('click', function () {
		$(this).parent().toggleClass('is-open');
	});

	dropdown.on('focus', function () {
		$(this).parent().next().show();
	});

	dropdown.on('blur', function () {
		$(this).parent().next().hide();
	});

	wnd.scroll(function () {
		var scr = wnd.scrollTop();
		if (scr > 0) {
			wrapper.addClass('is-header-fixed');
			header.addClass('is-fixed');
		}
		else {
			wrapper.removeClass('is-header-fixed');
			header.removeClass('is-fixed');
		}
	});
	
});