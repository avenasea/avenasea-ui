<div class="container">
	<div id="card-element" />
	<button on:click={onSubmit} class="pay-btn">Pay Now</button>
</div>

<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { onMount } from 'svelte';

	export let stripe = {};
	export let onSubmit;
	let elements;
	let cardElement;

	onMount(() => {
		stripeSetup();
	});

	const stripeSetup = async () => {
		const options = {
			style: {
				base: {
					lineHeight: '40px',
					iconColor: 'black',
					color: 'black',
					padding: '20',
					fontWeight: '500',
					fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
					fontSize: '18px',
					fontSmoothing: 'antialiased',
					':-webkit-autofill': {
						color: '#fce883'
					},
					'::placeholder': {
						color: '#black'
					}
				}
			}
		};
		stripe.client = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
		elements = stripe.client.elements();
		stripe.cardElement = elements.create('card', options);
		stripe.cardElement.mount('#card-element');
	};
</script>

<style>
	.container {
		background-color: #e4e4e4;
		padding: 1em;
		border-radius: 4px;
		max-width: 400px;
	}
	:global(.StripeElement) {
		border: 1px solid #a3a3a3;
		border-radius: 4px;
	}
	.pay-btn {
		margin-top: 6px;
	}
</style>
