<svelte:head>
    <title>Carify</title>
</svelte:head>

<body>
    <nav>
        <a href="/">Carify</a>
    </nav>
    <slot></slot>
    <footer>
        <p>©2022, Nick Reutlinger</p>
    </footer>
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
    
    body {
        font-family: 'Segoe UI', Tahoma;
        margin: 0;
        text-align: center;
    }

    nav {
        background-color: black;
        padding: 1rem;
    }

    nav a {
        color: white;
        margin: 0;
        font-size: 1.8rem;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }

    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        padding: .5rem;
    }

    footer p {
        margin: 0;
    }
</style>