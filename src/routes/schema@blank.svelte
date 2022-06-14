<script>
	import CollapsableSection from '$components/CollapsableSection.svelte';
	import Ajv from 'ajv';

	const ajv = new Ajv({ allErrors: true, strictSchema: false });

	let schema = '';
	let schemaObject = {};

	let finalObject = {
		modules: {}
	};
	let finalJSON = '';

	let errors = [];

	const validateAll = () => {
		try {
			errors = [];
			schemaObject = schema ? JSON.parse(schema) : {};
			finalJSON = finalObject ? JSON.stringify(finalObject) : '';
			for (const [key] of Object.entries(schemaObject.properties.modules.properties)) {
				if (!finalObject.modules[key]) finalObject.modules[key] = {};
			}
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
		{#if schemaObject?.properties?.modules}
			<h1>Modules:</h1>
			{#each Object.entries(schemaObject.properties.modules.properties) as [moduleName, moduleValue]}
				<CollapsableSection collapsed={true} heading={moduleName}>
					{#each Object.entries(moduleValue.properties) as [fieldName, fieldValue]}
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
								<input type="number" bind:value={finalObject.modules[moduleName][fieldName]} />
							{:else}
								<input type="text" bind:value={finalObject.modules[moduleName][fieldName]} />
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
