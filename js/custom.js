// CUSTOM JS FOR CAROUSELS

$(document).ready(function () {
    // $(".owl-carousel").owlCarousel();
    $('.wellness-carousel').owlCarousel({
        stagePadding: 60,
        loop: true,
        nav: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    $('.heighlightcarousel').owlCarousel({
        // stagePadding: 60,
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    $('.testimonial-carousel').owlCarousel({
        stagePadding: 60,
        loop: true,
        nav: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: false
            },
            991: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    $('.carousel-3').owlCarousel({
        stagePadding: 60,
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    });



    $('.Sustainability-carousel').owlCarousel({
        stagePadding: 60,
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

});

// CARAUSEL FOR CHIVASOM PAGE
$('.accomodation-carousel').owlCarousel({

    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            stagePadding: 80,
            items: 1,
            nav: true
        },
        800: {
            stagePadding: 80,
            items: 1,
            nav: false
        },
        991: {
            stagePadding: 160,
            items: 1,
            nav: true,
            loop: false
        }
    }
});

// CARAUSEL FOR BLOG AND NEWS PAGE
$('.blog-carousel').owlCarousel({
    dots: false,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },
        991: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});

// CARAUSEL FOR ZULAL PAGE
$('.ZulalWellness-carousel').owlCarousel({
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },
        991: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});


$('.ZulalRetreat-carousel').owlCarousel({
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },
        991: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});

$('.ZulalTestimonial-carousel').owlCarousel({
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    margin: 40,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },
        991: {
            items: 2,
            nav: true,
            loop: false
        }
    }
});


// CUSTOM JS FOR REST SECTION'S ACTIONS


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scrolled').addClass('navbarscrolled');
    } else {
        $('#scrolled').removeClass('navbarscrolled');
    }
});

$(document).ready(function () {
    $("#navbarDropdown").click(function (e) {
        //alert("HI");
        $(".mask").toggleClass("show");
        $("#scrolled").toggleClass("navreset");

        // if ($('.mask').hasClass('show')) {
        //     $('.mask').removeClass('show');
        // } else {
        //     $('.mask').addClass('show');
        // }
        e.stopPropagation()
    });
    $(document).on("click", function (e) {
        if ($(e.target).is("show") === false) {
            $(".mask").removeClass("show");
        };
        if ($(e.target).is("navreset") === false) {
            $("#scrolled").removeClass("navreset");
        }
    });
});