<script lang="ts">
	import User from '../../api/user';
	import { onMount } from 'svelte';
	import { userStore } from '../../stores/user';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Message from '$components/Message.svelte';

	const user: { password?: string; email?: string } = {};
	let ref;
	let msg;
	let type;

	async function onLogin() {
		try {
			msg = null;
			type = null;
			const res = await new User(fetch).login(user);
			if (res.user) {
				userStore.set(res.user);
				goto(ref);
			}
		} catch (err) {
			type = 'error';
			msg = err;
			console.error(err);
		}
	}

	onMount(() => {
		ref = $page?.url?.searchParams.get('ref') || '/contracts';
		console.log('ref: ', ref);
	});
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<Message {type} {msg} />

<form on:submit|preventDefault={onLogin}>
	<div class="field">
		<label for="email"> Email: </label>
		<input type="email" id="email" bind:value={user.email} />
	</div>
	<div class="field">
		<label for="password">Password:</label>
		<input type="password" id="password" bind:value={user.password} />
	</div>
	<p style="text-align: right;">
		<a
			href={`${'/password/request-reset'}${
				user.email ? `?email=${encodeURIComponent(user.email)}` : ''
			}`}>Forgot password?</a
		>
	</p>
	<footer>
		<button>Login</button>
	</footer>
</form>

<style>
</style>
