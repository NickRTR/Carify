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
        width: 620px;
        height: 127px;
    }
    
    .numberPlate * {
        margin: 0;
        font-size: 4rem;
        font-family: 'FE-Font';
    }
    
    .innerPlate {
        width: 100%;
        align-items: center;
        display: grid;
        grid-template-columns: 3fr 2fr 3fr;
    }

    .country {
        padding-left: .05rem;
        width: 64px;
        padding-top: 5rem;
        margin: 0;
        color: white;
        font-size: 1.5rem !important;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        cursor: pointer;
    }
    
    input[type=text] {
        border-radius: .5rem;
        border: 2px solid gray;
        background-color: rgba(255, 255, 255, 0);
        width: 3ch;     
        padding: 0 10px;
        height: 60%; 
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

    /* height: (127px * ...) */
    /* width: (620px * ...) */

    @media only screen and (max-width: 700px) {
        .numberPlate {
            height: 101.6px;
            width: 496px;
        }

        .numberPlate * {
            font-size: 3rem;
        }

        .country {
            padding-top: 3.8rem;
            font-size: 1.5rem !important;
            width: 50px;
        }
    }

    @media only screen and (max-width: 550px) {
        .numberPlate {
            height: 63.5px;
            width: 310px;
        }

        .numberPlate * {
            font-size: 2rem;
        }

        .country {
            padding-top: 2.3rem;
            font-size: 1rem !important;
            width: 30px;
        }
    }

    @media only screen and (max-width: 350px) {
        .numberPlate {
            height: 50.8px;
            width: 240px;
        }

        .numberPlate * {
            font-size: 1.5rem;
        }

        .country {
            padding-top: 1.8rem;
            font-size: .8rem !important;
            width: 25px;
        }
    }
</style>