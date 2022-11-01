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

<div class="container">
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
		<p style="text-align: right">
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
</div>


<style>
	.container{
		padding: 0 2rem;
	}
	form{
		padding: 7.2rem 6rem;
		border-radius: 20px;
		border: 1px solid #354baf;
		box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
		max-width: 80rem;
		width: 100%;
		margin: 2rem auto 10rem auto;
	}
	label{
		margin-bottom: 1rem;
	}
	@media (max-width: 700px) {
		form{
			padding: 5rem 2rem;
		}
		.container{
			padding: 12rem 2rem 0 2rem;
		}
	}
</style>
