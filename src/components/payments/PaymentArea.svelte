<script>
	import Stripe from '$components/payments/Stripe.svelte';
	import Coinpayments from '$components/payments/Coinpayments.svelte';

	export let onSubmit = () => {};
	export let amount = 0;
	export let planName;
	export let stripe;
	export let planID;
	export let userID;
	export let paymentType;
	let payWith;
</script>

{#if !paymentType}
	<button on:click={() => (payWith = 'card')}>Pay With Card</button>
	<button on:click={() => (payWith = 'crypto')}>Pay With Crypto</button>
{/if}

{#if payWith == 'card' || paymentType == 'card'}
	<Stripe bind:stripe {onSubmit} />
{/if}
{#if payWith == 'crypto' || paymentType == 'crypto'}
	<Coinpayments itemName={planName} {amount} {planID} {userID} />
{/if}
