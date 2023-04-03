<main>
	<div class="container">
		<div class="api">
			<h2>API</h2>

			<h3>API URL:</h3>
			<p style="text-decoration: underline;">
				https://carify.vercel.app/api/(country)-(search).json
			</p>

			<ul>
				<li>country: [d,a,de,at,germany,austria] (not case sensitive)</li>
				<li>search: A-Z; a-z; 1-9</li>
			</ul>

			<h3>Example:</h3>

			<a href="https://carify.vercel.app/api/D-bl.json" target="__blank"
				>URL: https://carify.vercel.app/api/D-bl.json</a
			>

			<p>Output: {"{"}"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg"{"}"}</p>
		</div>
		<hr />
		<div class="reverseApi">
			<h2>Reverse API</h2>

			<h3>API URL:</h3>
			<p style="text-decoration: underline;">
				https://carify.vercel.app/api/reverse/(country)-(search).json
			</p>

			<ul>
				<li>country: [d,a,de,at,germany,austria] (not case sensitive)</li>
			</ul>

			<h3>Example:</h3>

			<a href="https://carify.vercel.app/api/reverse/d-Balingen (Zollernalbkreis)" target="__blank"
				>URL: https://carify.vercel.app/api/reverse/d-Balingen (Zollernalbkreis)</a
			>

			<p>
				Output: {"{"}"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg","key":"BL"{"}"}
			</p>
		</div>
	</div>
</main>

<style>
	main {
		background-color: white;
		margin: 1rem;
		border-radius: 2rem;
		height: 100%;
		text-align: left;
	}

	h2 {
		text-align: center;
	}

	.container {
		padding: 0 0.5rem;
		max-width: 650px;
		margin: auto;
		word-break: break-word;
	}

	a {
		color: black;
	}

	@media only screen and (max-width: 500px) {
		main {
			margin: 0.5rem;
		}
	}
</style>
