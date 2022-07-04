<script>
	export let heading = '';
	export let collapsed = false;
</script>

<section>
	<h3 on:click={() => (collapsed = !collapsed)}>{heading} {collapsed ? '↓' : '↑'}</h3>
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
