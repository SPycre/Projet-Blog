<!DOCTYPE html>
<html>
    <head>

        <title> Création de billet </title>
        <link href="CSS/header.css" rel="stylesheet"/>
        <link href="CSS/main.css" rel="stylesheet"/>
        <link href="CSS/footer.css" rel="stylesheet"/>
        <link href="CSS/billet.css" rel="stylesheet"/>

    </head>
    <body>
        <header>
            <?php include("header.html"); ?>
        </header>


        <main>

        <section id="central">
            
            <section id = "Billet">

            <article id="billet-article">
                <div id="text-billet">
                    <span id="titre-billet">Titre</span>
                    <span id="contenu-billet">Content</span>
                </div>

                <div id="detail-billet">
                    <!-- Bouton options pour administration -->
                </div>

            </article>
        </section>


            <section id = "List-comment">

            <article id="comment-article">
                <div id="text-comment">
                    <span id="pseudo-comment">Pseudo</span>
                    <span id="contenu-comment">Content</span>

                </div>
                <article class="comment">

                </article>
            </section>

            <section id="add-comment">
                <form id="form-commentaire">
                    <div>
                        <div id ="comment-pseudo">
                            <label for="pseudo">Pseudo</label>
                            <input type="text" id="pseudo" name="pseudo" placeholder="Votre pseudo" required>
                        </div>
                        <div id="comment-content">
                            <label for="commentaire">Commentaire</label>
                            <textarea id="commentaire" input="text" name="commentaire" rows="1" placeholder="Votre commentaire" required></textarea>
                        </div>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </section>

        </section>

        </main>


        <footer>
            <?php include("footer.html"); ?>
        </footer>
    </body>
</html>