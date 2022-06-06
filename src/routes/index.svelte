<script>
	import Subscribe from '$components/Subscribe.svelte';
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
</svelte:head>

<div class="content">
	<h1>{title}</h1>

	<p style="font-size: 120%">A weekly email of highly targeted jobs in your inbox every Sunday.</p>

	<p>All accounts include a free 2-week trial (no credit card required).</p>

	<section>
		<p>
			Use our search to drill down into very specific job listings across popular Applicant Tracking
			Systems (ATSs).
		</p>
		<p>
			Opt-in to be contacted by hiring companies that match your highly targeted job requirements.
		</p>
	</section>

	<section class="video">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/M1N1iXrVcks"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</section>

	<section class="quotes">
		<h3>What our users are saying:</h3>
		<blockquote>
			<p>
				<q>The only jobs I ever get interviews with are the ones from my Grazily search profiles.</q
				>
			</p>
			<footer><cite>Michael Ash <a href="https://twitter.com/corl8">@CORL8</a></cite></footer>
		</blockquote>
		<blockquote>
			<p>
				<q
					>Using Grazily I see all the jobs that match my specific requirements without having to -
					spend time scouring the web.</q
				>
			</p>
			<footer>
				<cite><a href="https://www.linkedin.com/in/louis-huddleston/">Louis Huddleston</a></cite>
			</footer>
		</blockquote>
	</section>

	<Subscribe />

	{#if stats.users}
		<h3 style="margin: 4rem auto;">
			Join {stats.users} users running {stats.searches} weekly job searches and
			<a href="/jobs">{stats.jobs} jobs</a> posted
		</h3>
	{/if}

	{#if jobTags.length}
		<h3>Popular jobs</h3>
		<ul class="tags-list">
			{#each jobTags as tag}
				<li style={`font-size: ${(tag.count / jobTags[0].count) * 100 + 100}%;`}>
					<a href="/jobs/tags/{tag.word}">
						{tag.word} ({tag.count})
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	{#if tags.length}
		<h3>Popular searches</h3>
		<ul class="tags-list">
			{#each tags as tag}
				<li style={`font-size: ${(tag.count / tags[0].count) * 100 + 100}%;`}>
					<a href="/searches/tags/{tag.word.toLowerCase()}">{tag.word} ({tag.count})</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.content {
		text-align: center;
	}

	.content section {
		text-align: left;
	}

	h3 {
		margin: 2rem auto;
	}

	.quotes h3 {
		text-align: center;
	}

	blockquote {
		width: 80%;
		margin: 1rem auto;
	}

	blockquote footer {
		text-align: right;
	}

	.video {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 4rem 0;
	}
	.tags-list {
		list-style-type: none;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		font-size: 1rem;
	}

	.tags-list li {
		margin: 0.4rem;
	}

	.tag-size-1 {
		font-size: 40%;
	}

	.tag-size-2 {
		font-size: 55%;
	}

	.tag-size-3 {
		font-size: 70%;
	}

	.tag-size-4 {
		font-size: 85%;
	}

	.tag-size-5 {
		font-size: 100%;
	}

	.tag-size-6 {
		font-size: 115%;
	}

	.tag-size-7 {
		font-size: 130%;
	}

	.tag-size-8 {
		font-size: 145%;
	}

	.tags-list a {
		color: #000;
	}
</style>
