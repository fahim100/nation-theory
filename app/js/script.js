$(document).ready(function () {
    'use strict';
    $('#nat__case__slider-left').slick({
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
    $('#nat__case__slider-right').slick({
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
});
