<script>
	import { onMount } from 'svelte';
	import User from '$api/user';
	import Contracts from '$api/contracts';
	import { goto } from '$app/navigation';
	import Message from '$components/Message.svelte';
	import UserEditableList from '$components/form/UserEditableList.svelte';

	let me;
	let msg;
	let type;

	let newContractData = {};

	onMount(async () => {
		me = await new User(fetch).me();
	});

	const create = async () => {
		msg = '';
		type = '';
		try {
			const res = await new Contracts().create(newContractData);
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
	<input type="text" id="name" bind:value={newContractData.name} />
	<UserEditableList label="Add user by email:" type="email" bind:list={newContractData.parties} />
	<button>Create</button>
</form>

<style>
</style>
