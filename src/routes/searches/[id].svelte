<script context="module">
	import Searches from '$api/searches';

	export async function load({ fetch, params }) {
		const { id } = params;

		const search = await new Searches(fetch).getById(id);

		return {
			props: {
				id,
				search
			}
		};
	}
</script>

<script>
	import Tags from '$components/Tags.svelte';
	import { fromNow } from '$lib/dates';

	export let search = {};
	export let id = null;

	const types = {
		fulltime: 'Fulltime',
		c2c: 'Corp-to-Corp',
		contract: 'Contract (1099)',
		internship: 'Internship',
		parttime: 'Part-time'
	};
</script>

<svelte:head>
	<title>{search.name} search profile</title>
</svelte:head>

{#if search.name}
	<h1>{search.name} profile</h1>
	<h4 class="date">
		{fromNow(search.created_at)}
		{#if search.username} by <a href="/users/{search.username}">{search.username}</a>{/if}
	</h4>
	<Tags tags={search.positive} type="search" />
{/if}

<style>
	footer {
		margin: 1rem 0;
	}

	footer a {
	}
</style>
