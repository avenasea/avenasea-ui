<script>
	import CollapsableSection from '$components/CollapsableSection.svelte';
	import DateInput from '$components/DateInput.svelte';
	import Ajv from 'ajv';
	import addFormats from 'ajv-formats';

	const ajv = new Ajv({ allErrors: true, strictSchema: false });
	addFormats(ajv);

	let schema = '';
	let schemaObject = {};
	let splitObject = {};

	let finalObject = {};
	let finalJSON = '';

	let errors = [];

	const validateAll = () => {
		try {
			errors = [];
			schemaObject = schema ? JSON.parse(schema) : {};
			finalJSON = finalObject ? JSON.stringify(finalObject) : '';
			Object.entries(schemaObject.properties).forEach(([key, val]) => {
				if (!splitObject[val.module]) splitObject[val.module] = {};
				splitObject[val.module][key] = val;
			});
			console.log(splitObject);
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
</script>

<div class="container">
	<div class="text-container">
		<label for="schema">Paste schema here:</label>
		<textarea bind:value={schema} name="schema" id="schema" cols="30" rows="10" />
		<label for="finalJSON">Object output:</label>
		<textarea bind:value={finalJSON} name="finalJSON" id="finalJSON" cols="30" rows="10" />
	</div>
	<button on:click={validateAll}>Validate</button>
	{#each errors as error}
		<p class="error">{JSON.stringify(error)}</p>
	{/each}
	<form on:submit|preventDefault={() => {}}>
		{#if schemaObject}
			<h1>Modules:</h1>
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
								<input type="number" bind:value={finalObject[fieldName]} />
							{:else if fieldValue.format == 'date'}
								<DateInput
									placeholder={new Date().toLocaleDateString()}
									format="yyyy-MM-dd"
									bind:dateString={finalObject[fieldName]}
								/>
							{:else}
								<input type="text" bind:value={finalObject[fieldName]} />
							{/if}
						</fieldset>
						<hr />
					{/each}
				</CollapsableSection>
			{/each}
		{/if}
	</form>
</div>

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
