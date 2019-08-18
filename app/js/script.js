$(document).ready(function () {

    // script for pointer follower
    $(this).mousemove(function(e){
        $('.pointer').css({left: e.pageX , top: e.pageY})
    });
    $('#case__slider-left').slick({
        slideToShow: 1,
        dots: true,
        arrows: false,
        prevArrow: "<div class='nat-slider-prev'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='nat-slider-next'><svg width='35' height='7'><path fill-rule='evenodd' opacity='.8' d='M35 7L0 6.999V4.846h28.406V0L35 7z'/></svg></div>",
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<a class="pager__item"> '+title+' </a>';
        },
    });
    $('#case__slider-right').slick({
        slideToShow: 1,
        dots: true,
        arrows: false,
        prevArrow: "<div class='nat-slider-prev'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='nat-slider-next'><svg width='35' height='7'><path fill-rule='evenodd' opacity='.8' d='M35 7L0 6.999V4.846h28.406V0L35 7z'/></svg></div>",
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).data('title');
            return '<a class="pager__item"> '+title+' </a>';
        }
    });

    // var controller = new ScrollMagic.Controller();
    
    var tl = new TimelineMax();
    tl
        .fromTo("#case__slider-right .case__slider-item .thumbnail .overlay", 2,{skewX: 30, scale: 3 },{skewX:0, delay:1, transformOrigin: "0% 100%",
        xPercent: 100, ease: Power3.easeOut})
        // .from("case__slider .right", 1, {x: 200, autoAlpha: "1"},'-=1')

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#case__slider-right",
        // duration: "100%",
        triggerHook: 0.9
    })

    .setTween(tl)
    .addTo(controller)
    .addIndicators();

    var tl2 = new TimelineMax();
    tl2
        .fromTo("#case__slider-left .case__slider-item .thumbnail .overlay", 2,{skewX: 30, scale: 3 },{skewX:0, delay:1, 
            transformOrigin: "0% 100%",xPercent: 100, ease: Power3.easeOut})

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#case__slider-left",
        // duration: "100%",
        triggerHook: 0.9
    })

    .setTween(tl2)
    .addTo(controller)
    .addIndicators();

    // $('.navigation__menu').click(function(){
    //     $('.navigation__item').addClass('activeClass');
    // });
    // $('.close_button').click(function(){
    //     $('.navigation__item').removeClass('activeClass');
    // });

    var nav_menu_open = new TimelineMax();

    nav_menu_open
        .to(".navigation__item", .5, {
            opacity: 1,
            zIndex: 1111,
            ease: Power0.easeNone,
        });
    nav_menu_open
        .staggerFromTo(".navigation_background_diveders .navigation_diveder", .1, {
            autoAlpha: 0,
            y: -500,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Power0.easeNone,
        },.3);
    nav_menu_open
        .staggerFromTo(".navigation__item ul li", .5, {
            autoAlpha: 0,
            x: -100,
        }, {
            autoAlpha: 1,
            x: 0,
            ease: Power0.easeNone,
        },.3);

    nav_menu_open.pause();

    $('.navigation__menu').on('click', function(){
        nav_menu_open.restart();
        nav_menu_open.play();
    });

    $('.close_button').on('click', function(){
        nav_menu_open.reverse();
    });

});
