<script>
	import { createEventDispatcher } from 'svelte';
	export let heading = '';
	export let collapsed = false;

	const dispatch = createEventDispatcher();

	const clicked = () => {
		dispatch('click');
		collapsed = !collapsed;
	};
	const hovered = () => {
		dispatch('hover');
	};
</script>

<section>
	<h3 on:click={clicked} on:pointerenter={hovered}>{heading} {collapsed ? '↓' : '↑'}</h3>
	{#if !collapsed}
		<slot />
	{/if}
</section>

<style>
	h3 {
		cursor: pointer;
	}
	section {
		padding: 0.8em;
		border: #6e89cd 1px solid;
		border-radius: 8px;
		margin: 0.4em 0;
	}
</style>
