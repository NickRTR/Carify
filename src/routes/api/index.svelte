<main>
    <div class="api">
        <h2>API</h2>

        <h3>API URL:</h3>
        <p style="text-decoration: underline;">https://carify.vercel.app/api/(country)-(search).json</p>

        <ul>
            <li>country: [d,a,de,at,germany,austria] (not case sensitive)</li>
            <li>search: A-Z; a-z; 1-9</li>
        </ul>

        <h3>Example:</h3>

        <a href="https://carify.vercel.app/api/D-bl.json" target=__blank>URL: https://carify.vercel.app/api/D-bl.json</a>

        <p>Output: {"{"}"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg"{"}"}
    </div>
    <hr>
    <div class="reverseApi">
        <h2>Reverse API</h2>

        <h3>API URL:</h3>
        <p style="text-decoration: underline;">https://carify.vercel.app/api/reverse/(country)-(search).json</p>

        <ul>
            <li>country: [d,a,de,at,germany,austria] (not case sensitive)</li>
        </ul>

        <h3>Example:</h3>

        <a href="https://carify.vercel.app/api/reverse/d-Balingen (Zollernalbkreis)" target=__blank>URL: https://carify.vercel.app/api/reverse/d-Balingen (Zollernalbkreis)</a>

        <p>Output: {"{"}"title":"Balingen (Zollernalbkreis)","state":"Baden-Württemberg","key":"BL"{"}"}
    </div>
</main>

<style>
    h2 {
        text-align: center;
    }

    main {
        text-align: left;
        margin-left: 1rem;
        max-width: 650px;
        margin: auto;
    }

    a {
        color: black;
    }
</style>