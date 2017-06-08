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
    <script>
        $(document).ready(function () {
            //$('.demo.menu .item').tab();
            //$('.ui.accordion').accordion();
        });

    </script>
</head>
<body>

<div class="row">

    <div class="ui three item stackable tabs demo menu">
        <a class="active item" data-tab="contact">Contact</a>
        <a class="item" data-tab="questions">Questions</a>
        <a class="item" data-tab="timeline">Timeline</a>
    </div>

    <div class="ui active tab segment dragend-page" data-tab="contact">
		<?php include __DIR__ . "/contact/contact.php"; ?>
    </div>

    <div class="ui tab segment dragend-page" data-tab="questions">
		<?php include __DIR__ . "/questions/questions.php"; ?>
    </div>

    <div class="ui tab segment dragend-page" data-tab="timeline">
		<?php include __DIR__ . "/timeline/timeline.php"; ?>
    </div>
</div>
</body>
</html>

