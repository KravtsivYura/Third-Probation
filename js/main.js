;(function($){
	'use strict';

	$(document).ready(function(){
		$('.section-one-slider-container').slick({
			infinite: true,
			speed: 500,
			fade: true,
			nextArrow: '.header-slick-button-next',
			prevArrow: '.header-slick-button-prev'
		});
	});

})(jQuery);


