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
        let res = await fetch(`/api/${country}/${search}.json`);
        data = await res.json();
        loaded = true;
    }

    let loaded = false;
</script>

<body>
    <form>
        <select name="country" id="country" bind:value={country}>
            <option value="de">de</option>
            <option value="ch">ch</option>
            <option value="at">at</option>
        </select>
        <input type="text" placeholder="search" bind:value={search}>
        <button type="button" on:click={checkInput}>test</button>
    </form>
    <div class="result">
        <!-- {#await promise}
            <p>Loading...</p>
        {:then data} 
            <p>{data.title}</p>
        {:catch error}
            <p>{error}</p>
        {/await} -->
        {#if loaded}
            <p>{data.title}</p>
        {/if}
    </div>
</body>
