<script>
	import Link from '$components/Link.svelte';
</script>

<section class="container">
	<h4>TEAM MEMBERS</h4>
	<p class="title-p">
		Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis
		eros tincidunt.
	</p>

	<div class="team">
		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev1.jpg" />
			<h5>ANTHONY and "WILEY"</h5>
			<p>CTO/CO-FOUNDER</p>
			<Link
				href={'https://twitter.com/chovy'}
				className={'team-link team-twitter'}
				src={'/images/twitter.png'}
				alt={'Twitter link'}
			/>
			<Link
				href={'https://github.com/ralyodio'}
				className={'team-link'}
				src={'/images/git.png'}
				alt={'GitHub link'}
			/>
		</div>
		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev6.jpg" />
			<h5>PHIL</h5>
			<p>CHIEF REVENUE OFFICER</p>
			<Link href={'tel:18886902011'} className={'team-phone'} alt={'1-888-690-2011'} />
			<!-- <Link href={'/'} className={'team-link'} src={'/images/git.png'} alt={'GitHub link'} /> -->
		</div>

		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev2.jpg" />
			<h5>KARINA</h5>
			<p>FRONTEND ENGINEER</p>
			<Link
				href={'https://twitter.com/DevMartinova'}
				className={'team-link team-twitter'}
				src={'/images/twitter.png'}
				alt={'Twitter link'}
			/>
			<Link
				href={'https://github.com/martinova3'}
				className={'team-link'}
				src={'/images/git.png'}
				alt={'GitHub link'}
			/>
		</div>

		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev3.jpg" />
			<h5>MARCO and "RAGNAR"</h5>
			<p>CONTENT WRITER</p>
			<Link
				href={'https://twitter.com/marcotlanzd'}
				className={'team-link team-twitter'}
				src={'/images/twitter.png'}
				alt={'Twitter link'}
			/>
			<!-- <Link href={'/'} className={'team-link'} src={'/images/git.png'} alt={'GitHub link'} /> -->
		</div>

		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev5.jpg" />
			<h5>MAYANG</h5>
			<p>SOCIAL MEDIA</p>
			<Link
				href={'https://twitter.com/NameisMayang'}
				className={'team-link team-twitter'}
				src={'/images/twitter.png'}
				alt={'Twitter link'}
			/>
			<!-- <Link href={'/'} className={'team-link'} src={'/images/git.png'} alt={'GitHub link'} /> -->
		</div>
		<div class="dev">
			<div class="photo" style="background-image: url('/images/dev7.jpg" />
			<h5>ISTI</h5>
			<p>DESIGN</p>
			<!-- <Link
					href={'https://twitter.com/marcotlanzd'}
					className={'team-link team-twitter'}
					src={'/images/twitter.png'}
					alt={'Twitter link'}
				/> -->
			<!-- <Link href={'/'} className={'team-link'} src={'/images/git.png'} alt={'GitHub link'} /> -->
		</div>
	</div>
</section>

<style>
	section {
		margin-top: 0;
		position: relative;
		padding: 0 2rem;
	}

	h4 {
		font-size: 4.2rem;
		/* padding-top: 11rem; */
		/* margin-left: 12.8rem; */
		text-align: left;
	}

	.title-p {
		text-align: left;
		max-width: 65.5rem;
		margin-left: 0;
		/* margin-left: 12.8rem; */
	}

	.team {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 5rem 4rem 8.8rem 4rem;
	}

	.dev {
		width: 33rem;
		margin-bottom: 1rem;
		text-align: center;
	}

	.dev .photo {
		width: 100%;
		height: 42rem;
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		user-select: none;
	}

	.dev h5 {
		font-size: 2.6rem;
		margin-top: 2.5rem;
		text-align: center;
	}

	.dev p {
		margin-top: 0rem;
	}

	.team {
		padding: 2rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, 33rem);
		justify-content: space-between;
		grid-gap: 2rem;
	}

	@media (max-width: 820px) {
		.dev {
			width: 100%;
			padding-bottom: 4rem;
			margin: 0 auto;
		}

		h4 {
			text-align: center;
		}

		h4,
		.title-p {
			margin-left: 0;
			text-align: center;
		}

		.team {
			width: 100%;
		}
	}

	@media (max-width: 580px) {
		.team {
			padding: 0 0 5rem;
		}

		.dev {
			width: 100%;
			padding-top: 3rem;
		}

		.dev .photo {
			width: 87%;
			margin: 0 auto;
		}

		h4 {
			padding-top: 2rem;
		}

		.title-p {
			width: 100%;
			margin: 2rem auto;
		}

		.dev {
			padding-bottom: 0;
		}
	}
</style>
