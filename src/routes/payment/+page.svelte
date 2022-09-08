<script>
	import Payments from '$api/payments';
	import { goto } from '$app/navigation';
	import PaymentArea from '$components/payments/PaymentArea.svelte';
	import { userStore } from '$stores/user';

	export let data;
	let { planID, type } = data;
	let stripe;

	const plans = {
		1: {
			name: '1 job search profile',
			price: 5,
			monthly: true
		},
		2: {
			name: '5 job search profiles',
			price: 20,
			monthly: true
		},
		3: {
			name: 'Lifetime membership: unlimited job search profiles',
			price: 400,
			monthly: false
		},
		4: {
			name: '1 candidate search profile',
			price: 50,
			monthly: true
		},
		5: {
			name: '5 candidate search profiles',
			price: 200,
			monthly: true
		},
		6: {
			name: 'Lifetime membership: unlimited candidate search profiles',
			price: 4000,
			monthly: false
		}
	};

	const createSubscription = async () => {
		try {
			const res = await new Payments(fetch).createSubscription(planID);

			stripe.client
				.confirmCardPayment(res.clientSecret, {
					payment_method: {
						card: stripe.cardElement
					}
				})
				.then((result) => {
					if (result.error) {
						throw result.error.message;
					} else {
						// Successful subscription payment
						goto('/payment/success');
						console.log('success');
					}
				});
		} catch (err) {
			// TODO: don't use alert
			alert(err);
			console.error(err);
		}
	};
</script>

<div>
	{#if !$userStore}
		<a href="/login">Please login to purchase a subscription</a>
	{:else if $userStore?.status == 'active'}
		<p>You already have an active subscription</p>
	{:else}
		<h2>You are purchasing</h2>
		<h3>Plan name:</h3>
		<p>{plans[planID].name}</p>
		<h3>Price:</h3>
		<p>${plans[planID].price} {plans[planID].monthly ? 'Per Month' : 'One Time Payment'}</p>
		<PaymentArea
			bind:stripe
			onSubmit={createSubscription}
			amount={plans[planID].price}
			planName={plans[planID].name}
			{planID}
			userID={$userStore.id}
			paymentType={type}
		/>
	{/if}
</div>

<style>
</style>
