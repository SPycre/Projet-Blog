<!DOCTYPE html>
<html lang="en">
<head>
	<title>Log in</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">

	<script type="module" src="Client/login.js" defer></script>
</head>
<body>
	<main>
		<section id="central">
			<div id="login-box">
				<form id="login-form">

						<span id="login-form-title">
							Log in
						</span>

						<div class="input-div">
							<input type="text" name="username" placeholder="Username">
							<span class="input-focus" data-placeholder="&#xf207;"></span>
						</div>

						<div class="input-div">
							<input type="password" name="password" placeholder="Password">
							<span class="input-focus" data-placeholder="&#xf191;"></span>
						</div>

						<div id="div-button">
							<button id="login-button">
								Login
							</button>
						</div>

				</form>
			</div>
		</section>
	</main>
</body>
</html>