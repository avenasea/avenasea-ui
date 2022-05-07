<script lang="ts">
	import User from '../api/user';
	import { onMount } from 'svelte';
	import { userStore } from '../stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const user = {};
	let ref;

	async function onLogin() {
		try {
			const res = await new User(fetch).login(user);
			if (res.user && res.token) {
				localStorage.setItem('token', res.token);
				delete res.user.token;
				localStorage.setItem('user', JSON.stringify(res.user));
				userStore.set(res.user);
				console.log(ref);
				goto(ref);
			}
		} catch (err) {
			console.error(err);
		}
	}

	onMount(() => {
		ref = $page?.url?.searchParams.get('ref') || '/dashboard';
		console.log('ref: ', ref);
	});
</script>

<svelte:head>
	<title>Login - Grazily</title>
</svelte:head>

<form on:submit|preventDefault={onLogin}>
	<div class="field">
		<label for="email"> Email: </label>
		<input type="email" id="email" bind:value={user.email} />
	</div>
	<div class="field">
		<label for="password">Password:</label>
		<input type="password" id="password" bind:value={user.password} />
	</div>
	<!--
	<p style="text-align: right;">
		<a href="/forgot">Forgot password?</a>
	</p>
	-->
	<footer>
		<button>Login</button>
	</footer>
</form>

<style>
</style>
