<script context="module">
	import Jobs from '$api/jobs';

	export async function load({ fetch }) {
		const jobs = await new Jobs(fetch).getAll();

		return {
			props: {
				jobs
			}
		};
	}
</script>

<script>
	import { fromNow } from '$lib/dates';

	export let jobs = [];

	const types = {
		fulltime: 'Fulltime',
		c2c: 'Corp-to-Corp',
		contract: 'Contract (1099)',
		internship: 'Internship',
		parttime: 'Part-time'
	};
</script>

<svelte:head>
	<title>Grazily Jobs</title>
</svelte:head>

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
