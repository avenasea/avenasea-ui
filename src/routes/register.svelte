<script lang="ts">
	import { goto } from '$app/navigation';
	import User from '../api/user';
	import { affiliate, location } from '$stores/user.js';
	import { getLocation } from '$lib/location';
	import { onMount } from 'svelte';
	import Password from '$components/Password.svelte';

	let aff = $affiliate;

	const user = {
		contactme: true,
		affiliate: aff,
		location: '',
		password: '',
		username: '',
		email: '',
		phone: ''
	};

	async function onSignup() {
		if (!user.email || user.email == '' || !user.password || user.password == '') return;
		try {
			const res = await new User(fetch).register(user);
			goto('/login');
		} catch (err) {
			console.error(err);
		}
	}

	function validateUsername(e) {
		user.username = user.username.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	}
	onMount(async () => {
		getLocation(() => {
			user.location = $location;
			console.log(user);
		});
	});
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<form on:submit|preventDefault={onSignup}>
	<div class="field">
		<label for="email"> Email: </label>
		<input type="email" id="email" bind:value={user.email} />
	</div>
	<div class="field">
		<label for="username"> Username:</label>
		<input type="username" id="username" bind:value={user.username} on:keyup={validateUsername} />
	</div>
	<div class="field">
		<label for="phone"> Phone Number:</label>
		<input type="tel" id="phone" bind:value={user.phone} />
	</div>
	<Password bind:finalPassword={user.password} />
	<div class="field">
		<label for="location"> Location:</label>
		<input type="text" id="location" bind:value={user.location} />
	</div>
	<div class="field">
		<input type="checkbox" id="contactme" bind:checked={user.contactme} />
		<label for="contactme">Share my info with hiring companies when there is a matching job</label>
	</div>

	<footer>
		<button>Signup</button>
	</footer>
</form>

<style>
</style>
