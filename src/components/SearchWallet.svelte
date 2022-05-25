<script>
import { onMount } from 'svelte';
import { Loading } from "carbon-components-svelte";
    import MyAxies from './MyAxies.svelte';
    let wallet;
    let walletInput;
    let floor_data;
    let loading;
    const floorData = async (address) => {
        loading = true;
        await fetch(`${process?.env?.AXIEFLOOR_SERVER}/${address}`)
        .then((response) => response.json())
        .then((res) => {
          floor_data = res;
          loading = false;
        });
    }
    

    onMount(async() => {
      let recentAddress = localStorage.getItem('wallet') || '';
      walletInput.value = recentAddress;
      if(recentAddress) {
        floorData(recentAddress)
      }
    })

    const handleInput = (e) => {
        e.preventDefault();
        wallet = e.target.value;
        
        let address = wallet?.split("ronin:").join('0x')
        if(address.length >= 42) {
            localStorage.setItem('wallet', address);
            floorData(address);
        }
    }
</script>

<div class="container my-wallet-container">
        <div class="wrapper wallet-address">
            <p>Wallet</p>
            <input
            placeholder="Check wallet address.."
            on:input={(e) => handleInput(e)}
            bind:this={walletInput}
            >
        </div>
</div>
{#if loading }
  <Loading withOverlay={false} small />
  {:else}
  <MyAxies {floor_data}/>
{/if}

<style>
  .wallet-address {
    max-width: 200px;
  } 

  input {
    background: #08253F;
    padding: 10px;
    color: #fff;
  }
</style>