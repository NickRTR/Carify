import { error } from "@sveltejs/kit";

import { Germany, Austria } from "$lib/origins.js";

export function GET({ params }) {
	let result;
	if (
		params.country.toLowerCase() === "d" ||
		params.country.toLowerCase() === "de" ||
		params.country.toLowerCase() === "germany"
	) {
		result = Germany[params.search.toUpperCase()];
	} else if (
		params.country.toLowerCase() === "a" ||
		params.country.toLowerCase() === "at" ||
		params.country.toLowerCase() === "austria"
	) {
		result = Austria[params.search.toUpperCase()];
	} else {
		throw error(403, "No fitting origins found.");
	}

	if (result) {
		return new Response(JSON.stringify({ title: result.title, state: result.state }));
	} else {
		throw error(403, "No fitting origins found.");
	}
}
