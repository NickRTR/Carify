<script>
    let country = "Germany";
    let search = "HCH";
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
        <input type="text" placeholder="search" maxlength="3" bind:value={search}>
        <button type="submit">Search</button>
    </form>
    <div class="numberPlate">
        <span class="search"><p>{search}</p></span>
        <span class="initials"><p>AB</p></span>
        <span class="numbers"><p>1234</p></span>
    </div>
    <div class="result">
        {#if data}
            <p>Origin: {data.title}</p>
            <p>Region: {data.state}</p>
        {/if}
    </div>
</body>

<style>
    .numberPlate {
        background-image: url("/numberPlate.svg");
        background-size: contain;
        background-repeat: no-repeat;
        font-family: 'FE-Font';
        height: 104px;
        width: 500px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }
    
    .numberPlate * p {
        margin: 0;
        font-size: 2.5rem;
    }

    .search {
        margin-left: 50px;
    }

    .initials {
        margin: auto;
    }

    .numbers {
        margin-left: auto;
    }
</style>