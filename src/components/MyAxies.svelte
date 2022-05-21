<script>
import Axie from "./Axie.svelte";


</script>




<div class="container my-axies-container">
    <div class="wrapper my-axie">
        <p>My Axies <span class="p-highlight">32</span></p>
        <div class="axie-list">
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
            <Axie/>
        </div>

        <p>Total Floor Worth <span class="p-highlight">300</span> USD</p>
    </div>
</div>


<style>

    .axie-list {
        /* display: flex;
        flex-direction: row; */
        overflow: scroll;
        display: block;
        width: 500px;
        max-height: 200px;
    }
</style>