<script>
import Wallet from './Wallet.svelte';
</script>

<div class="container top-wallets-container">
    <div class="wrapper top-wallet">
        <h2>Top Wallets</h2>
        <div class="wallet-list">
            <Wallet/>
            <Wallet/>
            <Wallet/>
        </div>
    </div>
</div>


<style>
    .wallet-list{
        margin-bottom: 20px;
    }
</style>