<svelte:head>
    <title>Carify</title>
</svelte:head>

<body>
    <nav>
        <a href="/"><h1>Carify</h1></a>
    </nav>
    <slot></slot>
</body>

<style>
    @font-face {
        font-family: 'FE-Font';
        src: url("/fonts/FE-FONT.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: 'din1451';
        src: url("/fonts/din1451.ttf") format("truetype");
        font-display: swap;
    }

    nav {
        background-color: black;
        padding: 1rem;
    }

    nav h1 {
        color: white;
        margin: 0;
        font-size: 1.8rem;
        font-family: 'Segoe UI', Tahoma;
        cursor: pointer;
    }

    nav a {
        text-decoration: none;
    }

    body {
        margin: 0;
        text-align: center;
    }
</style>