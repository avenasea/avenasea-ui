<script>
	import { onMount } from 'svelte';
	import Jobs from '$api/jobs';
	import User from '$api/user';
	import { goto } from '$app/navigation';
	import Tags from '$components/Tags.svelte';

	const domain = import.meta.env.VITE_META_DOMAIN;
	let warning;
	let me;
	let job = {};
	let jobs = [];
	let candidates = [];
	let negative = [];
	let positive = [];
	let negativeWord;
	let positiveWord;
	let isUpdate = false;
	const types = [
		{
			value: 'fulltime',
			label: 'Fulltime'
		},
		{
			value: 'c2c',
			label: 'Corp-to-Corp'
		},
		{
			value: 'contract',
			label: 'Contract (1099)'
		},

		{
			value: 'internship',
			label: 'Internship'
		},
		{
			value: 'parttime',
			label: 'Part-time'
		}
	];

	onMount(async () => {
		me = await new User(fetch).me();
		jobs = await new Jobs(fetch).getAllMine();
	});

	async function deleteJob(id) {
		try {
			await new Jobs(fetch).deleteById(id);
		} catch (err) {
			console.error(err);
		}

		jobs = await new Jobs(fetch).getAllMine();
	}

	async function editJob(id) {
		try {
			job = await new Jobs(fetch).getById(id);
			isUpdate = true;
			positive = job.positive;
			negative = job.negative;
		} catch (err) {
			console.error(err);
		}
	}

	async function addNegativeWord(e) {
		if (
			(e && e.key !== 'Enter' && e.key !== ',') ||
			negative.indexOf(negativeWord) > -1 ||
			!negativeWord
		) {
			return;
		}

		e && e.preventDefault();
		negative.push(negativeWord.toLowerCase().trim());
		negative = negative;
		negativeWord = '';
	}

	async function addPositiveWord(e) {
		if (
			(e && e.key !== 'Enter' && e.key !== ',') ||
			positive.indexOf(positiveWord) > -1 ||
			!positiveWord
		) {
			return;
		}

		e && e.preventDefault();

		positive.push(positiveWord.toLowerCase().trim());
		positive = positive;
		positiveWord = '';
	}

	async function removePositiveWord(word) {
		positive = positive.filter((item) => item !== word);
	}

	async function removeNegativeWord(word) {
		negative = negative.filter((item) => item !== word);
	}

	async function addJob(e) {
		e.preventDefault();

		job.positive = positive;
		job.negative = negative;
		job.title = job.title.trim();

		if (!job.title || !job.positive.length) return false;

		console.log(job);

		try {
			if (isUpdate) {
				await new Jobs(fetch).update(job);
			} else {
				await new Jobs(fetch).create(job);
			}
		} catch (err) {
			console.error(err);
		} finally {
			job = {};
			positive = [];
			negative = [];
			isUpdate = false;
			jobs = await new Jobs(fetch).getAllMine();
		}
	}
</script>

<svelte:head>
	<title>Jobs Postings</title>
</svelte:head>

<p>Create a public job as a hiring company or recruiter looking to fill a position:</p>

<h1>Add a new job</h1>

<form on:submit|preventDefault={addJob}>
	<div class="field">
		<label for="name">Job Title:</label>
		<input type="text" id="name" bind:value={job.title} placeholder="Frontend Engineer" />
	</div>
	<div class="field">
		<label for="positive">Add positive search words:</label>
		<div class="group">
			<input
				type="text"
				id="positive"
				bind:value={positiveWord}
				placeholder="svelte"
				on:keypress={addPositiveWord}
				on:blur={() => {
					addPositiveWord();
				}}
			/>
			<button type="button" on:click|preventDefault={() => addPositiveWord()}>Add</button>
		</div>
		<!-- <Tags tags={positive} click={removePositiveWord(tag)} /> -->
		<ul class="tags">
			{#each positive as pos}
				<li>
					<span class="word">{pos}</span>
					<button type="button" on:click|preventDefault={removePositiveWord(pos)}>x</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="field">
		<label for="description">Job Description:</label>
		<div><small>Markdown ok</small></div>
		<textarea id="description" name="description" bind:value={job.description} />
	</div>
	<div class="field">
		<label for="pay">Pay Rate:</label>
		<input type="text" id="pay" bind:value={job.pay} placeholder="$200k/year or $100/hour" />
	</div>
	<div class="field">
		<label for="type">Employee Type:</label>
		<ul class="list">
			{#each types as type}
				<li>
					<label>
						<input type="radio" name="type" value={type.value} bind:group={job.type} />
						{type.label}
					</label>
				</li>
			{/each}
		</ul>
	</div>

	<div class="field">
		<label for="name">Contact email:</label>
		<input type="email" id="contact" bind:value={job.contact} placeholder="careers@{domain}" />
	</div>
	<footer>
		<button>Save</button>
	</footer>
</form>

<h2>Current Jobs Posted</h2>
{#if !jobs.length}<p>No jobs created yet</p>{/if}
<ol>
	{#each jobs as j, i}
		<li>
			<span><a href="/jobs/{j.id}">{j.title}</a></span>
			<a href="#" on:click|preventDefault={() => editJob(j.id)}>edit</a>
			<a href="#" on:click|preventDefault={() => deleteJob(j.id)}>x</a>
		</li>
	{/each}
</ol>

{#if warning}<p class="warning">{warning}</p>{/if}

<style>
	li {
		margin-bottom: 1rem;
	}
</style>
