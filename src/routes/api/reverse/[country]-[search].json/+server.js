import { error } from "@sveltejs/kit";

import { Germany, Austria } from "$lib/origins.js";

export function GET({ params }) {
	let result;
	if (
		params.country.toLowerCase() === "d" ||
		params.country.toLowerCase() === "de" ||
		params.country.toLowerCase() === "germany"
	) {
		let keys = Object.keys(Germany);
		for (let i = 0; i < keys.length; i++) {
			if (
				Germany[keys[i]].title.toLowerCase() === params.search.toLowerCase() ||
				Germany[keys[i]].title.toLowerCase().includes(params.search.toLowerCase())
			) {
				result = {
					...Germany[keys[i]],
					key: keys[i]
				};
			}
		}
	} else if (
		params.country.toLowerCase() === "a" ||
		params.country.toLowerCase() === "at" ||
		params.country.toLowerCase() === "austria"
	) {
		let keys = Object.keys(Austria);
		for (let i = 0; i < keys.length; i++) {
			if (
				Austria[keys[i]].title.toLowerCase() === params.search.toLowerCase() ||
				Austria[keys[i]].title.toLowerCase().includes(params.search.toLowerCase())
			) {
				result = {
					...Austria[keys[i]],
					key: keys[i]
				};
			}
		}
	} else {
		throw error(403, "No fitting origins found.");
	}

	if (result) {
		return new Response(
			JSON.stringify({ title: result.title, state: result.state, key: result.key })
		);
	} else {
		throw error(403, "No fitting origins found.");
	}
}
