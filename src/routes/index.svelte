<script>
    let country = "D";
    let search = "";
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
    }
</script>

<main>
    <form on:submit|preventDefault={checkInput}>
        <div class="numberPlate">
            <p class="country" on:click={changeCountry}>{country}</p>
            <div class="innerPlate">
                <input type="text" placeholder="---" maxlength="3" bind:value={search}>
                <p>AB</p>
                <p>1234</p>
            </div>
        </div>
        <button type="submit">Search</button>
    </form>
    <div class="result">
        {#if data}
            {#if data.title !== undefined}
                <p>Origin: {data.title}</p>
                <p>State: {data.state}</p>
            {:else}
                <p>No origin found with the search "{search.toUpperCase()}".</p>
            {/if}
        {/if}
    </div>
</main>

<style>
    .numberPlate {
        margin-top: 40vh;
        background-image: url("/numberPlate.svg");
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
    }
    
    .numberPlate * {
        margin: 0;
        font-size: 2.5rem;
        font-family: 'FE-Font';
    }
    
    .innerPlate {
        height: 90px;
        align-items: center;
        display: grid;
        grid-template-columns: 3fr 2fr 3fr;
        width: 100%;
    }

    .country {
        cursor: pointer;
        width: 50px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1.5rem !important;
        padding-top: 3.5rem;
        margin: 0;
        color: white;
    }
    
    input[type=text] {
        border-radius: .5rem;
        border: 2px solid gray;
        background-color: rgba(255, 255, 255, 0);
        width: 140px;     
        height: 70px; 
        outline: none;
        text-align: center;
        margin: auto;
    }

    input[type=text]:focus, input[type=text]:hover {
        border: 2px solid black;
    } 

    button {
        margin-top: 1rem;
        border-radius: 1rem;
        border: none;
        padding: .5rem 1rem;
        background-color: red;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        .numberPlate {
            height: 90px;
            margin-bottom: 0;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        .innerPlate {
            height: 70px;
        }

        .country {
            padding-top: 2.5rem;
            font-size: 1.3rem !important;
            width: 38px;
        }

        input[type=text] {
            border-radius: .5rem;
            border: 2px solid gray;
            background-color: rgba(255, 255, 255, 0);
            width: 90%;  
            margin: auto;  
            height: 50px; 
        }
    }
</style>