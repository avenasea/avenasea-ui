<script>
	const name = import.meta.env.VITE_META_NAME;
	const domain = import.meta.env.VITE_META_DOMAIN;
</script>

<svelte:head>
	<title>Privacy</title>
</svelte:head>

<section class="container">

<h1>Privacy Statement</h1>

<ul>
	<li>
		<p>
			{name} will only share your contact info with hiring companies if you do not
			<a href="/account/settings">opt-out from being contacted</a>.
		</p>
	</li>
	<li>
		<p>
			{name} does not run invasive 3rd party advertisements or tracking libraries (ie: Google Adsense,
			Google Analytics, etc). We currently have <a href="https://plausible.io">plausible.io</a> client
			side tracking service which is a privacy-friendly analytics library.
		</p>
	</li>
	<li>
		<p>
			If you would like your account deleted and all associated data please send an email to <a
				href="mailto:hello@{domain}?subject={name}+Account">hello@{domain}</a
			>.
		</p>
	</li>
</ul>

</section>

<style>

	section{
		margin: 0rem auto 35rem auto;
		padding: 7rem 2rem;
	}

	h1{
		font-size: 4.2rem;
	}

	@media (max-width: 680px) {
		section {
			padding: 7rem 2rem;
			margin: 0 auto;
		}
	}

</style>