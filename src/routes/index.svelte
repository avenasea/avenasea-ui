<!-- <script>
	import Stats from '$api/stats';
	import { onMount } from 'svelte';

	const name = import.meta.env.VITE_META_NAME;
	const title = import.meta.env.VITE_META_TITLE;

	let jobTags = [];
	let tags = [];
	let stats = {};

	onMount(async () => {
		jobTags = (await new Stats(fetch).getJobTags()).tags.sort((a, b) => {
			return a.word.localeCompare(b.word);
		});

		tags = (await new Stats(fetch).getTags()).tags.sort((a, b) => {
			return a.word.localeCompare(b.word);
		});

		stats = await new Stats(fetch).getStats();
	});
</script>

<svelte:head>
	<title>{name} - {title}</title>
</svelte:head> -->
<script>
	import Banner from '$components/Banner.svelte';
	import Contact from '$components/Contact.svelte';
	import News from '$components/News.svelte';
</script>

<div class="content">
	<Banner />

	<Contact className={''} />

	<News contentSpan={'Curabitur'} contentA={'Latest '} />
</div>
