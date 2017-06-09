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
});