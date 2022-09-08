<script lang="ts">
	import Password from '$components/Password.svelte';
	import User from '$api/user';
	import { goto } from '$app/navigation';
	import Message from '$components/Message.svelte';

	export let data;
	let { token, expiry } = data;
	let password = '';
	let msg;
	let type;

	if (expiry && parseInt(expiry) < Date.now()) {
		msg = 'token has expired';
		type = 'error';
	}

	async function onReset() {
		if (!password || password == '' || parseInt(expiry) < Date.now()) {
			msg = 'Please set a password';
			type = 'error';
			return;
		}
		try {
			msg = null;
			type = null;
			await new User().passwordReset(token, password);
			goto('/login');
		} catch (err) {
			msg = err;
			type = 'error';
		}
	}
</script>

<svelte:head>
	<title>Create New Password</title>
</svelte:head>

<h1>Create New Password</h1>
<Message {type} {msg} />
<form on:submit|preventDefault={onReset}>
	<Password bind:finalPassword={password} />
	<footer>
		<button>Reset Password</button>
	</footer>
</form>

<style>
</style>
