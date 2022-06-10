<script>
	const name = import.meta.env.VITE_META_NAME;
	const domain = import.meta.env.VITE_META_DOMAIN;
	const twitter = import.meta.env.VITE_META_TWITTER;
</script>

<footer>
	<div class="footer">
		<div class="logo">
			<p>
				Say <a href="mailto:hello@{domain}?subject={name}">hello@{domain}</a> -
				<a href="https://twitter.com/{twitter}">@{twitter}</a>
				Phone: <a href="tel:18886902204">1-888-690-2204</a>
			</p>
			<p>
				<small
					>&copy; 2021-2022 {name} - <a href="/privacy">Privacy</a> -
					<a href="/terms">Terms</a></small
				>
			</p>
		</div>
		<div class="useful-links">
			<h4>Useful links</h4>
			<a>Terms and conditions</a>
			<a>Privacy Policy</a>
		</div>
		<div class="follow-us">
			<h4>Follow us</h4>
			<div class="links">
				<div class="social-link" />
				<div class="social-link" />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: #000000;
		text-align: center;
		padding: 3rem 0;
		/* margin-top: 4rem; */
	}

	.footer {
		width: 130rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.links {
		display: flex;
		justify-content: space-between;
	}

	.social-link {
		border-radius: 50%;
		background-color: #0d9f8e;
		padding: 1.9rem 1.7rem;
	}
</style>
