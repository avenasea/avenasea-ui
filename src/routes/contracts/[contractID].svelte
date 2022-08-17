<script context="module">
	import Contracts from '$api/contracts';

	export async function load({ fetch, params }) {
		const { contractID } = params;
		// TODO: ssr with auth routes
		//const contract = await new Contracts(fetch).getById(contractID);

		return {
			props: {
				contractID
			}
		};
	}
</script>

<script lang="ts">
	import type { Contract } from '$types/contract';
	import { onMount } from 'svelte';
	import CollapsableSection from '$components/CollapsableSection.svelte';
	import FieldContainer from '$components/contracts/FieldContainer.svelte';

	export let contractID: string;
	let contract: Contract;
	let splitObject = {};

	onMount(async () => {
		contract = await new Contracts().getById(contractID);
		contract.fields.forEach((val) => {
			if (!splitObject[val.schemaData.module]) splitObject[val.schemaData.module] = {};
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
