import { Germany, Swiss, Austria } from "$lib/origins.js";

export function get({ params }) {
    let result;
    switch (params.country) {
        case "Germany":
            result = Germany[(params.search).toUpperCase()];
            break;
        case "Swiss":
            result = Swiss[(params.search).toUpperCase()];
            break;
        case "Austria":
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