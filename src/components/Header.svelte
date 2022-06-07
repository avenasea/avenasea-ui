<script>
	import Button from './Button.svelte';
    import NavBar from './NavBar.svelte';
</script>

<header>
	<a href="/" id="logo"><img src="/images/logo.svg"/></a>
	<NavBar />
	<Button className={'white header'} content={'GET NOTIFIED'} href={'/'}/>
</header>

<style>
	header {
		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		/* align-items: flex-start; */
		padding: 0 3rem;
		/* margin-bottom: 1.4rem; */
		width: 100%;
	}

	header a {
		display: inline-block;
		text-decoration: none;
	}

	#logo{
		margin-top: 2rem;
	}

	#logo img {
		width: 22.7rem;
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
