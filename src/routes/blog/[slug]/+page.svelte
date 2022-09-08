<script>
	import Twitter from '$components/shareButtons/Twitter.svelte';
	import Fb from '$components/shareButtons/Fb.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Contact from '$components/Contact.svelte';
	import News from '$components/News.svelte';
	import Button from '$components/Button.svelte';

	export let data;
	const { post } = data;
</script>

<svelte:head>
	<title>{post.title}</title>
	{#if post}
		{#if post.image}
			<meta property="og:image" content={`https://avenasea.com${post.image}`} />
			<meta property="twitter:image" content={`https://avenasea.com${post.image}`} />
			<meta name="twitter:card" content="summary_large_image" />
		{/if}

		{#if post.summary}
			<meta property="og:description" content={post.summary} />
			<meta property="description" content={post.summary} />
		{/if}
		{#if post.title}
			<meta property="og:title" content={post.title} />
			<meta name="twitter:title" content={post.title} />
		{/if}
		<meta name="twitter:url" content={`https://avenasea.com/blog/${post.slug}`} />
		<meta property="og:url" content={`https://avenasea.com/blog/${post.slug}`} />
	{/if}
</svelte:head>

<article>
	<div
		class="post-image"
		style={`background-image: url(${
			post.image || `https://picsum.photos/980/492?random=${Math.random()}`
		})`}
	/>
	<div class="post container">
		<div class="article">
			<div class="post-content">
				<h1 class="post-title">{post.title}</h1>
				<span class="post-date color-heading"
					>Date: {post.timestamp
						? new Date(post.timestamp).toLocaleDateString()
						: new Date().toLocaleDateString()} / Author: {post.author}</span
				>
				<div class="post-subheading">
					<span class="post-category">{post.category || 'news'}</span>
				</div>
				<div class="content">
					{#if post.html}
						{@html post.html}
					{:else if post.markdown}
						<SvelteMarkdown source={post.markdown} />
					{/if}
				</div>
			</div>
			<div class="post-card">
				<span class="color-heading">Negotiate the best hotel RFPs in the industry</span>
				<p>We have vast experience building applications in the hotel RFP space.</p>
				<Button className={'card'} content={'Learn more'} href={'/'} />
			</div>
		</div>
		<div class="post-tags">
			Tags:
			{#each post.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		<div class="share-buttons">
			<Fb />
			<Twitter />
		</div>
	</div>
</article>

<Contact className={'blog'} />

<News className={'blog'} contentA={'Related'} contentSpan={''} />

<style>
	article {
		/* background: url(/images/texture-bg-2.png) no-repeat; */
		background-position: 0 100%;
		margin-top: -6rem;
		padding: 0 2rem;
	}

	.article {
		display: flex;
		justify-content: space-between;
		text-align: left;
		margin: 0 auto;
	}

	.post {
		padding: 0 2rem;
	}

	.post-content {
		width: 77rem;
		max-width: 65%;
		margin-top: 1rem;
		padding-right: 2rem;
	}

	.post-card {
		background: url(/images/BG-card.svg) no-repeat;
		background-size: cover;
		width: 37rem;
		max-width: 35%;
		border-radius: 2rem;
		padding: 7.2rem 3.2rem 5.4rem 3.2rem;
		text-align: center;
		height: 100%;
		margin-top: 3rem;
		border: 1px solid #354baf;
		box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
	}
	.post-card h2 {
		font-size: 4.2rem;
	}
	.post-card p {
		margin-top: 0.5rem;
	}
	.post-subheading {
		text-align: center;
	}

	.post-category {
		text-transform: uppercase;
		font-size: 1.4rem;
		font-weight: 700;
		color: #fff;
		padding: 0.5rem 0.7rem;
		background: #0d9f8e;
		border-radius: 30px;
		width: 65px;
		display: block;
		margin: 0 auto;
	}
	.post-date {
		font-size: 1.6rem;
		text-align: center;
		display: block;
		margin: 1rem 0 2rem 0;
	}
	.post-image {
		width: 132rem;
		max-width: 100%;
		margin: 0 auto;
		height: 48rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 25px;
	}
	.post-title {
		font-size: 4.2rem;
		margin: 1rem 0 0.7rem 0;
		text-align: center;
	}
	.post-tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		font-size: 1.6rem;
		margin-top: 1rem;
		max-width: 100%;
	}
	.post-tags .tag {
		color: #fff;
		padding: 0.7rem 1.1rem;
		background: #0d9f8e;
		margin: 0.5rem 1rem;
		border-radius: 30px;
	}
	/* .post-tags .tag:first-letter{
		text-transform: uppercase;
	} */
	.share-buttons {
		display: inline-flex;
		margin-top: 2rem;
		width: 16rem;
	}
	.content {
		margin-top: 2.5rem;
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 0.2rem;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
	.container :global(h1) {
		letter-spacing: inherit;
		line-height: 1.15 !important;
	}

	.content :global(video),
	.content :global(iframe) {
		width: 100%;
		margin: 1rem auto;
		position: relative;
		height: 100%;
		min-height: 60rem;
	}
	.content :global(p) {
		margin-bottom: 2rem;
	}

	@media (max-width: 900px) {
		.article {
			padding: 0 1rem;
			flex-direction: column;
		}

		.post-content {
			max-width: 100%;
			padding: 0;
		}

		.post-card {
			max-width: 100%;
			margin: 2rem auto;
		}

		.post-image {
			height: 26rem;
		}

		.content {
			margin-top: 1rem;
		}

		.post-title {
			font-size: 3.2rem;
		}
	}

	@media (max-width: 680px) {
		article {
			margin: 0;
			padding: 8rem 2rem;
		}
	}
</style>
