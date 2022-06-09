<script>
	import Ajv from 'ajv';

	const ajv = new Ajv({ allErrors: true, strictSchema: false });

	let schema = '';
	let schemaObject = {};

	let finalObject = {};
	let finalJSON = '';

	let errors = [];

	const validateAll = () => {
		try {
			errors = [];
			schemaObject = schema ? JSON.parse(schema) : {};
			finalJSON = finalObject ? JSON.stringify(finalObject) : '';
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
		{#if schemaObject.properties}
			{#each Object.entries(schemaObject.properties) as [key, val]}
				<fieldset>
					<label for="">{key}</label>
					{#if errors.filter((e) => e.instancePath?.includes(key)).length > 0}
						<div class="error">{errors.filter((e) => e.instancePath.includes(key))[0].message}</div>
					{/if}
					{#each Object.entries(val) as [key, val]}
						<p>{key}: {val}</p>
					{/each}
					{#if val.type == 'number'}
						<input type="number" bind:value={finalObject[key]} />
					{:else}
						<input type="text" bind:value={finalObject[key]} />
					{/if}
				</fieldset>
			{/each}
		{/if}
	</form>
</div>

<style>
	fieldset {
		margin: 1em 0;
		padding: 0.5em;
		border-radius: 8px;
		border: 2px #2c2ca2 solid;
	}
	.container {
		margin: 4em;
	}
	.text-container {
		display: flex;
	}
</style>
