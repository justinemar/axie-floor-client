<script>
    import { Toggle } from "carbon-components-svelte";
    import { createEventDispatcher } from "svelte";


    const dispatch = createEventDispatcher();

    const filterSelected = (e) => {
        e.preventDefault();
        dispatch('filterSelected', e.detail)
    }

</script>



<div class="filters">
    <div class="show-all">
        <Toggle 
            labelText="Show axies with no floor"
            on:toggle={(e) => filterSelected(e)}
            >
            <span slot="labelA" style="color: white">No</span>
            <span slot="labelB" style="color: green">Yes</span>
        </Toggle>
    </div>
</div>