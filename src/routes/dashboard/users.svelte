<script>
	import { onMount } from 'svelte';
	import User from '$api/user';

	let users = [];

	onMount(async () => {
		users = await new User(fetch).all();
	});
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<ol>
	{#each users as user}
		<li>
			<span
				>{user.username} -
				<a href="mailto:{user.email}?subject={user.username}">{user.username || user.email}</a>
				<a href="/users/{user.username}">({user.total} searches)</a>
			</span>
			{#if user.phone}<span class="phone">phone: {user.phone}</span>{/if}
			<span class="date">{new Date(user.created_at).toLocaleString()}</span>
		</li>
	{/each}
</ol>
