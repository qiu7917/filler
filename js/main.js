$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".sec06-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });

        $(".sec09-slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
    });


    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    $('.accordion').on('click', function (e) {
        $('.accordion').not(this).removeAttr('open');
    });


    /*=================================================
    fixedbtn
    ===================================================*/

    $(function () {
        let cta = $(".fixedbtn");
        cta.hide();

        $(window).scroll(function () {
            let scrollThreshold = 500;
            if ($(window).scrollTop() > scrollThreshold) {
                cta.fadeIn();
            } else {
                cta.fadeOut();
            }
        });
    });


    $(window).on("scroll resize", function () {
        if (window.innerWidth <= 768) {
            let ctaHeight = $(".fixedbtn").outerHeight();
            ($(".fixedbtn").is(":visible"))
            $("footer").css("padding-bottom", ctaHeight + "px");

        } else {
            $("footer").css("padding-bottom", "100px");
        }
    });
});