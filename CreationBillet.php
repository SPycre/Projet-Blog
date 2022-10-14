<!DOCTYPE html>
<html>

	<head>
		<title></title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="Client/connect.js" defer></script>

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
		<section id="central">
			<section id="form-card">
				<div id="center-form">
					<h3>Crée un billet</h3>

					<form method="POST">
						<div>
							<label for="ticket-title">Titre</label>
							<input type="text" name="ticket-title">
						</div>
						<div>
							<label for="ticket-content">Contenu</label>
							<textarea name="ticket-content" rows="7" cols="30"></textarea>
						</div>
						<span>
							<input type="button" name="addImage" value="Ajouter une image">
							<input type="button" name="DelImage" value="Supprimer une image">
						</span>
						<div>
							<input type="submit" name="submit">
						</div>
					</form>
				</div>
			</section>
		</section>
	</main>

	<footer id="footer">
		<?php include("footer.html"); ?>
	</footer>
	
	</body>
</html>