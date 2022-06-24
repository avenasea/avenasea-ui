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
	}

	a:hover {
		transition: 0.4s;
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

	.form{
		max-width: 100%;
		margin: 0 auto;
	}

	/* .header{
		margin-top: 2rem;
	} */


	@media (max-width: 1034px) {
		.header{
			display: none;
		}

		/* .form{
			margin: 0 auto;
		} */

	}

</style>
