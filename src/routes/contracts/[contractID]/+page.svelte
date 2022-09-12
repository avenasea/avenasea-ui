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
	let fieldFilter: ContractField['statusSummary'];
	let searchText;
	let collapseModules = true;

	let totalApprovedFields = 0;
	$: totalApprovedFields = contract?.fields?.filter(
		(val) => val.statusSummary == 'fullyApproved'
	).length;

	onMount(async () => {
		contract = await new Contracts().getById(contractID);
		contract.fields = contract.fields.map((val) => {
			val.statusSummary = getStatusSummary(val, contract.parties);
			return val;
		});
		filterFields();
	});

	$: filterFields(searchText, fieldFilter);

	const filterFields = (..._) => {
		if (!contract?.fields) return;
		splitObject = {};
		let filtered = contract.fields.filter(
			(val) =>
				(fieldFilter ? val.statusSummary == fieldFilter : true) &&
				(searchText ? val.fieldName.toLowerCase().includes(searchText.toLowerCase()) : true)
		);
		filtered.forEach((val) => {
			if (!splitObject[val.schemaData.module]) splitObject[val.schemaData.module] = {};
			splitObject[val.schemaData.module][val.fieldName] = val;
		});
		collapseModules = filtered.length < 100 ? false : true;
	};
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
			<br />
			<h3>Modules:</h3>
			<label class="filter-label" for="filter">Filter:</label>
			<select class="select" name="filter" id="filter" bind:value={fieldFilter}>
				<option value={undefined}>None</option>
				<option value="fullyApproved">Fully Approved</option>
				<option value="awaitingMe">Awaiting Me</option>
				<option value="awaitingOther">Awaiting Other</option>
				<option value="rejectedByMe">Rejected By Me</option>
				<option value="rejectedByOther">Rejected By Other</option>
				<option value="unset">Field Value Unset</option>
			</select>
			<label class="filter-label" for="search">Search:</label>
			<input type="text" name="search" id="search" bind:value={searchText} />
			<button class="text-btn" on:click={() => (searchText = undefined)}>clear</button>
			{#if Object.keys(splitObject).length}
				{#each Object.entries(splitObject) as [moduleName, moduleValue]}
					<CollapsableSection collapsed={collapseModules} heading={moduleName}>
						{#each Object.entries(moduleValue) as [_, fieldData]}
							<FieldContainer {fieldData} bind:contract />
						{/each}
					</CollapsableSection>
				{/each}
			{:else}
				<p>No fields matching the filter</p>
			{/if}
		</form>
	</div>
{/if}

<style>
	.container {
		margin: 4em;
	}
	.filter-label {
		display: inline;
	}
</style>
