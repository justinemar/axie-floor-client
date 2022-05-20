<script>
    import { Loading } from 'attractions'
</script>

<div class="container top-wallets-container">
    <div class="wrapper top-wallet">
        <p>Top Wallets</p>
        <div class="wallet-list">
            <div class="wallet">
                <p>ronin:96faa503b8558b4d2554d3d3669b96a2c8d5e821</p>
                <p><span class="p-highlight">15000</span> USD</p>
            </div>
            <div class="wallet">
                <p>ronin:96faa503b8558b4d2554d3d3669b96a2c8d5e821</p>
                <p><span class="p-highlight">15000</span> USD</p>
            </div>
            <div class="wallet">
                <p>ronin:96faa503b8558b4d2554d3d3669b96a2c8d5e821</p>
                <p><span class="p-highlight">15000</span> USD</p>
            </div>
        </div>

        <Loading />
    </div>
</div>


<style>
    .wallet {
        padding: 5px;
        background: #02213C;
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-around;
    }
    .wallet p:first {
        flex-grow: 1;
    }
    .wallet-list{
        margin-bottom: 20px;
    }
    .wallet > p {
        font-size: 20px;
        font-weight: bolder;
    }
</style>