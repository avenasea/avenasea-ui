<script>
	export let className;
	export let href;
	export let content;
</script>

<a {href} class={className}>{content}</a>

<style>

	a {
		font-weight: 700;
		font-size: 2rem;
		line-height: 2rem;
		padding: 1.6rem 3rem;
		text-decoration: none;
		text-align: center;
		display: inline-block;
		background: #0D9F8E;
		border-radius: 9999px;
		color: #fff;
		text-transform: uppercase;
		transition: 0.4s all;
	}

	a:hover {
		background: #fff;
		color: #0D9F8E;
	}

	.white{
		background: #fff;
		color: #0D9F8E;
	}

	.white:hover{
		background: #0D9F8E;
		color: #fff;
	}

	.card{
		padding: 1.8rem 4rem;
		margin-top: 3.5rem;
	}

	.header{
		margin-top: -1rem;
	}


	@media (max-width: 1034px) {
		.header{
			display: none;
		}


	}

</style>
