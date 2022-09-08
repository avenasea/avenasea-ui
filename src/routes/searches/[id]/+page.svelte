<script>
	import Tags from '$components/Tags.svelte';
	import { fromNow } from '$lib/dates';

	export let data;
	const { search, id } = data;

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
