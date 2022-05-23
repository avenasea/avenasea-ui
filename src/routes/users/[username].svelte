<script context="module">
	import User from '$api/user';
	import Jobs from '$api/jobs';
	import Searches from '$api/searches';

	export async function load({ fetch, params }) {
		const { username } = params;
		const user = await new User(fetch).getByUsername(username);
		const jobs = await new Jobs(fetch).getByUsername(username);
		const searches = await new Searches(fetch).getByUsername(username);

		return {
			props: {
				jobs,
				user,
				searches,
				username
			}
		};
	}
</script>

<script>
	import { fromNow } from '$lib/dates';
	import { onMount } from 'svelte';

	export let user = {};
	export let username = null;
	export let jobs = [];
	export let searches = [];

	onMount(async () => {
		user = await new User().getByUsername(username);
		console.log(user);
	});
</script>

<svelte:head>
	<title>{user.username ? `${user.username} on ` : ''}Grazily</title>
</svelte:head>

{#if user.username}
	<h1>{user.username}</h1>
	<h4 class="date">Joined {fromNow(user.created_at)}</h4>
	{#if user.contactme && (user.phone || user.email)}
		<h4>Contact:</h4>

		{#if user.phone}
			<div class="phone">Phone: <a href="tel:{user.phone}">{user.phone}</a></div>
		{/if}
		{#if user.email}
			<div class="email">
				Email:
				<a
					href="mailto:{user.email}?subject=Grazily%20Profile...&body=I%20found%20your%20profile%20at:%20{typeof window !==
						'undefined' && window.location.href}">{user.email}</a
				>
			</div>
		{/if}
	{:else if user.contactme}
		<p>Please <a href="/login">login</a> to contact {user.username}</p>
	{:else}
		<p>This user has chosen not be contacted.</p>
	{/if}
	{#if user.location}
		<div class="location">Location: {user.location}</div>
	{/if}
{/if}

{#if jobs.length}
	<h2>Jobs by {username}</h2>
	<ul>
		{#each jobs as job}
			<li><a href="/jobs/{job.id}">{job.title}</a> posted {fromNow(job.created_at)}</li>
		{/each}
	</ul>
{:else}
	<p>{username} has not posted any jobs yet.</p>
{/if}

{#if searches.length}
	<h2>Search profiles by {username}</h2>
	<ul>
		{#each searches as search}
			<li><a href="/searches/{search.id}">{search.name}</a> posted {fromNow(search.created_at)}</li>
		{/each}
	</ul>
{:else}
	<p>{username} has not created any search profiles yet.</p>
{/if}
