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
		border-radius: 50%;
		transition: 0.4s all;
	}

	a.team-link:hover {
		background-color: #0d9f8e;
	}

	.team-link {
		padding-top: 1rem;
	}

	.team-twitter img {
		padding-top: 0.7rem;
	}
	.team-phone {
		color: #fff;
	}
	.email {
		padding-top: 1.5rem;
		padding-left: 1.2rem;
	}
	
	.footer{
        background-color: #0D9F8E;
        /* border: 1px solid #0D9F8E; */
        margin: 0 2rem 0 0;
		border-radius: 50%;
		transition: 0.3s all;
    }

    .footer:hover{
		background: none;
        /* border: 1px solid #fff; */
    }

    .twitter{
        padding: 1.9rem;
    }

    .facebook{
        padding: 1.6rem 2.4rem;
    }

    .git{
        padding: 1.1rem;
    }
</style>
