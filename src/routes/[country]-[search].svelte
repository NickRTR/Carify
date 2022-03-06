<script context="module">
    export async function load({ params }) {
        let res = await fetch(`/api/${params.country}/${params.search}.json`);
        let data = await res.json();
        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    export let data;
</script>

<body>
    <p>{data.title}</p>
    <p>{data.state}</p>
</body>