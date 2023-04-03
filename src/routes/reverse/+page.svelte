<script>
	import NumberPlate from "../../lib/components/NumberPlate.svelte";

	let search = "";
	let errorSearch = "";
	let country = "D";
	let data;

	const getResult = async () => {
		if (search === "---" || search === "") {
			alert("Please enter something into the search input field.");
		} else {
			let res = await fetch(`/api/reverse/${country}-${search}.json`);
			if (res.ok) {
				data = await res.json();
				search = data.title;
			} else {
				errorSearch = search;
			}
		}
	};
</script>

<main>
	<h1>Reverse Search</h1>
	<form on:submit|preventDefault={getResult}>
		<input type="text" class="search" placeholder="Search" bind:value={search} /><br />
		<div class="submit">
			<select
				name="country"
				id="country"
				bind:value={country}
				on:input={() => {
					data = undefined;
				}}
			>
				<option value="D">Germany</option>
				<option value="A">Austria</option>
			</select>
			<button type="submit">Submit</button>
		</div>
	</form>
	{#if data && data.key !== undefined}
		<NumberPlate countryEditable={false} {country} code={data.key} />
	{:else if errorSearch}
		<p>No origin found with the search "{errorSearch}".</p>
	{/if}
</main>

<style>
	main {
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 2rem;
		margin: 1rem 20%;
	}

	.search {
		border-radius: 0.5rem;
		width: 80%;
		max-width: 300px;
		outline: none;
		text-align: center;
		border: 2px solid black;
		font-size: 1.5rem;
		transition: border 0.1s linear;
	}

	.submit {
		margin-top: 0.5rem;
		margin-bottom: 1.5rem;
	}

	select {
		outline: none;
		background-color: white;
		border: 2px solid white;
		padding: 0.2rem;
		font-size: 1.1rem;
		font-weight: bold;
		border-radius: 0.5rem;
		transition: border 0.1s linear;
	}

	select:hover,
	select:focus {
		border-color: black;
	}

	button {
		font-size: 1rem;
	}

	@media only screen and (max-width: 1100px) {
		main {
			margin: 1rem 5rem;
		}
	}

	@media only screen and (max-width: 850px) {
		main {
			margin: 1rem 0.5rem;
		}
	}
</style>
