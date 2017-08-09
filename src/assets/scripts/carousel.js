/*
    HERO.JS - Last updated: 04.06.17
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var isTablet = $(window).width() < 1025; // no more touch

//-----------------------------------------------------------------
// ON READY (IMPORTANT)
// Multiple slides trigger the hero carousel
//-----------------------------------------------------------------

$(function() {
    if ($('.lv-hero-item').length > 1) launchCarousel();
    launchFeedCarousel();
});

//-----------------------------------------------------------------
// LAUNCH FEED CAROUSEL
//-----------------------------------------------------------------

function launchFeedCarousel() {
    $('[data-vertical-feed]').bxSlider({
        auto: true,
        responsive: true,
        touchEnabled: false,
        pause: 5000, // Slow timer
        mode: 'vertical',
        slideMargin: 0,
        minSlides: 1,
        controls: false,
        infiniteLoop: true,
        pager: false,
        useCSS: true,
    });
}

//-----------------------------------------------------------------
// LAUNCH CAROUSEL
//-----------------------------------------------------------------

function launchCarousel() {

    //==================================================
    // RANDOMIZE SLIDES
    //==================================================

    // $('.lv-hero').randomize('.lv-hero-item');

    //==================================================
    // BX SLIDER
    //==================================================

    $('.lv-hero').bxSlider({
        auto: false, //!isTablet,
        mode: 'horizontal', // fade (much have fixed height or won't work)
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: true,
        oneToOneTouch: false,
        randomStart: true,
        speed: 1000,
        pause: 6000,
        slideMargin: 0,
        slideSelector: ".lv-hero-item",
        minSlides: 1,
        controls: true, // false, // true
        nextSelector: "[data-hero-carousel-controls] .lv-hero-carousel-next-btn",
        prevSelector: "[data-hero-carousel-controls] .lv-hero-carousel-prev-btn",
        nextText: "",
        prevText: "",
        infiniteLoop: true,
        useCSS: true,
        pager: false,
        pagerSelector: '.lv-hero-carousel-bullets',
        onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft animated');},
        onSlideBefore: function(){  $('.lv-hero-caption').fadeOut(200).removeClass('fadeInLeft animated');},
        onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft animated');}
    });
}

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

//==================================================
//
//==================================================