$(document).ready(function(){
    // load background image 
    $('[data-background]').each(function () {
        $(this).css({"background-image": "url(" + $(this).data("background") + ")" });
    });
    // end load background image 

    // menu header
    $(".linkButtonMenu").on("click", function(){
        if($(window).width() < 992){
            $(".wrapperMainMenu").stop().slideToggle();
        }
    })

    $(".linkMainMenu").on("click", function(){
        if($(window).width() < 992){
            let wrapperSubMenu = $(this).parent().children(".wrapperSubMenu");
            wrapperSubMenu.stop().slideToggle();
        }
    })

    $(".buttonSearchMenu").on("click", function(){
        $(".wrapperSearchBox").fadeIn();
    })
    $(".buttonCloseSearchBox").on("click", function(){
        $(".wrapperSearchBox").fadeOut();
    })
    // end menu header



    // main slider
    $(".showMainSlider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
        prevArrow: '<button class="slideArrowPrimary prevArrow"></button>',
	    nextArrow: '<button class="slideArrowPrimary nextArrow"></button>',
    });
    $(".wrapperMainSlider").hover(function(){
        if($(window).width() > 575){
            $(".showMainSlider .prevArrow").css({"left": "20px"});
            $(".showMainSlider .nextArrow").css({"right": "20px"});
        }
    }, function(){
        if($(window).width() > 575){
            $(".showMainSlider .prevArrow").css({"left": "-100px"});
            $(".showMainSlider .nextArrow").css({"right": "-100px"});
        }
    })
    // end main slider


    // comment clients slider 
    $(".showSlideCommentClients").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
        prevArrow: '<button class="slideArrowPrimary prevArrow"></button>',
	    nextArrow: '<button class="slideArrowPrimary nextArrow"></button>',
    });
    $(".containerSlideCommentClients").hover(function(){
        if($(window).width() > 575){
            $(".showSlideCommentClients .prevArrow").css({"left": "-100px"});
            $(".showSlideCommentClients .nextArrow").css({"right": "-100px"});
        }
    }, function(){
        if($(window).width() > 575){
            $(".showSlideCommentClients .prevArrow").css({"left": "-100%"});
            $(".showSlideCommentClients .nextArrow").css({"right": "-100%"});
        }
    })
    // end comment clients sliders
})