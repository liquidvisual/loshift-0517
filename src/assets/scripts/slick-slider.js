/*
    SLICK-SLIDER.JS - Last updated: 03.07.17
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// TESTIMONIAL SLIDER
//-----------------------------------------------------------------

$('.card-slider').slick({
	autoplay: true,
	centerMode: true,
	slidesToShow: 3,
	variableWidth: true,
	variableHeight: true,
	slide: '.testimonial-block',
	arrow: true,
	prevArrow: '[data-slider-controls] .lv-hero-carousel-prev-btn',
	nextArrow: '[data-slider-controls] .lv-hero-carousel-next-btn',
	speed: 1000,
	pause: 2200,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			arrows: false,
			variableWidth: true,
			variableHeight: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 1,
			speed: 1000,
		}
	},
	{
		breakpoint: 490,
		settings: {
			autoplay: false,
			arrows: false,
			centerMode: true,
			centerPadding: '0',
			slidesToShow: 1,
			speed: 1000,
			variableWidth: false,
		}
	}]
});

//-----------------------------------------------------------------
// Gallery Slider (Fonzie)
//-----------------------------------------------------------------

// $(".gallery-slider").each(function(){

//     var $this = $(this);
//     var $sliderNav = $('.slider-nav', $this);
//     var $sliderFor = $('.slider-for', $this);

//     $sliderFor.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         asNavFor: $sliderNav
//     });

//     $sliderNav.slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         asNavFor: $sliderFor,
//         dots: false,
//         centerMode: false,
//         focusOnSelect: true
//     });
// });

//==================================================
//
//==================================================