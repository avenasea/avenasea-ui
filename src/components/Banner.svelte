<script>
	import About from './About.svelte';
	import Button from './Button.svelte';
</script>

<section>
	<div class="banner">
		<div class="banner-text">
			<h2 class="color-heading">Hotels and companies</h2>
			<h1>Corporate travel simplified</h1>
			<p>
				Use our custom negotiation interface for defining corporate travel agreements between
				corporations and hotels.
			</p>
			<Button className={''} content={'Subscribe'} href={'#subscribe'} />
		</div>
		<img src="/images/hotel-1.svg" />
	</div>

	<About />
</section>

<style>
	section {
		margin-top: -7.5rem;
		background: url(/images/Avenasea-BG1.jpg);
	}

	.color-heading {
		padding-top: 20.5rem;
	}

	h1 {
		font-size: 7.4rem;
		line-height: 7.4rem;
		font-weight: 700;
		margin-top: -1.8rem;
	}

	p {
		margin: 2rem 0 4.3rem 0;
	}

	.banner {
		width: 133rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.banner-text {
		width: 67rem;
		max-width: 60%;
		margin-left: 10rem;
	}

	img {
		width: 51.4rem;
		margin-top: 12rem;
	}
</style>
