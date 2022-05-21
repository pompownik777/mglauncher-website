<!DOCTYPE html>
<html lang="pl">

<head>
    <link rel="icon" type="image/x-icon" href="img\ico.ico">
    <meta charset=" UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MGLauncher</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style-mobile.css">
    <link rel="stylesheet" href="style-other.css">
    <link rel="stylesheet" href="style-all.css">
    <meta name="description" content="Launcher do paczki modów Minecraft - MGLauncher ">
    <meta name="keywords" content="launcher, mateuszpack, paczka modów, mglauncher">
    <script src="script.js"></script>
    <link rel="stylesheet" href="css/fontello.css">
    <script src="https://kit.fontawesome.com/702fe8cfd9.js" crossorigin="anonymous"></script>

</head>

<body>

    <div id="content">
        <center>
            <div id="logo">
                <img id="zdjecie" draggable="false"
                    src="https://cdn.discordapp.com/attachments/624642205361111063/972179381386637373/unknown.png"
                    alt="">
            </div>
        </center>


        <div id="header">
            <h1>MGLauncher</h1>
            <p style="margin-top: 50px;">Wejdź w kwadratowy świat, jakiego dotąd nie widziałeś.</p>
            <a href="#download-page">
                <div onclick="slide()" id="cube"></div>
            </a>


        </div>

        <div id="download-page">

            <div id="infos">

                <div id="items">

                    <img draggable="false" id="launcherimg" src="img/launcher2.png" alt="">
                    <a><button onclick="Download()" download="MGLauncher.zip" id="download-btn">Pobierz
                            MGLauncher</button>
                        <center>
                            <br>
                            <div id="version">Wersja Minecraft'a: 1.12.2</div>
                            <div id="versionl">Launcher: 2.0</div>
                        </center>


                    </a>

                    <div id="line"></div>
                    <div id="lista">

                        <h1 id="tytul">Lista modów</h1>

                        <ul>
                            <li>Aether</li>
                            <li>Atum</li>
                            <li>Backpacks</li>
                            <li>BetterAnimals</li>
                            <li>Biomes O' Plenty</li>
                            <li>BuildCraft</li>
                            <li>Camping Mod</li>
                            <li>Chocolate Quest</li>
                            <li>CloudBoots'y</li>
                            <li>DaVinci Vessels</li>
                            <li>DynamicSurroundings</li>
                            <li>DynamicTrees</li>
                            <li>Furniture Mod</li>
                            <li>Gravestone's</li>
                            <li>HWYLA</li>
                            <li>InventoryPets</li>
                            <li>InventoryTweaks</li>
                            <li>IronChest</li>
                            <li>IvToolKit</li>
                            <li>JEI</li>
                            <li>LuckyBlocks</li>
                            <li>OreSpawn</li>
                            <li>Rogulelike Dangeons</li>
                            <li>Ruins</li>
                            <li>Teleporters</li>
                            <li>StorageDrawers</li>
                            <li>TreeCapitator</li>
                            <li>Twilight forest</li>
                            <li>Xaeros Minimap</li>

                        </ul>


                    </div>
                </div>


            </div>



            <img id="dwn-img" style="width: 100%;"
                src="https://media.discordapp.net/attachments/624642205361111063/972178688009437204/eiXe2HaeDqfrXTrzsuQuFD.jpg?width=1251&height=663"
                alt="">

        </div>


    </div>
    <div style="color: white;">

        <center>
            <p style="line-height: 200px; user-select: none;">copyright © 2022 | all rights reserved</p>
            <p style="font-weight: bold; user-select: none; font-size: 3.25vw;">by
            <p id="dc" onclick="copyLink()"> <i class="fab fa-discord"></i> żyrafka na biegunach#1998</p>
            <p id="git" class="icon-github-squared" onclick="copyLink()">pompownik777</p>
        </center>
    </div>


</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    $(document).ready(function () {
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
</script>

</html>