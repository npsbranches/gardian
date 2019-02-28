$('.showcase-slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>'
})

$('.btn-bars').click(function(){
    $('.mobile-menu').toggleClass('toggle');
    $('.btn-bars').toggleClass('fixed');
    $('.logo').toggleClass('fixed');
    $('body').toggleClass('fixed');
})

$('.mobile-menu a').click(function(){
    $('.mobile-menu').toggleClass('toggle');
    $('.btn-bars').toggleClass('fixed');
    $('.logo').toggleClass('fixed');
    $('body').toggleClass('fixed');
})

