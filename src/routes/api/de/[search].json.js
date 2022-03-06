import { de } from "$lib/origins.js";

export async function get({ params }) {
    const result = de[(params.search).toUpperCase()];

    if (result) {
        return {
            status: 200,
            body: result
        }
    }

    return {
        status: 404,
        body: `No origin found with the search "${params.search}" in Germany.`
    }
}