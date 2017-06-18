$(document).ready(function () {
    $( "svg" ).ready( initIllustration );
});


function initIllustration() {

    var animation_time = 250;

    var s = Snap("#illustration svg");


    $('#phrase1').css('opacity', 0);
    $('#phrase2').css('opacity', 0);
    $('#phrase3').css('opacity', 0);

    $('#motiver').css('opacity', 0);
    $('#unir').css('opacity', 0);
    $('#innover').css('opacity', 0);
    $('#adelante').css('opacity', 0);
    $('#evoluer').css('opacity', 0);

    $('#avatarflo').css('opacity', 0);
    $('#floris').css('opacity', 0);
    $('#manager').css('opacity', 0);

    $('#timeline').css('opacity', 0);
    $('#diplome').css('opacity', 0);
    $('#developper').css('opacity', 0);
    $('#chefprojet').css('opacity', 0);
    $('#changeleader').css('opacity', 0);
    $('#rsi').css('opacity', 0);


    var entreprise = s.select('#entreprise');
    //var entrepriseScale = 1.5;
    entreprise.transform( 'T300,0S1.5,1.5,450,300' );
    var avatarFlo = s.select('#avatarflo');

    var motiver = s.select('#motiver');
    motiver.transform('T200,100');
    var unir = s.select('#unir');
    unir.transform('T400,200');
    var innover = s.select('#innover');
    innover.transform('T380,250');
    var adelante = s.select('#adelante');
    adelante.transform('T320,450');
    var evoluer = s.select('#evoluer');
    evoluer.transform('T400,350');

    // on démarre
    $("#illustration svg").css('display', 'inline')

    let phrase1 = s.select('#phrase1');
    let phrase2 = s.select('#phrase2');
    let phrase3 = s.select('#phrase3');

    function animateTitle1() {
        phrase1.animate({
            opacity: 1
        }, animation_time*4, mina.easeout, animateTitle2);
    }

    function animateTitle2() {
        phrase2.animate({
            opacity: 1
        }, animation_time*4, mina.easeout,animateTitle3);
    }
    function animateTitle3() {
        phrase3.animate({
            opacity: 1
        }, animation_time*4, mina.easeout, animateEnterprise);
    }
    function animateEnterprise() {
        animateAvatarFlo();
        entreprise.animate({
            transform: 't120,0S1.5,1.5,450,300'
        }, animation_time*4, mina.easeout);
    };
    function animateAvatarFlo() {
        //$('#avatarflo').css('opacity', 1);
        avatarFlo.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        avatarFlo.animate({
            transform: 't170,0'
        }, animation_time*4, mina.easeout, animateMotiver);
    };
    function animateMotiver() {
        motiver.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        motiver.animate({
            transform: 'T200,-210'
        }, animation_time*4, mina.easein, animateUnir);
    }
    function animateUnir() {
        unir.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        unir.animate({
            transform: 'T400,-15'
        }, animation_time*4, mina.bounce, animateInnover);
    }
    function animateInnover() {
        innover.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        innover.animate({
            transform: 'T380,110'
        }, animation_time*4, mina.easein, animateAdelante);
    }
    function animateAdelante() {
        adelante.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        adelante.animate({
            transform: 'T320,235'
        }, animation_time*4, mina.easein, animateEvoluer);
    }
    function animateEvoluer() {
        evoluer.animate({
            opacity: 1
        }, animation_time*4, mina.easeout);
        evoluer.animate({
            transform: 'T400,180'
        }, animation_time*4, mina.easein);
    }
    animateTitle1();


    $('title:contains("Motiver")').parent().on('click', function () {
        $('#article-motiver').modal('show')
        ;
    });
    //$('title:contains("Motiver")').parent().on('mouseleave', function () {
        //$('title:contains("Motiver")').parent().fadeOut();
    //});

}