<script lang="ts">
	import type { ContractField } from '$types/contract';
	import { createEventDispatcher } from 'svelte';
	export let heading = '';
	export let collapsed = false;
	export let statusSummary: ContractField['statusSummary'] = null;
	let statusText;
	let textColor: 'neutral' | 'green' | 'red' = 'neutral';

	const dispatch = createEventDispatcher();

	const clicked = () => {
		dispatch('click');
		collapsed = !collapsed;
	};
	const hovered = () => {
		dispatch('hover');
	};

	$: {
		if (statusSummary == 'unset') {
			statusText = 'Field value unset';
			textColor = 'neutral';
		} else if (statusSummary == 'awaitingOther') {
			statusText = 'Awaiting Others';
			textColor = 'neutral';
		} else if (statusSummary == 'fullyApproved') {
			statusText = 'Approved by all ✓';
			textColor = 'green';
		} else if (statusSummary == 'awaitingMe') {
			statusText = 'Awaiting my approval';
			textColor = 'neutral';
		} else if (statusSummary == 'rejectedByMe') {
			statusText = 'Rejected by me';
			textColor = 'red';
		} else if (statusSummary == 'rejectedByOther') {
			statusText = 'Rejected by other party';
			textColor = 'red';
		}
	}
</script>

<section class:red-bg={textColor == 'red'} class:green-bg={textColor == 'green'}>
	<header>
		<h3 on:click={clicked} on:pointerenter={hovered}>{heading} {collapsed ? '↓' : '↑'}</h3>
		{#if statusSummary}
			<span class={textColor}>{statusText}</span>
		{/if}
	</header>
	{#if !collapsed}
		<slot />
	{/if}
</section>

<style>
	h3 {
		cursor: pointer;
		flex-grow: 1;
	}
	section {
		padding: 0.8em;
		border: #6e89cd 1px solid;
		border-radius: 8px;
		margin: 0.4em 0;
	}
	header {
		display: flex;
		justify-content: space-between;
	}
	.green-bg {
		background: linear-gradient(42deg, rgba(16, 25, 33, 0) 60%, rgb(10 218 0 / 50%) 100%);
	}
	.red-bg {
		background: linear-gradient(42deg, rgba(16, 25, 33, 0) 60%, rgb(208 18 18 /50%) 100%);
	}
	.green {
		color: #12d01c;
	}
	.red {
		color: rgb(255 58 58);
	}
</style>
