$(document).ready(function() {
	$('.menu-opener').on('click', function(e) { 
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active') 
    });

    $('.slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 1000
    });

    $('.slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-3'
    });

    $('.slider-3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-2',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
});