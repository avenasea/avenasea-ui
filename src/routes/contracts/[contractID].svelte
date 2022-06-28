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
	import DateInput from '$components/DateInput.svelte';
	import Ajv from 'ajv';
	import addFormats from 'ajv-formats';

	export let contractID: string;
	let contract: Contract;
	let schemaObject: Contract['JSONschema'];
	let splitObject = {};
	let finalObject = {};
	let errors = [];

	const ajv = new Ajv({ allErrors: true, strictSchema: false });
	addFormats(ajv);

	const validateAll = () => {
		try {
			errors = [];
			const validate = ajv.compile(schemaObject);
			const valid = validate(finalObject);

			if (!valid) {
				console.log(validate.errors);
				errors = validate.errors;
			}
		} catch (error) {
			errors.push(error.message);
			console.error(error);
		}
	};

	let debounceTimeout;
	const debounce = () => {
		clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			validateAll();
		}, 750);
	};

	onMount(async () => {
		contract = await new Contracts().getById(contractID);
		schemaObject = contract.JSONschema;
		Object.entries(schemaObject.properties).forEach(([key, val]: any) => {
			if (!splitObject[val.module]) splitObject[val.module] = {};
			splitObject[val.module][key] = val;
		});
	});
</script>

{#if contract}
	<div class="container">
		{#each errors as error}
			<p class="error">{JSON.stringify(error)}</p>
		{/each}
		<form on:submit|preventDefault={() => {}}>
			{#if schemaObject}
				<h1>Contract name: {contract.name}</h1>
				<h3>Modules:</h3>
				{#each Object.entries(splitObject) as [moduleName, moduleValue]}
					<CollapsableSection collapsed={true} heading={moduleName}>
						{#each Object.entries(moduleValue) as [fieldName, fieldValue]}
							<fieldset>
								<label for="">{fieldName}</label>
								{#if errors.filter((e) => e.instancePath?.includes(fieldName)).length > 0}
									<div class="error">
										{errors.filter((e) => e.instancePath.includes(fieldName))[0].message}
									</div>
								{/if}
								{#each Object.entries(fieldValue) as [key, val]}
									<p>{key}: {val}</p>
								{/each}
								{#if fieldValue.type == 'number'}
									<input type="number" bind:value={finalObject[fieldName]} on:keyup={debounce} />
								{:else if fieldValue.format == 'date'}
									<DateInput
										placeholder={new Date().toISOString().split('T')[0]}
										format="yyyy-MM-dd"
										bind:dateString={finalObject[fieldName]}
									/>
								{:else}
									<input type="text" bind:value={finalObject[fieldName]} on:keyup={debounce} />
								{/if}
							</fieldset>
							<hr />
						{/each}
					</CollapsableSection>
				{/each}
			{/if}
		</form>
	</div>
{/if}

<style>
	fieldset {
		margin: 1em 0;
		padding: 0.5em;
		border: none;
	}
	hr {
		border-color: #2c2ca2;
	}
	.container {
		margin: 4em;
	}
	.text-container {
		display: flex;
	}
</style>
