<script lang="ts">
	import type { ChangeHistory, Contract } from '$types/contract';
	import { formatDistance } from 'date-fns';

	export let historyArray: ChangeHistory[];
	export let parties: Contract['parties'];
</script>

{#if !historyArray || historyArray?.length == 0}
	<h4>Unchanged</h4>
{:else}
	{#each historyArray as h}
		<div class="history-container">
			<h4>
				{formatDistance(new Date(h.timestamp), new Date(), { addSuffix: true })} by {parties.find(
					(p) => p.userID == h.userID
				).username}
			</h4>
			<p class="from">- {h.changedFrom}</p>
			<p class="to">+ {h.changedTo}</p>
		</div>
	{/each}
{/if}

<style>
	.history-container {
		margin: 0.5em 0;
		background: #303554;
		padding: 0.1em 0.5em;
		border-radius: 5px;
	}
	.from {
		background-color: #8f2626;
	}
	.to {
		background-color: #1b681b;
	}
</style>
