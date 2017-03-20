(function($) {

    //scroll
$(document).ready(function() {
    $(".main-navigation-link").on("click", "a", function(event) {
        event.preventDefault();
        //active
        $(".main-navigation-link a").removeClass("active");
        if ($(this).attr('href') == "#sakums") {
            $('.main-navigation-link a[href=#sakums]').addClass("active");
        }
        $(this).addClass("active");
        //scroll
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 100
        }, 600);
    });
});


// scroll--add active-link
$(document).ready(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        $('.main-navigation-link li a').each(function (event) {
            if (scrolltop >= $($(this).attr('href')).offset().top -200) {
                $('.main-navigation-link li a').removeClass('active');
                $(this).addClass('active');
            }
        });

    });
});

//slider
$(document).ready(function() {
    //add navigation-button
    $(".slider").each(function() {
        var slider = $(this);
        $(slider).append("<nav class='main-slider-nav'></nav>");
        $(slider).find(".main-slider-item").each(function() {
            $(slider).find(".main-slider-nav").append("<button class='main-slider-btn' id='" + $(this).index() + "'></button>");
            $(this).addClass("slider" + $(this).index());
        });
        $(slider).find(".main-slider-btn").first().addClass("active");
    });
});

//add event click on main-navigation
$(document).on("click", ".main-slider-nav button", function () {
    var slider_scope = $(this).closest(".slider");
    $(slider_scope).find(".main-slider-btn").removeClass("active");
    $(this).addClass("active");
});



// fadein-page-nav(top)
$(function(){
    var element = $('.topnavpage');
    $(document).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 2000 ? 'In': 'Out')](600);
    });
});

// show effect main-navugation
$( document ).ready(function() {
    $('.main-navigation-container').effect('drop',{direction:'up',mode:'show'},'slow');
});

//select the item
 $(".offers-list").selectable();

})(jQuery);
