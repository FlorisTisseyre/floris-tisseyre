$(document).ready(function () {
    $("svg").ready(initIllustration);
});


function initIllustration() {
    var animation_time = 50;
    var s = Snap("#illustration svg");

    $('#phrase1').css('opacity', 0);
    $('#phrase2').css('opacity', 0);
    $('#phrase3').css('opacity', 0);

    $('#motiver').css('opacity', 0);
    $('#unir').css('opacity', 0);
    $('#innover').css('opacity', 0);
    $('#evoluer').css('opacity', 0);

    $('#avatarflo').css('opacity', 0);
    $('#floris').css('opacity', 0);
    $('#manager').css('opacity', 0);

    /*
     $('#timeline').css('opacity', 0);
     $('#diplome').css('opacity', 0);
     $('#developpeur').css('opacity', 0);
     $('#chefprojet').css('opacity', 0);
     $('#changeleader').css('opacity', 0);
     $('#itmanager').css('opacity', 0);
     */

    var entreprise = s.select('#entreprise');
    //var entrepriseScale = 1.5;
    entreprise.transform('T300,0S1.5,1.5,450,300');
    var avatarFlo = s.select('#avatarflo');

    var motiver = s.select('#motiver');
    motiver.transform('T200,100');
    var unir = s.select('#unir');
    unir.transform('T400,200');
    var innover = s.select('#innover');
    innover.transform('T380,250');
    var evoluer = s.select('#evoluer');
    evoluer.transform('T400,350');

    // on démarre
    $("#illustration svg").css('display', 'inline');

    var phrase1 = s.select('#phrase1');
    var phrase2 = s.select('#phrase2');
    var phrase3 = s.select('#phrase3');

    function animateTitle1() {
        phrase1.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout, animateTitle2);
    }

    function animateTitle2() {
        phrase2.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout, animateTitle3);
    }

    function animateTitle3() {
        phrase3.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout, animateEnterprise);
    }

    function animateEnterprise() {
        animateAvatarFlo();
        entreprise.animate({
            transform: 't120,0S1.5,1.5,450,300'
        }, animation_time * 4, mina.easeout);
    };
    function animateAvatarFlo() {
        //$('#avatarflo').css('opacity', 1);
        avatarFlo.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout);
        avatarFlo.animate({
            transform: 't170,0'
        }, animation_time * 4, mina.easeout, animateMotiver);
    };
    function animateMotiver() {
        motiver.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout);
        motiver.animate({
            transform: 'T200,-210'
        }, animation_time * 4, mina.easein, animateUnir);
    };
    function animateUnir() {
        unir.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout);
        unir.animate({
            transform: 'T400,-15'
        }, animation_time * 4, mina.bounce, animateInnover);
    };
    function animateInnover() {
        innover.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout);
        innover.animate({
            transform: 'T380,110'
        }, animation_time * 4, mina.easein, animateEvoluer);
    };
    function animateEvoluer() {
        evoluer.animate({
            opacity: 1
        }, animation_time * 4, mina.easeout);
        evoluer.animate({
            transform: 'T430,130'
        }, animation_time * 4, mina.easein);
    };
    animateTitle1();

    function initArticle(topic) {
        var button = $('#' + topic);
        var article = $('#article-' + topic);

        button.on('click', function () {
            article.modal('show');
        });
        article.on('click', function () {
            article.modal('hide');
        });
        button.on('mouseenter', function () {
            if (button.css('opacity') != 0) {
                button.css('opacity', 0.7);
            }
        });
        button.on('mouseleave', function () {
            if (button.css('opacity') != 0) {
                button.css('opacity', 1);
            }
        });
    }

    initArticle('motiver');
    initArticle('unir');
    initArticle('innover');
    initArticle('evoluer');

    function initExperience(topic, words) {
        var jButton = $('#' + topic);
        var jExperience = $('#experience-' + topic);
        var jWords = $('#experience-' + topic + '-words');

        jButton.on('click', function () {
            jExperience.modal({
                blurring: true
            }).modal('show');
            jWords.jQCloud(words);
        });
        jExperience.on('click', function () {
            jExperience.modal('hide');
        });
        jButton.on('mouseenter', function () {
            if (jButton.css('opacity') != 0) {
                jButton.css('opacity', 0.7);
            }
        });
        jButton.on('mouseleave', function () {
            if (jButton.css('opacity') != 0) {
                jButton.css('opacity', 1);
            }
        });
    }

    initExperience('diplome',
        [
            {text: "Ingénieur", weight: 10},
            {text: "Généraliste", weight: 8},
            {text: "Informatique", weight: 5},
            {text: "Télécoms", weight: 2},
            {text: "Optique", weight: 2},
            {text: "Réseau", weight: 1},
            {text: "Electronique", weight: 1},
            {text: "Electrotechnique", weight: 1},
            {text: "Automatisme", weight: 1},
            {text: "Associations", weight: 1},
        ]
    );

    initExperience('developpeur',
        [
            {text: "Développement", weight: 10},
            {text: "Responsable technique", weight: 8},
            {text: "Chef de projet", weight: 8},
            {text: "Télécom", weight: 6},
            {text: "Internet", weight: 6},
            {text: "BSM", weight: 6},
            {text: "Militaire", weight: 6},
            {text: "C++", weight: 4},
            {text: "Orange", weight: 2},
            {text: "SFR", weight: 2},
            {text: "Neuf", weight: 2},
            {text: "Groupama", weight: 2},
            {text: "DCNS", weight: 2},
            {text: "Cycle en V", weight: 1},
        ]
    );

    initExperience('chefprojet',
        [
            {text: "Chef de projets", weight: 12},
            {text: "Architecte", weight: 10},
            {text: "Conception", weight: 9},
            {text: "Industrie", weight: 7},
            {text: "Sidérurgie", weight: 7},
            {text: "Refonte", weight: 6},
            {text: "Cycle en V", weight: 4},
            {text: "C++", weight: 3},
            {text: "C#", weight: 2},
            {text: "Oracle", weight: 2},
            {text: "Audit SST", weight: 1},
        ]
    );

    initExperience('changeleader',
        [
            {text: "Changement", weight: 12},
            {text: "Stratégie d’entreprise", weight: 10},
            {text: "WCM", weight: 7},
            {text: "Lean", weight: 6},
            {text: "Six Sigma", weight: 6},
            {text: "TPM", weight: 6},
            {text: "Animer", weight: 5},
            {text: "Instructeur", weight: 4},
            {text: "Théorie des contraintes", weight: 2},
            {text: "WhyWhy", weight: 1},
            {text: "CQQCOQP", weight: 1},
            {text: "Brainstorming", weight: 1},
        ]
    );

    initExperience('itmanager',
        [
            {text: "Motiver", weight: 24},
            {text: "Unir", weight: 20},
            {text: "Innover", weight: 20},
            {text: "Evoluer", weight: 20},
            {text: "Apprendre", weight: 20},
            {text: "Refondre", weight: 17},
            {text: "Agile", weight: 15},
            {text: "Scrum", weight: 15},
            {text: "Clean Code", weight: 14},
            {text: "Sprints", weight: 10},
            {text: "Rétro", weight: 10},
            {text: "DDD", weight: 8},
            {text: "TDD", weight: 7},
            {text: "Legacy", weight: 5},
            {text: "ERP", weight: 2},
            {text: "Brevets", weight: 1},
            {text: "Marques", weight: 1},
            {text: "Finance", weight: 1},
        ]
    );
}