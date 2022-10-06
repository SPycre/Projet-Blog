<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href="CSS/header.css" rel="stylesheet"/>
        <link href="CSS/home.css" rel="stylesheet"/>
        <link href="CSS/main.css" rel="stylesheet"/>
        <link href="CSS/footer.css" rel="stylesheet"/>
    </head>
    <body>
        <header>
            <?php include("header.html"); ?>
        </header>
        <main>
            <section id="central">
                <template id="template-billet">
                    <article class="billet">
                        <div class="text-billet">
                            <span class="titre-billet">Titre</span>
                            <span class="contenu-billet">Content</span>
                        </div>
                        <div class="detail-billet">
                            <span class="comment-count">X Commentaires</span>
                        </div>
                    </article>
                </template>
                <section id="liste-billets">
                    <?php
                    for ($i = 0;$i<10;$i++) {
                    echo '<article class="billet">
                        <div class="text-billet">
                            <span class="titre-billet">Titre</span>
                            <span class="contenu-billet">Content</span>
                        </div>
                        <div class="detail-billet">
                            <span class="comment-count">X Commentaires</span>
                        </div>
                    </article>';
                    }
                    ?>
                </section>
                <section id="page-selector">
                        <button>|<</button>
                        <button><</button>
                        <span id="page-number">X</span>
                        <button>></button>
                        <button>>|</button>
                </section>
            </section>
        </main>
        <footer>
            <?php include("footer.html"); ?>
        </footer>
    </body>
</html>