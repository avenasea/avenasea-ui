<script>
	export let className;
	export let href;
	export let content;
</script>

<a {href} class={className}>{content}</a>

<style>
	a {
		font-family: IBM Plex Mono;
		font-weight: 700;
		font-size: 1.8rem;
		line-height: 2.9rem;
		padding: 1.5rem 3.8rem;
		text-decoration: none;
		display: inline-block;
	}

	a:hover {
		transition: 0.3s;
		background: none;
	}

	.red {
		background: #ef0c1b;
		color: #fff;
		border: 0.1rem solid #ef0c1b;
	}

	.red:hover {
		color: #ef0c1b;
	}

	.white {
		border: 0.1rem solid #fff;
		background: #fff;
		color: #152030;
	}

	.white:hover {
		color: #fff;
	}

	.border {
		border: 0.1rem solid #fff;
		color: #fff;
	}

	.border:hover {
		background: #fff;
		color: #152030;
	}

	.grey {
		border: 0.1rem solid #373737;
		background: #373737;
		color: #fff;
	}

	.grey:hover {
		border: 0.1rem solid #fff;
	}

	.black {
		background: #000000;
		border: 0.2rem solid #000;
		color: #fff;
		font-size: 2.4rem;
	}

	.black:hover {
		color: #000;
	}

	.button-hero {
		margin-left: 2.1rem;
	}

	.button-form-white {
		margin-top: 1rem;
	}

	.button-tipme {
		margin: 4rem 0;
	}

	@media (max-width: 820px) {
		.button-tipme {
			margin-top: 3.5rem;
		}

		.black {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 580px) {
		.button-hero {
			margin-left: 0;
		}

		.hero, .button-hero{
			padding: 1.5rem 2.3rem;
		}
		

		.button-form-red {
			font-size: 1.7rem;
			display: block;
			text-align: center;
		}

		.button-form-white {
			display: block;
			margin-top: 3rem;
		}
	}
</style>
