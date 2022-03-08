import { Germany, Swiss, Austria } from "$lib/origins.js";

// TODO: Add postal code

export function get({ params }) {
    let result;
    switch (params.country) {
        case "D":
            result = Germany[(params.search).toUpperCase()];
            break;
        case "CH":
            result = Swiss[(params.search).toUpperCase()];
            break;
        case "A":
            result = Austria[(params.search).toUpperCase()];
            break;
        default:
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