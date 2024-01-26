<script>
	// @ts-ignore
	import { page } from "$app/stores";

	const nav = [
		{ title: "Home", path: "/" },
		{ title: "Reverse", path: "/reverse" },
		{ title: "API", path: "/api" }
	];
</script>

<svelte:head>
	<title>Carify</title>
</svelte:head>

<body>
	<nav>
		<a href="/" class="title">Carify</a>
		<div class="links">
			{#each nav as link}
				<a
					href={link.path}
					class:active={$page.url.pathname === link.path}
					sveltekit:prefetch
					title={link.title}>{link.title}</a
				>
			{/each}
		</div>
	</nav>
	<slot />
	<footer>
		<p>©{new Date().getFullYear()}, Nick Reutlinger</p>
	</footer>
</body>

<style>
	@font-face {
		font-family: "FE-Font";
		src: url("/fonts/FE.otf") format("truetype");
		font-display: swap;
	}

	@font-face {
		font-family: "din1451";
		src: url("/fonts/din1451.ttf") format("truetype");
		font-display: swap;
	}

	* {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	body {
		background-image: url("/background.jpg");
		background-size: cover;
		margin: 0;
		text-align: center;
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}

	nav {
		background-color: black;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-size: 1.8rem;
	}

	nav a {
		color: white;
		margin: 0;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		text-decoration: none;
		margin-left: 0.5rem;
	}

	nav a:hover {
		color: red;
	}

	.active {
		color: red;
	}

	footer {
		padding: 0.5rem 0;
		background-color: black;
		color: white;
	}

	footer p {
		margin: 0;
	}

	:global(button) {
		outline: none;
		cursor: pointer;
		margin-left: 0.2rem;
		border-radius: 1rem;
		border: none;
		padding: 0.4rem 1rem;
		background-color: white;
		color: black;
		font-weight: bold;
		border: 3px solid red;
		transition: all 0.1s linear;
	}

	:global(button:hover, button:focus) {
		background-color: red;
		color: white;
	}

	@media only screen and (max-width: 400px) {
		.title {
			font-size: 1.5rem;
		}

		nav a {
			font-size: 1.2rem;
		}
	}
</style>
