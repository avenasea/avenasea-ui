<script>
	const name = import.meta.env.VITE_META_NAME;
	const domain = import.meta.env.VITE_META_DOMAIN;
	const twitter = import.meta.env.VITE_META_TWITTER;
	import Link from './Link.svelte';
</script>

<footer>
	<div class="footer container">
		<div class="logo">
			<a href="/" id="logo"><img src="/images/logo.svg" /></a>
			<p class="footer-text">All rights reserved.</p>
			<p>
				Say <a href="mailto:hello@{domain}?subject={name}">hello@{domain}</a>
			</p>
			<p>Call us at <a href="tel:+1-888-690-2204">+1-888-690-2204</a></p>
			<p>
				<small>&copy; 2021-2024 {name}, Inc. </small>
			</p>
		</div>
		<div class="footer-links">
			<div class="useful-links">
				<h4>Useful links</h4>
				<p><a href="/terms">Terms and conditions</a></p>
				<p><a href="/privacy">Privacy Policy</a></p>
			</div>
			<div class="follow-us">
				<h4>Follow us</h4>
				<div class="links">
					<Link
						href={'https://twitter.com/avenasea'}
						className={'twitter footer'}
						src={'/images/twitter.svg'}
						alt={'Twitter link'}
					/>
					<Link
						href={'/'}
						className={'facebook footer'}
						src={'/images/facebook.svg'}
						alt={'Facebook link'}
					/>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		background: rgba(0, 0, 0, 0.6);
		text-align: center;
		padding: 4.5rem 2rem 5.5rem 2rem;
		text-align: left;
		/* margin-top: 4rem; */
	}

	.footer {
		display: flex;
		justify-content: space-between;
	}

	#logo img {
		width: 29rem;
		max-width: 100%;
	}

	.links {
		display: flex;
		justify-content: space-between;
	}

	h4 {
		font-size: 2.4rem;
	}

	.useful-links,
	.follow-us {
		margin-right: 9rem;
	}

	.useful-links a {
		color: #99aaff;
	}

	.links {
		margin-top: 2rem;
	}

	.footer-links {
		display: flex;
		justify-content: space-between;
	}

	.footer-text {
		width: 34rem;
		max-width: 100%;
		font-size: 1.4rem;
		margin-top: 5px;
	}
	.logo p:last-child {
		margin-top: -1.3rem;
	}

	footer a {
		color: #fff;
	}

	@media (max-width: 780px) {
		.footer {
			flex-direction: column;
		}

		.footer-links {
			margin-top: 4rem;
		}

		.follow-us,
		.useful-links {
			margin: 0;
		}
	}
</style>
