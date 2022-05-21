<script lang="ts">
import MyAxies from "./components/MyAxies.svelte";
import RecentRecords from "./components/RecentRecords.svelte";
import TopWallets from "./components/TopWallets.svelte";
import SearchWallet from "./components/SearchWallet.svelte";

	export let name: string;
</script>

<main>
	<header>
		<div class="logo"></div>
	</header>

	<div class="section-container">
		<section>
			<SearchWallet/>
			<MyAxies/>
			<TopWallets/>
		</section>
		<section>
			<RecentRecords/>
		</section>
	</div>

</main>

<style>
	.section-container {
		display: flex;
		flex-direction: row;
	}

	section {
		margin: 10px;
		flex-grow: 1;
	}
	.logo {
		background-image: url("/images/AXIEFLOOR.png");
		width: 100%;
		height: 5rem;
		background-repeat: no-repeat;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>