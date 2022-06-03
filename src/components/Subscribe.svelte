<script>
	import User from '$api/user';
	import Message from '$components/Message.svelte';

	let user = {};
	let msg;
	let type;

	async function onSubmit() {
		try {
			msg = '';
			type = '';
			const res = await new User(fetch).newsletter(user);
			type = 'success';
			msg = 'You have been subscribed!';
		} catch (err) {
			type = 'error';
			msg = err;
			console.error(err);
		}
	}
</script>

<h2>
	<a href="/register">Register now</a> for a free 2-week trial or subscribe to our newsletter:
</h2>

{#if msg}
	<Message {type} {msg} />
{/if}

<form on:submit|preventDefault={onSubmit}>
	<div class="field">
		<label for="name">Name:</label>
		<input type="text" id="name" bind:value={user.name} />
	</div>
	<div class="field">
		<label for="email">Email:</label>
		<input type="email" id="email" bind:value={user.email} />
	</div>
	<div class="field">
		<label for="phone">Phone:</label>
		<input type="tel" id="phone" bind:value={user.phone} />
	</div>
	<footer>
		<button>Subscribe</button>
	</footer>
</form>

<style>
	form {
		text-align: left;
		max-width: 40rem;
		margin: 0 auto;
	}

	form input[type]:not([type='checkbox']):not([type='radio']) {
		width: 100%;
	}
</style>
