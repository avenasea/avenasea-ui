<script lang="ts">
	import type { Contract, ContractField } from '$types/contract';
	import { onMount } from 'svelte';
	import CollapsableSection from '$components/CollapsableSection.svelte';
	import FieldContainer from '$components/contracts/FieldContainer.svelte';
	import { getStatusSummary } from '$lib/getStatusSummary';
	import Contracts from '$api/contracts';

	export let data;
	const { contractID } = data;
	let contract: Contract;
	let splitObject = {};

	let totalApprovedFields = 0;
	$: totalApprovedFields = contract?.fields?.filter(
		(val) => val.statusSummary == 'fullyApproved'
	).length;

	onMount(async () => {
		contract = await new Contracts().getById(contractID);
		contract.fields.forEach((val) => {
			if (!splitObject[val.schemaData.module]) splitObject[val.schemaData.module] = {};
			val.statusSummary = getStatusSummary(val, contract.parties);
			splitObject[val.schemaData.module][val.fieldName] = val;
		});
	});
</script>

{#if contract}
	<div class="container">
		<form on:submit|preventDefault={() => {}}>
			<h1>Contract name: {contract.name}</h1>
			<h3>Parties:</h3>
			<ul>
				{#each contract.parties as user}
					<li>{user.username}</li>
				{/each}
			</ul>
			<h3>Fields Approved: {totalApprovedFields}/{contract.fields.length}</h3>
			<h3>Modules:</h3>
			{#each Object.entries(splitObject) as [moduleName, moduleValue]}
				<CollapsableSection collapsed={true} heading={moduleName}>
					{#each Object.entries(moduleValue) as [_, fieldData]}
						<FieldContainer {fieldData} bind:contract />
					{/each}
				</CollapsableSection>
			{/each}
		</form>
	</div>
{/if}

<style>
	.container {
		margin: 4em;
	}
</style>
