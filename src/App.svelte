<script lang="ts">
import RecentRecords from "./components/RecentRecords.svelte";
import TopWallets from "./components/TopWallets.svelte";
import SearchWallet from "./components/SearchWallet.svelte";
import { InlineNotification } from "carbon-components-svelte";
</script>

<main>
	<header>
		<div class="logo"></div>
		<InlineNotification
		hideCloseButton
		kind="info"
		title="WIP:"
		subtitle="This is Work in Progress and might break anytime :c"
		/>
	</header>

	<div class="section-container">
		<section>
			<SearchWallet/>
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


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>