<script>
	export let className;
	export let href;
	export let src;
	export let alt;
</script>

<a {href} class={className}>
	{#if src}
		<img {src} {alt} />
	{:else}
		{alt}
	{/if}
</a>

<style>
	a.team-link {
		display: inline-block;
		width: 5.2rem;
		height: 5.2rem;
		background-color: #0d9f8e;
	}

	a.team-link:hover {
		background-color: #0d9f8e;
		transition: 0.4s;
	}

	.team-link {
		padding-top: 1rem;
	}

	.team-twitter img {
		padding-top: 0.7rem;
	}

	.reddit {
		padding-top: 1rem;
		padding-left: 1.1rem;
	}

	.telegram {
		padding-top: 1.6rem;
		padding-left: 1rem;
	}

	.twitter {
		padding-top: 1.5rem;
		padding-left: 1.4rem;
	}

	.git-hub {
		padding-top: 1.1rem;
		padding-left: 1.2rem;
	}

	.team-phone {
		color: #fff;
	}
	.email {
		padding-top: 1.5rem;
		padding-left: 1.2rem;
	}
</style>
