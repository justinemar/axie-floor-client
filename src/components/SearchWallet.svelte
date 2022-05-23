<script>
    import MyAxies from './MyAxies.svelte';
    let wallet;
    let floor_data;

    const floorData = async (address) => {
        await fetch(`${process?.env?.AXIEFLOOR_SERVER}/${address}`)
        .then((response) => response.json())
        .then((res) => {
          floor_data = res;
        });
    }

    const handleInput = (e) => {
        e.preventDefault();
        wallet = e.target.value;
        
        let address = wallet?.split("ronin:").join('0x')
        if(address.length >= 42) {
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
            >
        </div>
        <!-- <Button filled>Load</Button> -->
</div>
<MyAxies {floor_data}/>

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