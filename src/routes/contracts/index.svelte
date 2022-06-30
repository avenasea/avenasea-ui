<script>
	import { onMount } from 'svelte';
	import User from '$api/user';
	import Contracts from '$api/contracts';
	import { goto } from '$app/navigation';
	import Message from '$components/Message.svelte';

	let me;
	let msg;
	let type;

	let name;

	onMount(async () => {
		me = await new User(fetch).me();
	});

	const create = async () => {
		msg = '';
		type = '';
		try {
			const res = await new Contracts().create({ name });
			if (res.id) goto(`/contracts/${res.id}`);
		} catch (err) {
			msg = err.message;
			type = 'error';
		}
	};
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<Message {type} {msg} />

<form on:submit|preventDefault={create}>
	<h2>Create a new contract</h2>
	<label for="name">Contract Name</label>
	<input type="text" id="name" bind:value={name} />
	<button>Create</button>
</form>

<style>
</style>
