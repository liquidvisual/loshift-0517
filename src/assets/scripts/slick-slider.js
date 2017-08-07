/*
    SLICK-SLIDER.JS - Last updated: 05.08.17
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// TAB SWITCHING - When TWO slicks are toggled
//-----------------------------------------------------------------

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.card-slider').slick('unslick'); // destroy all
	launchSlider(); // run again
})

//==================================================
// LAUNCH SLIDER
//==================================================

function launchSlider() {
	$('.card-slider').each(function(){

		//==================================================
		// VARS
		//==================================================

		var $this = $(this);
		var $prevArrow = $this.parent().find('[data-slider-controls] .lv-hero-carousel-prev-btn');
		var $nextArrow = $this.parent().find('[data-slider-controls] .lv-hero-carousel-next-btn');

		//==================================================
		// RANDOMIZE SLIDES
		//==================================================

		$this.randomize('.testimonial-block');

		//==================================================
		// SLICK
		//==================================================

		$this.slick({
			autoplay: true,
			centerMode: true,
			slidesToShow: 3,
			variableWidth: true,
			variableHeight: true,
			slide: '.testimonial-block',
			arrow: true,
			prevArrow: $prevArrow,
			nextArrow: $nextArrow,
			speed: 1200,
			pause: 5000,
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
					speed: 1200,
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
					speed: 1200,
					variableWidth: false,
				}
			}]
		})
	});
}

launchSlider();

//-----------------------------------------------------------------
// RANDOMIZE
// https://stackoverflow.com/questions/1533910/randomize-a-sequence-of-div-elements-with-jquery#11766418
// Usage: $('.member').randomize('li');
// OR     $('.member li').randomize();
//-----------------------------------------------------------------

$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });
    return this;
};

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