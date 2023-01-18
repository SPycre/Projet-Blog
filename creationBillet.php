<!DOCTYPE html>
<html>

	<head>
		<title>Projet de Blog</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<link href="CSS/header.css" rel="stylesheet"/>
		<link href="CSS/main.css" rel="stylesheet"/>
		<link href="CSS/creationBillet.css" rel="stylesheet"/>
		<link href="CSS/footer.css" rel="stylesheet"/>
	</head>

	<body>
	<header id="header">
		<?php include("header.html"); ?>
	</header>

	<main id="main">
	<script type="module" src="Client/creationBillet.js" defer></script>
			<section id="form-card">
					<h3>Création d'un billet</h3>

					<form id="add-ticket-form">
						<div class="form-div">
							<label for="title">Titre</label>
							<input class="input" type="text" name="title">
						</div>
						<div id="text-area-holder">
							<div class="form-div">
								<label for="content">Contenu</label>
								<textarea id="edit-text" class="input" maxlength="5000" name="content" rows="7" cols="30"></textarea>
							</div>
							<div class="form-div" id="preview">
							</div>
						</div>

						<span id="add-image-span">
							<input type="file" name="addImage" value="Ajouter une image">
						</span>

						<div id="button-del">
						<button id="DelImage">Supprimer l'image</button>
						</div>

						
						<div>
							<input type="submit" name="submit">
						</div>
					</form>
			</section>

			

	</main>

	<footer id="footer">
		<?php include("footer.html"); ?>
	</footer>
	
	</body>
</html>
