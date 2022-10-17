<!DOCTYPE html>
<html>
    <head>

        <title> Création de billet </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="Client/billet.js" defer></script>
        <script src="Client/connect.js" defer></script>

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
                
                <section id="billet">

                    <article id="billet-article">
                        <div id="text-billet">
                            <div id="header-billet">
                                <span id="titre-billet">Titre</span>
                                <img src="Images/edit.png" id="edit-billet">
                            </div>
                            <span id="contenu-billet">Content</span>
                        </div>

                        <div id="detail-billet">
                            <!-- Bouton options pour administration -->
                        </div>

                    </article>
                </section>

                <template id="template-comment">
                    <article class="comment-article">
                        <div class="text-comment">
                            <span class="pseudo-comment">Pseudo</span>
                            <span class="contenu-comment">Content</span>
                        </div>
                        <div class="detail-comment">
                            <span class="date-comment">Date</span>
                            <img src="Images/trash_bin.png" class="trash-comment">
                        </div>
                    </article>
                </template>

                <span id="subtitle">Commentaires</span>

                <section id = "list-comment">
                    /!\ Unable to load content /!\
                </section>

                <section id="page-selector">
                        <button class="page-select first">|<</button>
                        <button class="page-select previous"><</button>
                        <span id="page-number">X</span>
                        <button class="page-select next">></button>
                        <button class="page-select last">>|</button>
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
                                <textarea id="comment" input="text" name="comment" rows="1" placeholder="Votre commentaire" required></textarea>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </section>

            </section>

        </main>


        <footer>
            <?php include("footer.html"); ?>
        </footer>
    </body>
</html>