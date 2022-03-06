import { de, ch, at } from "$lib/origins.js";

export function get({ params }) {
    let result;
    switch (params.country) {
        case "de":
            result = de[(params.search).toUpperCase()];
            break;
        case "ch":
            result = ch[(params.search).toUpperCase()];
            break;
        case "at":
            result = at[(params.search).toUpperCase()];
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