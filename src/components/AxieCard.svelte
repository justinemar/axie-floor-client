<script>
    import compact from "../utils/compact";
    import { AxieGene } from "agp-npm/dist/axie-gene"; // Defaults to HexType.Bit256

    export let selectedAxie = null;

    const parseAxieGene = (hex) => {
        if(hex != undefined)
            return JSON.stringify(
                    new AxieGene(hex).getGeneQuality()
                    )
    }
    
</script>

<div class="card">
    <p>
        <a
            class="p-highlight"
            href={selectedAxie?.myaxie_link ?? ""}
            target="_blank"
        >
            Sell My Axie
        </a>
    </p>
    <p>
        Axie Breed Count <span class="p-highlight"
            >{selectedAxie?.axie_breedCount ?? 0}</span
        >
    </p>
    <p>
        Axie Gene <span class="p-highlight"
            >{parseAxieGene(selectedAxie?.axie_genes) ?? "0"}%</span
        >
    </p>

    <p>
        <a
            class="p-highlight"
            href={selectedAxie?.floor_link ?? ""}
            target="_blank"
        >
            Floor Axie
        </a>
    </p>

    <p>
        Current Floor <span class="p-highlight"
            >{compact(selectedAxie?.floor_price ?? 0)}</span
        > USD
    </p>
    <p>
        Previous Floor <span class="p-highlight"
            >{compact(selectedAxie?.previous_price ?? 0)}</span
        > USD
    </p>
</div>

<style>
    .card {
        background: #02213c;
        border-radius: 9%;
        text-align: left;
        padding: 20px;
    }
</style>
