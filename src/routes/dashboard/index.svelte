<script>
	import { onMount } from 'svelte';
	import Searches from '$api/searches';
	import User from '$api/user';
	import Message from '$components/Message.svelte';

	const searchType = 'job';
	let me;
	let searches = [];
	let search = {};
	let negative = [];
	let positive = [];
	let negativeWord;
	let positiveWord;
	let isUpdate = false;
	let msg;
	let type;

	onMount(async () => {
		await getSearches();
		me = await new User(fetch).me();
	});

	async function getSearches() {
		try {
			searches = await new Searches(fetch).getAll();
		} catch (err) {
			console.error(err);
			msg = err.message;
			type = 'error';
		}
	}

	async function deleteProfile(id) {
		try {
			await new Searches(fetch).deleteById(id);
			msg = null;
		} catch (err) {
			console.error(err);
			msg = err.message;
			type = 'error';
		}

		await getSearches();
	}

	async function editProfile(id) {
		try {
			search = await new Searches(fetch).getById(id);
			isUpdate = true;
			positive = search.positive;
			negative = search.negative;
			msg = null;
		} catch (err) {
			console.error(err);
			msg = err.message;
			type = 'error';
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
		negative.push(negativeWord.toLowerCase());
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

		positive.push(positiveWord.toLowerCase());
		positive = positive;
		positiveWord = '';
	}

	async function removePositiveWord(word) {
		positive = positive.filter((item) => item !== word);
	}

	async function removeNegativeWord(word) {
		negative = negative.filter((item) => item !== word);
	}

	async function addSearch(e) {
		e.preventDefault();

		search.positive = positive;
		search.negative = negative;
		search.type = searchType;

		if (!search.name || !search.positive.length) return false;

		console.log(search);

		try {
			msg = null;
			if (isUpdate) {
				await new Searches(fetch).update(search);
			} else {
				await new Searches(fetch).create(search);
			}
		} catch (err) {
			console.error('this is an error: ', err);
			msg = err.message;
			type = 'error';
		} finally {
			search = {};
			positive = [];
			negative = [];
			isUpdate = false;
			await getSearches();
		}
	}
</script>

<svelte:head>
	<title>Job Searches</title>
</svelte:head>

{#if me && !me.username}
	<p class="error">
		Please <a href="/account/settings">set a public username</a> and confirmed you want to be contacted
		by employers.
	</p>
{/if}

{#if me?.username}
	<p class="welcome">Welcome back {me.username}!</p>
{/if}

<p>The search profiles below are for candidates looking for a job with a specific skillset.</p>

<h1>Add a job search profile</h1>

<Message {type} {msg} />

<form on:submit|preventDefault={addSearch}>
	<div class="field">
		<label for="name">Search profile name:</label>
		<input type="text" id="name" bind:value={search.name} placeholder="Frontend Engineer" />
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
		<label for="negative">Add negative search words:</label>
		<div class="group">
			<input
				type="text"
				id="negative"
				bind:value={negativeWord}
				placeholder="react"
				on:keypress={addNegativeWord}
				on:blur={() => {
					addNegativeWord();
				}}
			/>
			<button type="button" on:click|preventDefault={() => addNegativeWord()}>Add</button>
		</div>
		<ul class="tags">
			{#each negative as neg}
				<li>
					<span class="word">{neg}</span>
					<button type="button" on:click|preventDefault={removeNegativeWord(neg)}>x</button>
				</li>
			{/each}
		</ul>
	</div>
	<footer>
		<button>Save</button>
	</footer>
</form>

<h2>
	Current Job Search Profiles ({searches.length} / {me?.job_search_profiles == -1
		? 'unlimited'
		: me?.job_search_profiles || 0})
</h2>
{#if !searches.length}<p>No profiles yet</p>{/if}
<ol>
	{#each searches as s, i}
		<li>
			<span>{s.name}</span>
			<a href="#" on:click|preventDefault={() => editProfile(s.id)}>edit</a>
			<a href="#" on:click|preventDefault={() => deleteProfile(s.id)}>x</a>
		</li>
	{/each}
</ol>

<style>
	.welcome {
		font-size: 150%;
	}
</style>
