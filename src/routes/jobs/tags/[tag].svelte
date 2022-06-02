<script context="module">
	import Jobs from '$api/jobs';

	export async function load({ fetch, params }) {
		const jobs = await new Jobs(fetch).getByTag(params.tag.toLowerCase());

		return {
			props: {
				jobs
			}
		};
	}
</script>

<script>
	import { fromNow } from '$lib/dates';
	import { page } from '$app/stores';

	export let jobs = [];
	const title = `${$page.params.tag.toLowerCase().replace(/-+/g, ' ')} jobs`;

	console.log('title: ', title);
	const types = {
		fulltime: 'Fulltime',
		c2c: 'Corp-to-Corp',
		contract: 'Contract (1099)',
		internship: 'Internship',
		parttime: 'Part-time'
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<ul>
	{#each jobs as job}
		<li>
			<a href="/jobs/{job.id}">{job.title}</a>
			<!-- <Tags tags={job.positive} /> -->
			<span class="pay">{job.pay}</span>
			<span class="type">{types[job.type]}</span>
			<span class="date">{fromNow(job.created_at)}</span>
			{#if job.username}
				by <a href="/users/{job.username}">{job.username}</a>
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
