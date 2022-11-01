<script lang="ts">
	import User from '$api/user';
	import Message from '$components/Message.svelte';

	export let data;
	let { email } = data;
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


<div class="container">
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
</div>
<style>
	form{
		padding: 7.2rem 6rem;
		border-radius: 20px;
		border: 1px solid #354baf;
		box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
		max-width: 80rem;
		width: 100%;
		margin: 0 auto 10rem auto;
	}
	label{
		margin-bottom: 1rem;
	}
	h1{
		margin-bottom: 3rem;
		text-align: center;
	}
	footer{
		margin-top: 3rem;
	}
	.container{
		padding: 0 2rem;
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
