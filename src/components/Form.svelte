<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	const styles = 'box-shadow: 0 0 1.5rem red';

	let styles_name = false;
	let styles_mail = false;

	onMount(() => {
		const form = document.querySelector('form.newsletter-block');
		form.addEventListener('submit', formSend);
	});

	// form.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(e.target);

		// let formData = new FormData(form)

		if (error === 0) {
		} else {
			alert('Fill in the required field');
		}
	}

	function formValidate() {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		styles_mail = false;
		styles_name = false;
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];

			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
					styles_mail = true;
				}
			} else {
				console.log(input.value.length);
				styles_name = true;
				// if (input.value.length) {

				// } else {
				// 	// formAddError(input);
				// 	error++;
				// 	styles_name = true;
				// }
			}
		}

		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
</script>

<section id="newsletter">
	<div class="container newsletter">
		<div class="newsletter-block">
			<h4>Get the latest news about <span>$HSKO Token</span></h4>

			<p>
				Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis
				eros tincidunt tellus, quis mattis nisl erat et orci. Praesent id sem quis quam aliquet
				luctus.
			</p>

			<Button
				href={'https://app.uniswap.org/#/swap'}
				className={'red button-form-red'}
				content={'BUY $HSKO ON UNISWAP'}
			/>
		</div>

		<form class="newsletter-block">
			<div class="input">
				<label for="#input-name">FIRST NAME</label>
				<input
					id="input-name"
					class="_req"
					placeholder="John Doe"
					style={styles_name ? styles : ''}
				/>
			</div>

			<div class="input">
				<label for="#input-email">EMAIL ADDRESS</label>
				<input
					id="input-email"
					class="_req _email"
					placeholder="hsko.office@gmail.com"
					style={styles_mail ? styles : ''}
				/>
			</div>

			<button type="submit" value="GET THE LATEST NEWS">GET THE LATEST NEWS</button>

			<!-- <Button href={"/"} className={"white button-form-white"} content={'GET THE LATEST NEWS'} /> -->
		</form>
	</div>
</section>

<style>
	section {
		padding: 10rem 0;
		background: url(/images/texture-bg-1-min.jpg) no-repeat;
		background-size: cover;
		text-align: left;
	}

	h4 {
		font-size: 4.2rem;
	}

	label {
		font-size: 1.4rem;
		color: #8794a7;
	}

	input {
		width: 100%;
		/* width: 62rem; */
		padding: 2.2rem 1.7rem;
		font-family: 'IBM Plex Mono';
		font-size: 1.6rem;
		color: #fff;
		background: #000;
		border: none;
		margin-top: 1rem;
	}

	input:focus {
		box-shadow: 0 0 15 #7a956b;
	}

	.input {
		position: relative;
		margin: 2rem 0;
	}

	form {
		border: none;
	}

	.newsletter {
		display: flex;
		justify-content: space-between;
	}

	.newsletter-block:first-child {
		width: 59%;
		max-width: 67rem;
		padding-right: 2rem;
	}

	.newsletter-block {
		width: 41%;
		max-width: 46rem;
	}

	.newsletter-block p {
		margin-bottom: 4.5rem;
	}

	button {
		font-family: IBM Plex Mono;
		font-weight: 700;
		font-size: 1.8rem;
		line-height: 2.9rem;
		padding: 1.5rem 3.8rem;
		text-decoration: none;
		display: inline-block;
		border: 0.1rem solid #fff;
		background: #fff;
		color: #152030;
		margin-top: 1rem;
	}

	button:hover {
		background: none;
		color: #fff;
	}

	@media (max-width: 820px) {
		section {
			margin: 0;
			padding: 9rem 4rem;
		}

		h4 {
			font-size: 3.8rem;
		}

		p {
			margin-top: 2.6rem;
		}

		a {
			font-size: 1.8rem;
			padding: 1.5rem 3.7rem;
			margin: 0;
		}

		.newsletter {
			flex-direction: column;
		}

		.newsletter-block:first-child,
		.newsletter-block {
			width: 100%;
			max-width: 100%;
		}
	}

	@media (max-width: 580px) {
		section{
			padding: 8rem 1.5rem;
		}

		input {
			width: 100%;
			padding: 1.5rem;
			font-size: 1.4rem;
			margin-top: 0.7rem;
		}

		.input {
			margin: 2rem 0;
		}

		.newsletter-block {
			width: 100%;
			padding: 0;
		}

		button {
			width: 100%;
		}
	}
</style>
