<script>
    let country = "de";
    let search = "";
    let data;

    const checkInput = () => {
        if (search !== "") {
            getData();
        } else {
            alert("Please enter something into search.")
        }
    }

    const getData = async () => {
        let res = await fetch(`/api/${country}-${search}.json`);
        data = await res.json();
        if (!res.ok) {
            switch (country) {
                case "de":
                    data.title = `No origin found with the search "${search}" in Germany.`;
                    break;
                case "ch":
                    data.title = `No origin found with the search "${search}" in Swiss.`;
                case "at":
                    data.title = `No origin found with the search "${search}" in Austria.`;
            }
        }
    }
</script>

<body>
    <form on:submit|preventDefault={checkInput}>
        <select name="country" id="country" bind:value={country}>
            <option value="de">de</option>
            <option value="ch">ch</option>
            <option value="at">at</option>
        </select>
        <input type="text" placeholder="search" bind:value={search}>
        <button type="submit">Search</button>
    </form>
    <div class="result">
        {#if data}
            <p>{data.title}</p>
        {/if}
    </div>
</body>
