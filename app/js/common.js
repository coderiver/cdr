$(document).ready(function() {

	var wnd = $(window),
		wrapper = $('.js-wrapper'),
		header = $('.js-header'),
		menu = $('.js-menu'),
		menuBtn = $('.js-menu-btn'),
		menuClose = $('.js-menu-close'),
		dropdown = $('.js-dropdown'),
		input = $('.js-input'),
		tableSwitch = $('.js-switch');

	menuBtn.on('click', function () {
		menuBtn.toggleClass('is-active');
		menu.toggleClass('is-active');
	});

	menuClose.on('click', function () {
		menuBtn.removeClass('is-active');
		menu.removeClass('is-active');
	});

	dropdown.on('click', function () {
		$(this).parent().toggleClass('is-active');
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

	tableSwitch.each(function () {
		var _this = $(this);
		if (!_this.is(':checked')) {
			_this.parents('tr').addClass('is-disabled');
		}
	});
	tableSwitch.change(function () {
		$(this).parents('tr').toggleClass('is-disabled');
	});
	
});