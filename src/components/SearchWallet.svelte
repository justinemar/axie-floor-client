<script>
    import { Button } from 'attractions';
    let wallet;


    const loadAxies = (address) => {
        return;
    }

    const handleInput = (e) => {
        e.preventDefault();
        wallet = e.target.value;
        
        let address = wallet?.split("ronin:").join('0x')
        if(address.length >= 42) {
            loadAxies(address);
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