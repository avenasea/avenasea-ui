<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import User from '$api/user';
	import Message from '$components/Message.svelte';
	import { getLocation } from '$lib/location';
	import { location } from '$stores/user';
	import Payments from '$api/payments';

	let me = {};
	let type;
	let msg;

	async function onUpdate() {
		try {
			msg = '';
			type = '';
			const res = await new User(fetch).update(me);
			type = 'success';
			msg = 'Settings have been updated';
		} catch (err) {
			type = 'error';
			msg = 'Something went wrong';
			console.error(err);
		}
	}

	onMount(async () => {
		me = await new User(fetch).me();
		getLocation(() => {
			me.location = $location;
			console.log(me);
		});
	});

	const cancelSubscription = async () => {
		try {
			const res = await new Payments(fetch).cancelSubscription();
			if (res.success == true) me.cancel_at_period_end = 1;
		} catch (err) {
			type = 'error';
			msg = 'Something went wrong';
			console.log(err);
		}
	};
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<h1>Billing</h1>
{#if me.plan_name}
	<p>Plan name: {me.plan_name}</p>
	<p>Renewal Date: {new Date(me.renewal_date * 1000).toLocaleDateString()}</p>
	<p>Status: {me.status}</p>
	{#if me.payment_type == 'coinpayments'}
		<a href={`/payment?planID=${me.plan_id}&type=crypto`}>Add more time</a>
	{/if}
	{#if me.status == 'active' && !me.cancel_at_period_end && me.billing_frequency == 'monthly' && me.payment_type == 'stripe'}
		<button on:click={cancelSubscription}>Cancel Subscription</button>
	{:else if me.status != 'canceled' && me.cancel_at_period_end}
		<p>Plan will cancel at renewal date</p>
	{/if}
{:else}
	<a href="/pricing">Select a plan here</a>
{/if}

<h1>Settings</h1>

{#if msg}
	<Message {type} {msg} />
{/if}

<form on:submit|preventDefault={onUpdate}>
	<div class="field">
		<label for="email"> Email ({me.email}): </label>
		<input type="email" id="email" bind:value={me.newEmail} />
	</div>
	<div class="field">
		<label for="username"> Username ({me.username}):</label>
		<input type="username" id="username" bind:value={me.newUsername} />
	</div>
	<div class="field">
		<label for="phone"> Phone Number ({me.phone || 'none'}):</label>
		<input type="tel" id="phone" bind:value={me.newPhone} />
	</div>
	<div class="field">
		<label for="password">Change Password:</label>
		<input type="password" id="password" bind:value={me.newPassword} />
	</div>
	<div class="field">
		<label for="location"> Location:</label>
		<input type="text" id="location" bind:value={me.location} />
	</div>

	<div class="field">
		<input type="checkbox" id="contactme" bind:checked={me.contactme} />
		<label for="contactme">Share my info with employers when there is a matching job</label>
	</div>
	<footer>
		<button>Update</button>
	</footer>
</form>
