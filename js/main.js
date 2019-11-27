$(document).ready(function(){
    console.log('yo');

    $('.line-dec').css('background-size', $(window).width())
    $(window).resize(function(e){
        console.log();

        $('.line-dec').css('background-size', $(window).width())
    })
})