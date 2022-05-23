<script context="module">
	import Searches from '$api/searches';

	export async function load({ fetch, params }) {
		const { tag } = params;

		const searches = await new Searches(fetch).getByTag(tag);

		return {
			props: {
				tag,
				searches
			}
		};
	}
</script>

<script>
	import { fromNow } from '$lib/dates';

	export let searches = [];
	export let tag = null;

	const title = `${tag} candidate profiles`;
</script>

<svelte:head>
	<title>{title} - Grazily</title>
</svelte:head>

<h1>{title}</h1>

<ul>
	{#each searches as search}
		<li>
			<a href="/searches/{search.id}">{search.name}</a>
			<span class="date">{fromNow(search.created_at)}</span>
			{#if search.username}
				by <a href="/users/{search.username}">{search.username}</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 1rem;
	}
</style>
