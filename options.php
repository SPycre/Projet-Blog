<!DOCTYPE html>
<html>
    <head>
        <title>Projet de Blog</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="module" src="Client/options.js" defer></script>

        <link href="CSS/header.css" rel="stylesheet"/>
        <link href="CSS/options.css" rel="stylesheet"/>
        <link href="CSS/main.css" rel="stylesheet"/>
        <link href="CSS/footer.css" rel="stylesheet"/>
    </head>
    <body>
        <header>
            <?php include("header.html"); ?>
        </header>
        <main>
            <section id="central">
                <section id="settings-form">
                    <article id="settings-article">
                        <form id="form">
                            <div>
                                <label for="ticketsPerPage">Billets par page :</label>
                                <select name='ticketsPerPage'>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div>
                                <label for="commentsPerPage">Commentaires par page :</label>
                                <select name='commentsPerPage'>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select> 
                            </div>
                            <button type='submit'>Sauvegarder</button>
                        </form>
                    </article> 
                </section>
            </section>
        </main>
        <footer>
            <?php include("footer.html"); ?>
        </footer>
    </body>
</html>