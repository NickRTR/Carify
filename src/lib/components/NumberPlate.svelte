<script>
	import { selectTextOnFocus } from "$lib/selectText.js";
	import { createEventDispatcher } from "svelte";

	export let editable;
	export let country;
	export let code;

	const dispatch = createEventDispatcher();

	function changeCountry() {
		if (editable) {
			dispatch("changeCountry", {
				text: country
			});
		}
	}
</script>

<div class="numberPlate">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<p class="country" class:editable on:click={changeCountry}>{country}</p>
	<div class="innerPlate">
		<input
			class:editable
			disabled={!editable}
			type="text"
			style="width: 3.5ch;"
			placeholder="---"
			maxlength="3"
			bind:value={code}
			use:selectTextOnFocus
			on:input={() => {
				code = code.replace(/[^A-Za-z0-9\u00c4\u00e4\u00d6\u00d6\u00f6\u00dc\u00fc\s!?]/g, "");
			}}
		/>
		<input
			type="text"
			style="width: 2.5ch;"
			placeholder="AA"
			maxlength="2"
			value="AA"
			use:selectTextOnFocus
			on:input={(event) => {
				// @ts-ignore
				event.target.value = event.target.value.replace(/[^A-Za-z!?]/g, "");
			}}
		/>
		<input
			type="text"
			style="width: 4.5ch;"
			placeholder="1234"
			maxlength="4"
			value="1234"
			use:selectTextOnFocus
			on:input={(event) => {
				// @ts-ignore
				event.target.value = event.target.value.replace(/[^\d.-]/g, "");
			}}
		/>
	</div>
</div>

<style>
	.numberPlate {
		margin: 0 auto;
		margin-top: 1rem;
		background-image: url("/numberPlate.svg");
		background-size: contain;
		background-repeat: no-repeat;
		display: flex;
		width: 620px;
		height: 127px;
		margin-bottom: 1rem;
	}

	.numberPlate * {
		margin: 0;
		font-size: 5rem;
		font-family: "FE-Font";
		text-transform: uppercase;
	}

	.innerPlate {
		width: 100%;
		display: grid;
		grid-template-columns: 3.5fr 2fr 4.3fr;
	}

	.country {
		padding-left: 0.05rem;
		width: 64px;
		padding-top: 4.8rem;
		margin: 0;
		color: white;
		font-size: 2rem !important;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}

	.editable {
		cursor: pointer;
	}

	input[type="text"] {
		border-radius: 0.5rem;
		border: 2px solid gray;
		background-color: rgba(255, 255, 255, 0);
		padding: 0 10px;
		height: 60%;
		outline: none;
		text-align: center;
		margin: auto;
	}

	input[type="text"]:focus,
	input[type="text"]:hover {
		border: 2px solid black;
	}

	input:disabled {
		color: black;
	}

	@media only screen and (max-width: 700px) {
		.numberPlate {
			height: 101.6px;
			width: 496px;
		}

		.numberPlate * {
			font-size: 3rem;
		}

		.country {
			padding-top: 3.8rem;
			font-size: 1.5rem !important;
			width: 50px;
		}
	}

	@media only screen and (max-width: 550px) {
		.numberPlate {
			height: 63.5px;
			width: 310px;
		}

		.numberPlate * {
			font-size: 2rem;
		}

		.country {
			padding-top: 2.3rem;
			font-size: 1rem !important;
			width: 30px;
		}

		input[type="text"] {
			padding: 0 5px;
		}
	}

	@media only screen and (max-width: 350px) {
		.numberPlate {
			height: 50.8px;
			width: 240px;
		}

		.numberPlate * {
			font-size: 1.5rem;
		}

		.country {
			padding-top: 1.8rem;
			font-size: 0.8rem !important;
			width: 25px;
		}
	}
</style>
