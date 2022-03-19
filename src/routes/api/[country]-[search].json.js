import { Germany, Austria } from "$lib/origins.js";

export function get({ params }) {
    let result;
    if (params.country.toLowerCase() === "d" || params.country.toLowerCase() === "de" || params.country.toLowerCase() === "germany") {
        result = Germany[(params.search).toUpperCase()];
    } else if (params.country.toLowerCase() === "a" || params.country.toLowerCase() === "at" || params.country.toLowerCase() === "austria") {
        result = Austria[(params.search).toUpperCase()];
    } else {
        return {
            status: 404,
        }
    }

    if (result) {
        return {
            status: 200,
            body: result
        }
    } else {
        return {
            status: 404,
        }
    }
}