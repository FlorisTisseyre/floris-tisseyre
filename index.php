<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="keywords"
          content="floris, tisseyre, tisseire, tysseire, cv, curriculum, vitae, parcours, profil, perso, agile, manager, management, reseau, informatique, développement">
    <title>CV Floris Tisseyre</title>
    <link rel="stylesheet" href="semantic/dist/semantic.css"/>
    <link rel="stylesheet" href="src/assets/css/main.css"/>
    <link rel="stylesheet" type="text/css" href="src/assets/css/print.css" media="print" />
    <link rel="stylesheet" href="node_modules/jqcloud2/dist/jqcloud.min.css"/>
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <script src="semantic/dist/semantic.js"></script>
    <script src="node_modules/snapsvg/dist/snap.svg-min.js"></script>
    <script src="node_modules/jqcloud2/dist/jqcloud.min.js"></script>
    <script src="src/assets/js/main.js"></script>
    
<?php
    if(isset($_GET['lang']) && $_GET['lang'] === 'en') {
?>
    <script src="src/assets/js/translation.js"></script>
<?php
    }
?>
</head>
<body>
<?php include_once __DIR__ . '/src/analyticstracking.php' ?>

<?php include __DIR__ . '/src/mainContent.php'; ?>

</body>
</html>
