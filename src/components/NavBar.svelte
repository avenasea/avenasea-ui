<script>
	import { goto } from '$app/navigation';
	import { userStore } from '$stores/user';

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		userStore.set(null);
		goto('/');
	};
</script>

<nav>
	<a href="/jobs">Jobs</a>
	<a href="/pricing">Pricing</a>
	{#if $userStore}
		<a href="/dashboard">Dashboard</a>
		<a href="/account/settings">Settings</a>
		<!-- <a href="/account/settings">Settings</a> -->
		<a href="#" on:click|preventDefault={logout}>Logout</a>
	{:else}
		<a href="/login">Login</a>
		<a href="/register">Signup</a>
	{/if}
</nav>

<style>
	nav {
		text-align: center;
		padding: 1rem;
	}

	nav a {
		margin: 0 0.4rem;
	}
</style>
