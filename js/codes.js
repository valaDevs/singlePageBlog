$(function() {
    let owl = $('.owl-carousel')
    owl.owlCarousel({
        animateOut: 'fadeOut',
        items :1,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
    })
})