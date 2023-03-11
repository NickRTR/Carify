import { Germany, Austria } from "$lib/origins.js";

export function get({ params }) {
    let result;
    if (params.country.toLowerCase() === "d" || params.country.toLowerCase() === "de" || params.country.toLowerCase() === "germany") {
        let keys = Object.keys(Germany);
        for (let i = 0; i < keys.length; i++) {
            if (Germany[keys[i]].title.toLowerCase() === params.search.toLowerCase() || Germany[keys[i]].title.toLowerCase().includes(params.search.toLowerCase())) {
                result = {
                    ...Germany[keys[i]],
                    key: keys[i],
                };
            }
        }
    } else if (params.country.toLowerCase() === "a" || params.country.toLowerCase() === "at" || params.country.toLowerCase() === "austria") {
        let keys = Object.keys(Austria);
        for (let i = 0; i < keys.length; i++) {
            if (Austria[keys[i]].title.toLowerCase() === params.search.toLowerCase() || Austria[keys[i]].title.toLowerCase().includes(params.search.toLowerCase())) {
                result = {
                    ...Austria[keys[i]],
                    key: keys[i],
                };
            }
        }
    } else {
        return {
            status: 404,
        };
    }

    if (result) {
        return {
            status: 200,
            body: result,
        };
    } else {
        return {
            status: 404,
        };
    }
}
