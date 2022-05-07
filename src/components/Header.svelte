<script>
	import NavBar from './NavBar.svelte';
</script>

<header>
	<a href="/" id="logo"><img src="/logo.svg" alt="CLSearch" border="0" title="Home" /></a>
	<NavBar />
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.4rem;
	}

	header a {
		display: inline-block;
		text-decoration: none;
	}

	#logo img {
		width: 25rem;
	}

	@media (min-width: 961px) {
		/* tablet, landscape iPad, lo-res laptops ands desktops */
		header {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
