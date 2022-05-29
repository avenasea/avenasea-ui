<script context="module">
	export async function load({ url }) {
		const email = url.searchParams.get('email') || '';
		return { props: { email } };
	}
</script>

<script lang="ts">
	import User from '$api/user';
	import Message from '$components/Message.svelte';
	export let email: string;
	let type;
	let msg;

	async function onReset() {
		try {
			type = null;
			msg = null;
			const res = await new User(fetch).requestReset(email);
			msg = res.message;
			type = 'success';
		} catch (err) {
			type = 'error';
			msg = err;
		}
	}
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<h1>Forgot Password</h1>
<Message {type} {msg} />
<form on:submit|preventDefault={onReset}>
	<div class="field">
		<label for="email"> Email: </label>
		<input type="email" id="email" bind:value={email} />
	</div>
	<footer>
		<button>Reset Password</button>
	</footer>
</form>

<style>
</style>
