$(document).ready(function () {
    $('.arrow.left').on("click", function () {
        $("#pages").dragend("right");
    });
    $('.arrow.right').on("click", function () {
        $("#pages").dragend("left");
    });
});