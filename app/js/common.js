$(document).ready(function() {

	var wnd = $(window),
		wrapper = $('.js-wrapper'),
		header = $('.js-header'),
		headerSearch = $('.js-header-search'),
		menu = $('.js-menu'),
		menuBtn = $('.js-menu-btn'),
		menuClose = $('.js-menu-close'),
		dropdown = $('.js-dropdown'),
		input = $('.js-input'),
		tableSwitch = $('.js-switch'),
		select = $('.js-select'),
		edit = $('.js-edit'),
		search = $('.js-search'),
		notify = $('.js-notify'),
		notifyShow = $('.js-notify-show');

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
		return false;
	});

	if (dropdown.is('input')) {
		dropdown.on('focus', function () {
			$(this).parent().next().show();
		});

		dropdown.on('blur', function () {
			$(this).parent().next().hide();
		});
	};

	wnd.scroll(function () {
		var scr = wnd.scrollTop();
		if (scr > 0) {
			wrapper.addClass('is-header-fixed');
			header.addClass('is-fixed');
			headerSearch.addClass('is-hide');
		}
		else {
			wrapper.removeClass('is-header-fixed');
			header.removeClass('is-fixed');
			headerSearch.removeClass('is-hide');
		}
	});
	headerSearch.find('.icon-search').on('click', function () {
		headerSearch.removeClass('is-hide');
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

	select.on('click', function () {
		$(this).toggleClass('is-active');
	});

	edit.on('click', function () {
		$(this).parent().toggleClass('is-active');
	});

	search.each(function () {
		var _this = $(this),
			input = _this.find('input'),
			button = _this.find('button');
		input.keyup(function () {
			var _this = $(this),
				value = _this.val();
			if (value.length > 0) {
				button.show();
			}
			else {
				button.hide();
			}
		});
		button.on('click', function () {
			button.hide();
			input.val('');
			return false;
		});
	});

	notifyShow.on('click', function () {
		notify.fadeIn();
	});
	
});