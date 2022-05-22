<script>
    import { createEventDispatcher } from "svelte";


    export let axie = {};

    const dispatch = createEventDispatcher();

    const selectedAxie = (axie) => {
        dispatch('axieSelected', { axie })
    }

</script>






<!-- svelte-ignore missing-declaration -->
    <div 
    class="axie"
    style="background-image: url({axie.axie_image})"
    on:click|preventDefault={() => selectedAxie(axie)}
    >
    </div>

<style>

    .axie {
        width: 120px;
        height: 100px;
        background: #2B445A;
        margin: 5px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .axie:hover {
        outline: #3AF165 solid 1px;
    }
</style>