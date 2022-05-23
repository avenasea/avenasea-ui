<script>
	const code = Math.random()
		.toString(36)
		.replace(/[^a-z0-9]/gi, '')
		.substr(1, 9);

	function select(e) {
		e.target.select();
		navigator?.clipboard.writeText(e.target.value);
	}
</script>

<svelte:head>
	<title>Affiliate program</title>
</svelte:head>

<h1>Affiliate program</h1>

<p>Use this code: <strong>{code}</strong></p>

<p>Copy link:</p>

<textarea on:click={select}>https://clsearch.org/?aff={code}</textarea>

<style>
	textarea {
		padding: 1rem;
	}
</style>
