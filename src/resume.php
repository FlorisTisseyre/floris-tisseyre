
<?php
if(isset($_GET['lang']) && $_GET['lang'] === 'en') {
    $lang = 'en';
} else {
    $lang = 'fr';
}
?>

<div class="container" id="container">
    <div id="illustration"><?php include __DIR__ . '/assets/pictos/illustration.svg'; ?></div>
</div>

<?php include __DIR__ . "/articles/$lang/motiver.php"; ?>
<?php include __DIR__ . "/articles/$lang/unir.php"; ?>
<?php include __DIR__ . "/articles/$lang/innover.php"; ?>
<?php include __DIR__ . "/articles/$lang/evoluer.php"; ?>
<?php include __DIR__ . "/experiences/$lang/diplome.php"; ?>
<?php include __DIR__ . "/experiences/$lang/developpeur.php"; ?>
<?php include __DIR__ . "/experiences/$lang/chefprojet.php"; ?>
<?php include __DIR__ . "/experiences/$lang/changeleader.php"; ?>
<?php include __DIR__ . "/experiences/$lang/itmanager.php"; ?>

<div class="ui massive blue message" id="web-link">
    <?php
    echo ($lang === "en") ? "More info on www.floris-tisseyre.fr" : "Plus d'infos sur www.floris-tisseyre.fr";
    ?>
</div>