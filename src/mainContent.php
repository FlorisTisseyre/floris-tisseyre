<div class="ui grid">
    <div class="two wide column">
    </div>
    <div class="twelve wide column">
            <div id="mainContent">
            <?php
            if (!isset($_GET['lang'])) {
                include __DIR__ . '/launcher.php';
            } else {
                include __DIR__ . '/resume.php';
            }
            ?>
            </div>
    </div>
    <div class="column">
    </div>
</div>
