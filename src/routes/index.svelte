<script>
    let country = "Germany";
    let search = "";
    let data;

    const checkInput = () => {
        if (search !== "") {
            getData();
        } else {
            alert("Please enter something into the search input field.")
        }
    }

    const getData = async () => {
        let res = await fetch(`/api/${country}-${search}.json`);
        data = await res.json();
        console.log(data);
        if (!res.ok) {
            data.title = `No origin found with the search "${search}" in ${country}.`;
            data.state = `No region found with the search "${search}" in ${country}.`;
        }
    }
</script>

<body>
    <form on:submit|preventDefault={checkInput}>
        <select name="country" id="country" bind:value={country}>
            <option value="Germany">Germany</option>
            <option value="Swiss">Swiss</option>
            <option value="Austria">Austria</option>
        </select>
        <input type="text" placeholder="search" bind:value={search}>
        <button type="submit">Search</button>
    </form>
    <div class="result">
        {#if data}
            <p>Origin: {data.title}</p>
            <p>Region: {data.state}</p>
        {/if}
    </div>
</body>
