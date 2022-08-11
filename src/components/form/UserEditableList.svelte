<script type="ts">
	export let label = '';
	export let list = [];
	export let type = 'text';
	let currentText;
	let inputEl: HTMLInputElement;

	async function addItem(e?, validate?: boolean) {
		if (validate == true && !inputEl.reportValidity()) return;
		if (
			(e && e.type == 'keypress' && e.key !== 'Enter' && e.key !== ',') ||
			list.indexOf(currentText) > -1 ||
			!currentText
		) {
			return;
		}
		if (!inputEl.checkValidity()) return;
		e && e.preventDefault();
		list.push(currentText.toLowerCase());
		list = list;
		currentText = '';
	}

	async function removeItem(word) {
		list = list.filter((item) => item !== word);
	}
</script>

<div class="field">
	<label for="text">{label}</label>
	<div class="group">
		{#if type == 'email'}
			<input
				type="email"
				id="text"
				bind:this={inputEl}
				bind:value={currentText}
				placeholder=""
				on:keypress={addItem}
				on:blur={addItem}
			/>
		{:else}
			<input
				type="text"
				id="text"
				bind:this={inputEl}
				bind:value={currentText}
				placeholder=""
				on:keypress={addItem}
				on:blur={addItem}
			/>
		{/if}
		<button type="button" on:click|preventDefault={(e) => addItem(e, true)}>Add</button>
	</div>
	<ul class="tags">
		{#each list as item}
			<li>
				<span class="word">{item}</span>
				<button type="button" on:click|preventDefault={() => removeItem(item)}>x</button>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
