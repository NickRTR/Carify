<svelte:head>
    <title>Carify</title>
</svelte:head>

<body>
    <main><slot></slot></main>
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
        margin: 0;
        display: flex;
        justify-content: center;
        text-align: center;
    }
</style>