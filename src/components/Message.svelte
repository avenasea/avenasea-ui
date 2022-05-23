<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let type = 'success';
	export let msg = '';

	function closeMessage() {
		msg = '';
	}
</script>

{#if msg}
	<div class="message" class:error={type === 'error'}>
		<a href="#" class="close" on:click|preventDefault={closeMessage}>Close</a>
		{#if type === 'error'}<p class="err">{msg}</p>{/if}
		{#if type == 'success'}<p class="ok">{msg}</p>{/if}
	</div>
{/if}

<style>
	.message {
		position: relative;
		background-color: #b0ffb0;
		color: #008f00;
		padding: 1rem 1.2rem;
		border-radius: 0.8rem;
	}

	.close {
		color: #008f00;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.error {
		background-color: #ffb0b0;
		color: #8f0000;
	}

	.error a {
		color: #8f0000;
	}

	.error .close {
		color: #8f0000;
	}
</style>
