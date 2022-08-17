<script lang="ts">
	import type { Contract, ContractField } from '$types/contract';
	import CollapsableSection from '$components/CollapsableSection.svelte';
	import HistorySection from '$components/contracts/HistorySection.svelte';
	import CommentSection from '$components/contracts/CommentSection.svelte';
	import DateInput from '$components/DateInput.svelte';
	import Contracts from '$api/contracts';
	import schemaValidation from '$lib/schemaValidation';

	export let contract: Contract;
	export let fieldData: ContractField;
	let newFieldValue: unknown;
	let error: true | string;

	let loaded = false;
	const triggerLoad = async () => {
		if (loaded) return;
		const res = await new Contracts().getFieldByName(contract.id, fieldData.fieldName);
		fieldData = res;
		loaded = true;
	};

	let debounceTimeout;
	const debounce = () => {
		clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			validate();
		}, 750);
	};

	const updateField = async () => {
		clearTimeout(debounceTimeout);
		if (validate() !== true) return;
		try {
			const res = await new Contracts().updateField(contract.id, {
				fieldName: fieldData.fieldName,
				value: newFieldValue
			});
			fieldData.changeHistory = [...fieldData.changeHistory, res];
			fieldData.currentValue = res.changedTo;
			fieldData.approvalStatus = {};
		} catch (err) {
			console.error(err);
			// msg = err.message;
			// type = 'error';
		}
	};

	const updateApproval = async (choice: 'approved' | 'rejected') => {
		try {
			const res = await new Contracts().approveField(contract.id, {
				fieldName: fieldData.fieldName,
				choice
			});
			fieldData.approvalStatus[res.userID] = { choice };
		} catch (err) {
			console.error(err);
			// msg = err.message;
			// type = 'error';
		}
	};

	const validate = () => {
		const valid = schemaValidation(fieldData.schemaData, newFieldValue);
		error = valid === true ? null : valid;
		return valid;
	};
</script>

<CollapsableSection
	collapsed={true}
	heading={fieldData.fieldName}
	on:click={triggerLoad}
	on:hover={() => {
		/*triggerLoad()*/
	}}
>
	<fieldset>
		<CollapsableSection collapsed={true} heading={'Details'}>
			{#each Object.entries(fieldData.schemaData) as [key, val]}
				<p>{key}: {val}</p>
			{/each}
		</CollapsableSection>
		<CollapsableSection collapsed={true} heading={'Comments'}>
			<CommentSection
				contractData={contract}
				fieldName={fieldData.fieldName}
				bind:allFieldComments={fieldData.comments}
			/>
		</CollapsableSection>
		<CollapsableSection collapsed={true} heading={'History'}>
			<HistorySection historyArray={fieldData.changeHistory} parties={contract.parties} />
		</CollapsableSection>
		<CollapsableSection collapsed={true} heading={'Approval Details'}>
			<ul>
				{#each contract.parties as user}
					<li>
						{user.username}: {fieldData.approvalStatus[user.userID]?.choice || 'awaiting'}
					</li>
				{/each}
			</ul>
		</CollapsableSection>
		<h3>Current Value: {fieldData.currentValue || 'Not set'}</h3>
		<label for={`val-${fieldData.fieldName}`}>Change value:</label>
		{#if fieldData.schemaData.type == 'number'}
			<input
				id={`val-${fieldData.fieldName}`}
				type="number"
				bind:value={newFieldValue}
				on:keyup={debounce}
			/>
		{:else if fieldData.schemaData.format == 'date'}
			<DateInput
				placeholder={new Date().toISOString().split('T')[0]}
				format="yyyy-MM-dd"
				bind:dateString={newFieldValue}
			/>
		{:else}
			<input
				id={`val-${fieldData.fieldName}`}
				type="text"
				bind:value={newFieldValue}
				on:keyup={debounce}
			/>
		{/if}
		<button on:click|preventDefault={() => updateField()}>Submit</button>
		{#if error}
			<div class="error">
				{error}
			</div>
		{/if}
		<div class="approval-container">
			<button class="approve-btn" on:click={() => updateApproval('approved')}>Approve</button>
			<button class="reject-btn" on:click={() => updateApproval('rejected')}>Reject</button>
		</div>
	</fieldset>
</CollapsableSection>

<style>
	fieldset {
		margin: 1em 0;
		padding: 0.5em;
		border: none;
	}
	.approval-container > button {
		margin: 0.3em;
		font-size: 19px;
		padding: 0.8rem 1.7rem;
	}
	.approve-btn {
		background-color: green;
	}
</style>
