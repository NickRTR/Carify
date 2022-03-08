<script>
    let country = "D";
    let search = "---";
    let data;

    const checkInput = () => {
        if (search === "---" || search === "") {
            alert("Please enter something into the search input field.")
        } else {
            getData();
        }
    }

    const changeCountry = () => {
        const countries = ["D", "CH", "A"];
        let index = countries.findIndex(i => i === country);
        if (index === countries.length - 1) {
            country = countries[0];
        } else {
            country = countries[index + 1];
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

<main>
    <form on:submit|preventDefault={checkInput}>
        <div class="numberPlate">
            <p class="country" on:click={changeCountry}>{country}</p>
            <div class="innerPlate">
                <input type="text" placeholder="search" maxlength="3" bind:value={search}>
                <p>AB</p>
                <p>1234</p>
            </div>
        </div>
        <button type="submit">Search</button>
    </form>
    <div class="result">
        {#if data}
            <p>Origin: {data.title}</p>
            <p>Region: {data.state}</p>
        {/if}
    </div>
</main>

<style>
    .numberPlate {
        margin-top: 1rem;
        background-image: url("/numberPlate.svg");
        background-size: contain;
        background-repeat: no-repeat;
        height: 104px;
        width: 500px;
        display: flex;
    }
    
    .country {
        cursor: pointer;
        width: 50px;
        font-size: 30px;
        padding-top: 60px;
        margin: 0;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .innerPlate {
        font-family: 'FE-Font';
        height: 104px;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    .numberPlate div p {
        margin: 0;
        font-size: 40px;
    }

    input[type=text] {
        font-family: 'FE-Font';
        font-size: 40px;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        width: 140px;      
        outline: none;
        text-align: center;
    }

    button {
        margin-top: .5rem;
        border-radius: 1rem;
        border: none;
        padding: .5rem 1rem;
        background-color: red;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>