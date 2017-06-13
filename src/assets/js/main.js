$(document).ready(function () {
    $('.arrow.left').on("click", function () {
        $("#pages").dragend("right");
    });
    $('.arrow.right').on("click", function () {
        $("#pages").dragend("left");
    });

    $('.arrow.left').on("mouseenter", function () {
        $(this).find('.arrowColor').addClass('arrowColorLighthover');
    });
    $('.arrow.right').on("mouseenter", function () {
        $(this).find('.arrowColor').addClass('arrowColorLighthover');
    });

    $('.arrow.left').on("mouseleave", function () {
        $(this).find('.arrowColor').removeClass('arrowColorLighthover');
    });
    $('.arrow.right').on("mouseleave", function () {
        $(this).find('.arrowColor').removeClass('arrowColorLighthover');
    });

    $( "svg" ).ready( initIllustration );

});


function initIllustration() {

    $('title:contains("N2-1")').parent().hide();
    $('title:contains("N2-2")').parent().hide();
    $('title:contains("Performer")').parent().on('mouseenter', function () {
        $('title:contains("N2-1")').parent().fadeIn();
    });
    $('title:contains("Performer")').parent().on('mouseleave', function () {
        $('title:contains("N2-1")').parent().fadeOut();
    });

    $('title:contains("Motiver")').parent().on('mouseenter', function () {
        $('title:contains("N2-2")').parent().fadeIn();
    });
    $('title:contains("Motiver")').parent().on('mouseleave', function () {
        $('title:contains("N2-2")').parent().fadeOut();
    });
}