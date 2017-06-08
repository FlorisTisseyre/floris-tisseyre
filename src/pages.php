<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Semantic UI CDN</title>
    <link rel="stylesheet" href="semantic/out/semantic.min.css"/>
    <link rel="stylesheet" href="src/assets/css/main.css"/>
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <script src="semantic/out/semantic.min.js"></script>
    <script src="src/assets/js/dragend.js"></script>
    <script src="src/assets/js/main.js"></script>
</head>
<body>
<img src="src/assets/pictos/left-arrow.svg" class="arrow left" id="arrowLeft">
<img src="src/assets/pictos/right-arrow.svg" class="arrow right">
<div id="pages">
    <div class="dragend-page">
		<div><?php include __DIR__ . "/contact/contact.php"; ?></div>
    </div>

    <div class="dragend-page">
        <div>
		<?php include __DIR__ . "/questions/questions.php"; ?>
        </div>
    </div>

    <div class="dragend-page">
        <div>
		<?php include __DIR__ . "/timeline/timeline.php"; ?>
        </div>
    </div>
</div>
<script>
    $(function () {
        $("#pages").dragend()
    });
</script>
</body>
</html>

