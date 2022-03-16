<script>
    let search = "";
    let errorSearch = "";
    let country = "D";
    let data;

    const getResult = async () => {
        if (search === "---" || search === "") {
            alert("Please enter something into the search input field.")
        } else {
            let res = await fetch(`/api/reverse/${country}-${search}.json`);
            if (res.ok) {
                data = await res.json();
            } else {
                errorSearch = search;
            }
        }
    }
</script>

<main>
    <h1>Reverse Search</h1>
    <form on:submit|preventDefault={getResult}>
        <!-- svelte-ignore a11y-autofocus -->
        <input type="text" class="search" placeholder="Search" autofocus bind:value={search}><br>
        <div class="submit">
            <select name="country" id="country" bind:value={country} on:input={() => {data = undefined}}>
                <option value="D">Germany</option>
                <option value="A">Austria</option>
            </select>
            <button type="submit">Submit</button>
        </div>
    </form>
    {#if data && data.key !== undefined}
        <div class="numberPlate">
            <p class="country">{country}</p>
            <div class="innerPlate">
                <input type="text" style="width: 3.5ch;" placeholder="---" maxlength="3" value={data.key} readonly>
                <input type="text" style="width: 2.5ch;" maxlength="2" value="AA" readonly>
                <input type="text" style="width: 4.5ch;" maxlength="4" value="1234" readonly>
            </div>
        </div>
    {:else if errorSearch}
        <p>No origin found with the search "{errorSearch}".</p>
    {/if}
</main>

<style>
    h1 {
        margin: 0;
        margin-bottom: 1.5rem;
    }

    form {
        margin-bottom: 3rem;
    }

    .search {
        border-radius: .5rem;
        padding: 0 .5rem;
        height: 60%; 
        width: 80%;
        max-width: 300px;
        outline: none;
        text-align: center;
        border: 2px solid black;
        font-size: 1.5rem;
    }

    .submit {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    select {
        padding: .2rem 0;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: .5rem;
    }

    option {
        font-weight: bold;
    }

    button {
        margin: .5rem 0;
        margin-left: .2rem;
        border-radius: 1rem;
        border: none;
        padding: .4rem 1rem;
        background-color: red;
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }

    .numberPlate {
        margin: 0 auto;
        margin-top: .5rem;
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
        font-family: "FE-Font";
    }
    
    .innerPlate {
        width: 100%;
        align-items: center;
        display: grid;
        grid-template-columns: 3.5fr 2fr 4.3fr;
    }

    .country {
        padding-left: .05rem;
        width: 64px;
        padding-top: 4.8rem;
        margin: 0;
        color: white;
        font-size: 2rem !important;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .innerPlate input[type=text] {
        border-radius: .5rem;
        border: 2px solid black;
        background-color: rgba(255, 255, 255, 0);
        padding: 0 10px;
        height: 60%; 
        outline: none;
        text-align: center;
        margin: auto;
    }

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

        .innerPlate input[type=text] {
            padding: 0 5px;
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