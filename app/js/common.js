$(document).ready(function() {

	var wnd = $(window),
		wrapper = $('.js-wrapper'),
		header = $('.js-header'),
		menu = $('.js-menu'),
		menuBtn = $('.js-menu-btn'),
		menuClose = $('.js-menu-close'),
		dropdown = $('.js-dropdown'),
		input = $('.js-input');

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

	input.focus(function () {
		$(this).parent().addClass('is-filled');
	});

	input.blur(function () {
		var _this = $(this),
			value = _this.val();
		console.log(value.length);
		if (value.length == 0) {
			_this.parent().removeClass('is-filled');
		};
	});
	
});