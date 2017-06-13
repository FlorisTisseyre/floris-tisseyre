<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Semantic UI CDN</title>
    <link rel="stylesheet" href="semantic/dist/semantic.css"/>
    <link rel="stylesheet" href="src/assets/css/main.css"/>
    <script
            src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
    <script src="semantic/dist/semantic.js"></script>
    <script src="src/assets/js/dragend.js"></script>
    <script src="src/assets/js/main.js"></script>
</head>
<body>

<div id="pages">
    
    <div class="dragend-page" id="">
        <div><?php include __DIR__ . "/contact/contact.php"; ?></div>
    </div>

    
</div>
<script>
    $(function () {
        dragendPage = $("#pages").dragend();
    });
</script>
</body>
</html>

