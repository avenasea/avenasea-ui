<script context="module">
	import Jobs from '$api/jobs';

	export async function load({ fetch, params }) {
		const job = await new Jobs(fetch).getById(params.id);

		return {
			props: {
				job
			}
		};
	}
</script>

<script>
	import Tags from '$components/Tags.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { fromNow } from '$lib/dates';

	export let job = {};
	const types = {
		fulltime: 'Fulltime',
		c2c: 'Corp-to-Corp',
		contract: 'Contract (1099)',
		internship: 'Internship',
		parttime: 'Part-time'
	};
</script>

<svelte:head>
	<title>{job.title} job</title>
</svelte:head>

{#if job.title}
	<h1>{job.title}</h1>
	<h4 class="date">
		{fromNow(job.created_at)}
		{#if job.username} by <a href="/users/{job.username}">{job.username}</a>{/if}
	</h4>
	<div class="description"><SvelteMarkdown source={job.description} /></div>
	<Tags tags={job.positive} />
	<h4 style="display: inline-block;">Pay:</h4>
	<span class="pay">{job.pay}</span>
	<span class="type">{types[job.type]}</span>

	<footer>
		<a
			href="mailto:{job.contact}?subject={job.title}&body=I%20found%20your%20job%20at:%20{typeof window !==
				'undefined' && window.location.href}">Apply now</a
		>
	</footer>
{/if}

<style>
	footer {
		margin: 1rem 0;
	}

	footer a {
	}
</style>
