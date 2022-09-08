<script lang="ts">
	const user = {};

	async function onReset() {}
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<form on:submit|preventDefault={onReset}>
	<div class="field">
		<label for="email"> Email: </label>
		<input type="email" id="email" bind:value={user.email} />
	</div>
	<footer>
		<button>Reset Password</button>
	</footer>
</form>

<style>
</style>
