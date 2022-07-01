<script>
	import Button from './Button.svelte';

	export let className;

	import { onMount } from 'svelte';

	const styles = 'box-shadow: 0 0 15px red';

	let styles_name = false;
	let styles_mail = false;

	onMount(() => {
		const form = document.querySelector('form.newsletter-block');
		// form.addEventListener("submit", formSend);
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

<section id="contact" class={className}>
	<div class="form container">
		<div class="form-text">
			<h3 class="color-heading">JOIN OUR EMAIL LIST</h3>
			<h2>To get the latest updates subscribe now!</h2>
			<p>Get periodic updates about avenasea and when we officially launch.</p>
		</div>

		<form>
			<input id="input-name" class="_req  input" placeholder="First name" />

			<input id="input-email" class="_req _email input" placeholder="Email address" />

			<Button className={'form'} content={'Subscribe now'} href={'/'} />
		</form>
	</div>
</section>

<style>
	section {
		margin-top: -13.2rem;
		padding: 26rem 2rem 50rem 2rem;
		background: url(/images/Group.png) no-repeat;
		background-position-x: -10.5rem;
	}

	.form-text {
		text-align: center;
		width: 67rem;
		margin: 0 auto;
	}

	form {
		width: 100%;
		margin-top: 5rem;
		display: flex;
		justify-content: space-between;
	}

	input:focus {
		box-shadow: 0 0 15 #7a956b;
	}

	.form {
		background: url(/images/newsletter-bg.svg) no-repeat;
		background-size: cover;
		padding: 7.2rem 6rem;
		border-radius: 20px;
		border: 1px solid #354baf;
		box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
	}

	h2 {
		margin-top: 0.4rem;
	}

	form .input {
		background: #0a1134;
		color: #fff;
		border-radius: 15rem;
		border: none;
		font-size: 1.8rem;
		padding: 1.7rem 2.8rem;
		width: 38rem;
		max-width: 100%;
		/* display: block; */
		/* margin: 0 20px; */
	}

	input {
		margin: 0 auto;
	}

	.background-vector {
		position: absolute;
		top: 10px;
		left: 0;
	}

	.contact-news {
		background: none;
	}

	@media (max-width: 1045px) {
		.form-text {
			width: 100%;
		}

		h2 {
			margin-top: 1.4rem;
		}

		form {
			flex-direction: column;
			margin-top: 1rem;
		}

		input {
			max-width: 100%;
		}

		input {
			margin: 1rem auto;
		}
	}

	@media (max-width: 680px) {
		section {
			margin-top: -23rem;
		}

		.form {
			width: 100%;
			padding: 4rem 2rem;
		}
	}
</style>
