<script lang="ts">
	const user = {};

	async function onReset() {}
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<div class="container">
	<form on:submit|preventDefault={onReset}>
		<div class="field">
			<label for="email"> Email: </label>
			<input type="email" id="email" bind:value={user.email} />
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
	}
	
</style>
