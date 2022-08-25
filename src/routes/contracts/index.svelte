<script lang="ts">
	import { onMount } from 'svelte';
	import Contracts from '$api/contracts';
	import { goto } from '$app/navigation';
	import Message from '$components/Message.svelte';
	import UserEditableList from '$components/form/UserEditableList.svelte';
	import type { Contract } from '$types/contract';

	let msg;
	let type;

	let newContractData: Record<string, any> = {};
	let contracts: Pick<Contract, 'id' | 'name' | 'created_at'>[] = [];

	onMount(async () => {
		const res = await new Contracts().getMyContracts();
		contracts = res;
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

<h2>My Contracts:</h2>
{#if contracts.length}
	<ul>
		{#each contracts as contract}
			<li>
				<a href={`/contracts/${contract.id}`}>
					{contract.name} - {new Date(contract.created_at).toLocaleDateString()}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<p>No contracts yet</p>
{/if}

<form on:submit|preventDefault={create}>
	<h2>Create a new contract</h2>
	<label for="name">Contract Name</label>
	<input type="text" id="name" bind:value={newContractData.name} />
	<UserEditableList label="Add user by email:" type="email" bind:list={newContractData.parties} />
	<button>Create</button>
</form>

<style>
</style>
