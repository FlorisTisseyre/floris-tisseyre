$(document).ready(function () {

    var s = Snap("#illustration svg");
    console.log(s);
    var entreprise = s.select('#blablabla');
    console.log(entreprise);
    console.log(parseInt(entreprise.attr('width')) +10);
    var original_size = parseInt(entreprise.attr('width')) +10;
    var hover_size = 24;
    var animation_time = 250;
    //entreprise.transform( 'r50,40,20' );
    /*entreprise.animate({
        width: original_size,
        height: original_size
    }, animation_time*5, mina.bounce);*/
    $( "svg" ).ready( initIllustration );
});


function initIllustration() {

    $('title:contains("Motiver")').parent().on('click', function () {
        $('#motiver').modal('show')
        ;
    });
    $('title:contains("Motiver")').parent().on('mouseleave', function () {
        //$('title:contains("Motiver")').parent().fadeOut();
    });

}