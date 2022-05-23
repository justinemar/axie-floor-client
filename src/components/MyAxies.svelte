<script>
import compact from "../utils/compact";
import Axie from "./Axie.svelte";
import AxieCard from "./AxieCard.svelte";
import Filters from "./Filters.svelte";
export let floor_data = [];
let selectedAxie = null;
let filteredData = [];

const buildAxieCard = (event) => {
    selectedAxie = event.detail.axie;
}


const filter = (e) => {
    selectedAxie = null;
    if(e.detail.toggled) {
        filteredData = floor_data.ranking.filter((item) => item.floor_price == null);
        return filteredData;
    }

    filteredData = [];

}

</script>




<div class="container my-axies-container">
    <div class="wrapper my-axie">
        <p>My Axies <span class="p-highlight">{floor_data?.ranking?.length ?? 0}</span></p>
        <Filters on:filterSelected={filter}/>
        <div class="axie-detail">
            <div class="axie-list">
                {#if filteredData && filteredData.length > 0}
                    {#each filteredData as axie (axie.id)}
                        <Axie {axie} on:axieSelected={buildAxieCard}/>
                    {/each}
                {:else}
                    {#if floor_data && floor_data.length != 0}
                        {#each floor_data.ranking as axie (axie.id)}
                            <Axie {axie} on:axieSelected={buildAxieCard}/>
                        {/each}
                    {/if}
                {/if}
        </div>

        <div class="axie-card">
            <AxieCard {selectedAxie}/>
        </div>
        </div>
        <p>Total Floor Worth <span class="p-highlight">{compact(floor_data?.totalWorth ?? 0)}</span> USD</p>
    </div>
</div>


<style>
    .my-axie {
        margin-right: 10px;
    }

    .axie-detail {
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .my-axies-container {
        align-items: center;
    }

    .axie-card {
        max-width: 290px;
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