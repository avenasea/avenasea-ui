<script>
	import Button from './Button.svelte';
	import NavBar from './NavBar.svelte';

	export let url;
	// console.log(url);
</script>

<header>
	<a href="/" id="logo"><img src="/images/logo.svg" /></a>
	<NavBar {url} />
	<Button className={'white header'} content={'GET NOTIFIED'} href={'/#contact'} />
</header>

<style>
	header {
		position: relative;
		background: linear-gradient(180deg, rgba(0, 0, 0), rgba(0, 0, 0, 0));
		display: flex;
		/* flex-direction: column; */
		justify-content: space-between;
		/* align-items: flex-start; */
		padding: 3rem 3rem 10rem 3rem;
		/* margin-bottom: 1.4rem; */
		width: 100%;
	}

	header a {
		display: inline-block;
		text-decoration: none;
	}

	/* #logo{
		margin-top: 2rem;
	} */

	#logo img {
		width: 22.7rem;
		max-width: 100%;
	}

	@media (max-width: 680px) {
		header {
			padding: 2rem 2rem 3rem 2rem;
		}
	}
</style>
