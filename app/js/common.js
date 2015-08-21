$(document).ready(function() {

	var wnd = $(window),
		wrapper = $('.js-wrapper'),
		header = $('.js-header'),
		headerSearch = $('.js-header-search'),
		menu = $('.js-menu'),
		menubutton = $('.js-menu-button'),
		menuClose = $('.js-menu-close'),
		dropdown = $('.js-dropdown'),
		input = $('.js-input'),
		tableSwitch = $('.js-switch'),
		select = $('.js-select'),
		edit = $('.js-edit'),
		search = $('.js-search'),
		notify = $('.js-notify'),
		notifyShow = $('.js-notify-show'),
		dp = $('.js-dp'),
		dpRange = $('.js-dp-range'),
		dpMulti = $('.js-dp-multi');

	menubutton.on('click', function () {
		menubutton.toggleClass('is-active');
		menu.toggleClass('is-active');
	});

	menuClose.on('click', function () {
		menubutton.removeClass('is-active');
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

	if (dp.length) {
		dp.daterangepicker({
			singleDatePicker: true
		});
	};
	if (dpRange.length) {
		dpRange.daterangepicker();
	};
	if (dpMulti.length) {
		dpMulti.daterangepicker({
			locale: {
				format: "MM/DD/YYYY",
				separator: " - ",
				applyLabel: "Apply",
				cancelLabel: "Cancel",
				fromLabel: "From",
				toLabel: "To",
				customRangeLabel: "Custom Range",
				monthNames: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				],
				firstDay: 1
			},
			ranges: {
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 3 Days': [moment().subtract(2, 'days'), moment()],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			}
		});
	};

	(function () {
		var body = $('body'),
			popover;
		$('[data-popover]').hover(function () {
			var _this = $(this),
				content = _this.data('popover'),
				posTop = _this.offset().top,
				posLeft = _this.offset().left,
				height = _this.height(),
				margin = 5,
				top = posTop + height + margin;
			body.append('<div class="popover" style="top: ' + top + 'px; left: ' + posLeft + 'px">' + content + '</div>');
		}, function () {
			$('.popover').remove();
		});
	}());
	
	
});