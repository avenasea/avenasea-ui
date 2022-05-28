<script>
	import { onMount } from 'svelte';
	import Searches from '$api/searches';
	import User from '$api/user';
	import Index from './index.svelte';

	let searchType = 'candidate';
	let warning;
	let selectedSearch;
	let me;
	let searches = [];
	let candidates = [];
	let search = {
		type: searchType
	};
	let negative = [];
	let positive = [];
	let negativeWord;
	let positiveWord;
	let isUpdate = false;

	onMount(async () => {
		await getSearches();
		me = await new User(fetch).me();
	});

	async function getSearches() {
		try {
			searches = await new Searches(fetch).getAll(searchType);
		} catch (err) {
			console.error(err);
		}
	}

	async function deleteProfile(id) {
		try {
			await new Searches(fetch).deleteById(id);
		} catch (err) {
			console.error(err);
		}

		await getSearches();
	}

	async function editProfile(id) {
		try {
			search = await new Searches(fetch).getById(id);
			isUpdate = true;
			positive = search.positive;
			negative = search.negative;
		} catch (err) {
			console.error(err);
		}
	}

	async function getCandidates(search) {
		selectedSearch = search;
		try {
			candidates = await new Searches(fetch).getCandidates(search.id);
			warning = !candidates.length ? 'No candidates were found' : '';
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
			if (isUpdate) {
				await new Searches(fetch).update(search);
			} else {
				await new Searches(fetch).create(search);
			}
		} catch (err) {
			console.error(err);
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
	<title>Candidate searches</title>
</svelte:head>

<p>
	The search profiles below are for recruiters or hiring companies looking for candidates that match
	a specific skillset.
</p>

<h1>Add a candidate search profile</h1>

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
	Current Candidate Search Profiles ({searches.length} / {me?.candidate_search_profiles == -1
		? 'unlimited'
		: me?.candidate_search_profiles || 0})
</h2>
{#if !searches.length}<p>No profiles yet</p>{/if}
<ol>
	{#each searches as s, i}
		<li>
			<span>{s.name}</span>
			<a href="#" on:click|preventDefault={() => getCandidates(s)}>matches</a>

			<a href="#" on:click|preventDefault={() => editProfile(s.id)}>edit</a>
			<a href="#" on:click|preventDefault={() => deleteProfile(s.id)}>x</a>
		</li>
	{/each}
</ol>

{#if warning}<p class="warning">{warning}</p>{/if}

{#if candidates.length}
	<h2>Candidates matching this search:</h2>
	<ol>
		{#each candidates as c}
			<li>
				<span>
					<a href="/searches/{c.id}">{c.name}</a> - email:
					<a href="mailto:{c.user.email}?subject={c.user.name}">{c.user.email}</a>
					{#if c.user?.username}
						username:
						<a href="/users/{c.user.username}">{c.user.username}</a>
					{/if}
				</span>
				{#if c.user.phone}
					phone:
					<a href="tel:{c.user.phone}" class="phone">{c.user.phone}</a>
				{/if}
			</li>
		{/each}
	</ol>
{/if}

<style>
	ul {
		padding: 0;
		margin: 1.2rem 0;
	}

	ul li {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		background-color: red;
		padding: 0.4em 1.2rem;
		color: white;
		border-radius: 2rem;
		margin-right: 1.2rem;
	}
	ul li button {
		color: white;
		background-color: red;
		border: none;
		padding: 0;
		margin-left: 0.4rem;
		cursor: pointer;
		font-size: 2rem;
	}

	.welcome {
		font-size: 150%;
	}
	.tags li {
		margin-bottom: 1rem;
	}
</style>
