$(document).ready(function(){
    $('.line-dec').css('background-size', $(window).width());
    $(window).resize(function(e){
        $('.line-dec').css('background-size', $(window).width());
    });
    if($(window).innerWidth() > 1000) {
    	$('.promo__left').mouseover(function(){
	    	$('.choice').removeClass('left right');
	    	$('.choice').addClass('right');
	    	$(this).removeClass('blur');
	    	$(this).siblings().addClass('blur');
	    });
	    $('.promo__right').mouseover(function(){
	    	$('.choice').removeClass('left right');
	    	$('.choice').addClass('left');
	    	$(this).removeClass('blur');
	    	$(this).siblings().addClass('blur');
	    });
	    $('.promo__left, .promo__right').mouseout(function(){
	    	$('.choice').removeClass('left right');
	    	$('.promo__left, .promo__right').removeClass('blur');
	    });
    }
});