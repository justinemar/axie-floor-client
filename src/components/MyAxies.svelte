<script>
import compact from "../utils/compact";
import Axie from "./Axie.svelte";
import AxieCard from "./AxieCard.svelte";
export let floor_data = [];
let selectedAxie = null;

const buildAxieCard = (event) => {
    selectedAxie = event.detail.axie;
}

</script>




<div class="container my-axies-container">
    <div class="wrapper my-axie">
        <p>My Axies <span class="p-highlight">{floor_data?.ranking?.length ?? 0}</span></p>
        <div class="axie-list">
            {#if floor_data && floor_data.length != 0}
                {#each floor_data.ranking as axie (axie.id)}
                    <Axie {axie} on:axieSelected={buildAxieCard}/>
                {/each}
            {/if}
        </div>

        <p>Total Floor Worth <span class="p-highlight">{compact(floor_data?.totalWorth ?? 0)}</span> USD</p>
    </div>
    <div class="wrapper axie-card">
        <p>Selected Axie</p>
        <AxieCard {selectedAxie}/>
    </div>
</div>


<style>

    .my-axies-container {
        display: flex;
        justify-content: space-evenly;
    }

    .axie-card {
        max-width: 450px;
        width: 100%;
    }
    
    .axie-list {
        /* display: flex;
        flex-direction: row; */
        overflow: scroll;
        display: block;
        width: 500px;
        max-height: 200px;
    }
</style>