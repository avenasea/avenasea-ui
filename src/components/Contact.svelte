<script>
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Message from './Message.svelte';

	export let className;

	let user = {};
	let msg;
	let type;

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
			try {
				msg = '';
				type = '';
				const res = await new User(fetch).newsletter(user);
				type = 'success';
				msg = 'You have been subscribed!';
				user = {};
			} catch (err) {
				type = 'error';
				msg = err;
				console.error(err);
			}
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

		<form class="newsletter-block">
			{#if msg}
				<Message {type} {msg} />
			{/if}

				<!-- <label for="input-name">FIRST NAME</label> -->
				<input
					id="input-name"
					class="_req input"
					placeholder="First name"
					bind:value={user.name}
					style={styles_name ? styles : ''}
				/>

				<!-- <label for="input-email">EMAIL ADDRESS</label> -->
				<input
					id="input-email"
					class="_req _email input"
					placeholder="Email"
					bind:value={user.email}
					style={styles_mail ? styles : ''}
				/>

			<button type="submit" value="Subscribe now">Subscribe now</button>

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

	button{
		font-family: Work Sans;
		font-weight: 700;
		font-size: 2rem;
		line-height: 2rem;
		padding: 1.6rem 3rem;
		text-decoration: none;
		text-align: center;
		display: inline-block;
		background: #0D9F8E;
		border-radius: 9999px;
		border: none;
		color: #fff;
		text-transform: uppercase;
		transition: 0.4s all;
		max-width: 100%;
		margin: 0 auto;
	}

	button:hover {
		background: #fff;
		color: #0D9F8E;
	}

	.contact-page{
		padding: 27rem 2rem 20rem 2rem;
    	margin-top: -18rem;
	}

	.blog{
		background: none;
		padding: 23rem 2rem 10rem 2rem;
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
		box-shadow: 0 0 1.5rem #7a956b;
		/* border: 1px solid #ddd446; */
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
		padding: 1.8rem 2.8rem;
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

		button{
			margin: 1rem auto 0 auto;
		}

		.contact-page{
			padding: 20rem 2rem;
			margin-top: 0;
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
		.contact-page{
			padding: 15rem 2rem;
		}

	}
</style>
