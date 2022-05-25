<script>
	const name = import.meta.env.VITE_META_NAME;
	const domain = import.meta.env.VITE_META_DOMAIN;
	const twitter = import.meta.env.VITE_META_TWITTER;
</script>
<footer>
	<p>
		Say <a href="mailto:hello@{domain}?subject={name}">hello@{domain}</a> -
		<a href="https://twitter.com/{twitter}">@{twitter}</a>
	</p>
	<p>
		<small
			>&copy; 2021-2022 {name} - <a href="/privacy">Privacy</a> - <a href="/terms">Terms</a></small
		>
	</p>
</footer>

<style>
	footer {
		text-align: center;
		margin-top: 4rem;
	}
</style>
