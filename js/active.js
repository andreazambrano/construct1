(function ($) {
    'use strict';


    // Fullscreen Display
    $(window).on('resizeEnd', function () {
        $(".single-slide").height($(window).height());
    });
    $(window).on('resizeEnd', function () {
        $(".port-full-scr").height($(window).height());
    });
    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");


    // Sticky Header
    $(document).ready(function ($) {
        // Sticky Header
        $(".header-area").sticky({
            topSpacing: 0
        });
    });

    // All Slider Start

    // Welcome Slider Active Code
    $(".welcome-slide").owlCarousel({
        nav: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 100,
        singleItem: true,
        loop: true,
        dot: false,
        autoplay: false, // true or false to auto play
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //Review Slider
    $("#review-slider").owlCarousel({
        nav: false, // Show next and prev buttons
        slideSpeed: 500,
        singleItem: true,
        paginationSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //Partner Slider
    $(".partner-slide").owlCarousel({
        smartSpeed: 450,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 5,
        bullet: false,
        responsiveClass: true,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0
        itemsMobile: 2, // itemsMobile disabled - inherit from itemsTablet option
    });
    // All Slider End






    //Isotope Filter ================================================================================

    $(window).load(function () {
        var $container = $('.portfolio-area');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.port-filter button').click(function () {
            $('.port-filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });


    // Mobile Menu
    $('.main-menu').slicknav({
        label: '',
        closeOnClick: true,
        prependTo: '.mobile-menu'
    });

    //Timer 
    $('.counter').counterUp({
        time: 2000
    });




    // Preloader active code
    $(window).on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // Smoth Scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 70, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {} // Function to run after scrolling
    });

    // Active Menu Highlight Js
    var elm = document.querySelector('.header-area');
    var ms = new MenuSpy(elm);

    // WOW Js
    new WOW().init();


})(jQuery);