<!DOCTYPE html>
<html>

	<head>
		<title></title>
		<link href="CSS/header.css" rel="stylesheet"/>
		<link href="CSS/main.css" rel="stylesheet"/>
		<link href="CreationBillet.css" rel="stylesheet"/>
	</head>

	<body>
	<header id="header">
		<?php include("header.html"); ?>
	</header>

	<main id="main">
		<h3>Crée un billet</h3>

		<form method="POST">
			<div>
				<label for="titre">Titre</label>
				<input type="text" name="titre">
			</div>
			<label for="contenue">Contenue</label>
			<div>
				<textarea style="height: 116px; width: 214px;"></textarea>
			</div>
			<span>
			    <input type="button" name="addImage" value="Ajouter une image">
				<input type="button" name="DelImage" value="Supprimer une image">
			</span>
			<div>
				<input type="submit" name="submit">
			</div>
		</form>
	</main>

	<footer id="footer">
		<?php include("footer.html"); ?>
	</footer>
	
	</body>
</html>