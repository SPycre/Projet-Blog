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
		<section id="central">
			<section class="section-box" id="form-card">
					<h3>Crée un billet</h3>

					<form id="add-ticket-form">
						<div>
							<label for="title">Titre</label>
							<input class="input" type="text" name="title">
						</div>
						<div>
							<label for="content">Contenu</label>
							<textarea class="input" maxlength="5000" name="content" rows="7" cols="30"></textarea>
						</div>
						<span id="add-image-span">
							<input type="file" name="addImage" value="Ajouter une image">
							<button id="DelImage">Supprimer une image</button>
						</span>
						<div>
							<input type="submit" name="submit">
						</div>
					</form>
			</section>
		</section>
	</main>

	<footer id="footer">
		<?php include("footer.html"); ?>
	</footer>
	
	</body>
</html>