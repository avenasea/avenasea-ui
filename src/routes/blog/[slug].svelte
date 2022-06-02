<script context="module">
	import posts from './_posts.js';

	export async function load({ url, params }) {
		const { slug } = params;
		const lookup = new Map();
		posts.forEach((post) => {
			lookup.set(post.slug, post);
		});

		if (lookup.get(slug)) {
			return {
				props: {
					post: lookup.get(slug)
				}
			};
		} else {
			return {
				status: 404,
				error: 'Post not found'
			};
		}
	}
</script>

<script>
	import Twitter from '$components/shareButtons/Twitter.svelte';
	import Fb from '$components/shareButtons/Fb.svelte';
	import Form from '$components/Form.svelte';
	import BlogListItem from '$components/blog/BlogListItem.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article>
	<div class="container article">
		<div
			class="post-image"
			style={`background-image: url(${
				post.image || `https://picsum.photos/980/492?random=${Math.random()}`
			})`}
		/>
		<span class="post-category">{post.category || 'news'}</span>
		<h1 class="post-title">{post.title}</h1>
		<span class="post-date"
			>Date: {post.timestamp
				? new Date(post.timestamp).toLocaleDateString()
				: new Date().toLocaleDateString()} / Author: {post.author}</span
		>
		<div class="content">
			{@html post.html}
		</div>
		<div class="post-tags">
			<span class="post-tags"
				>Tags:
				{#each post.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</span>
		</div>
		<div class="share-buttons">
			<Fb />
			<Twitter />
		</div>
	</div>
</article>

<section class="any-news">
	<div class="news-block">
		<a href="/blog">Related posts</a>

		<p class="title-p">
			Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis
			eros tincidunt.
		</p>

		<div class="news">
			<BlogListItem post={posts[5]} />
			<BlogListItem post={posts[3]} />
		</div>
	</div>
</section>

<style>
	article {
		background: url(/images/texture-bg-2.png) no-repeat;
		background-position: 0 100%;
	}

	.article {
		text-align: left;
		max-width: 100rem;
		margin: 0 auto;
		padding: 0 2rem 9rem 2rem;
	}

	.post-category {
		text-transform: uppercase;
		font-size: 1.4rem;
		color: #fff;
		background: #000;
		padding: 0.3rem 0.5rem;
	}
	.post-date {
		color: rgba(255, 255, 255, 0.637);
		font-size: 1.4rem;
		vertical-align: text-bottom;
	}
	.post-image {
		width: 100%;
		height: 35rem;
		margin-bottom: 1em;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.post-title {
		font-size: 4.2rem;
		margin: 0.5rem 0 0.7rem 0;
	}
	.post-tags {
		width: 100%;
		color: #8794a7;
		font-size: 1.4rem;
		margin-top: 4rem;
		display: flex;
	}
	.post-tags .tag {
		color: #fff;
		padding: 0.7rem 1.1rem;
		background: #000;
		margin: 0 1rem;
	}
	/* .post-tags .tag:first-letter{
		text-transform: uppercase;
	} */
	.share-buttons {
		display: inline-flex;
		margin-top: 3rem;
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
	.any-news {
		background: #000;
	}

	.news {
		display: flex;
		justify-content: space-between;
		text-align: left;
		color: #fff;
	}

	a {
		font-family: Furore;
		font-size: 4.2rem;
		font-weight: 400;
	}

	a:hover {
		transition: 0.5s;
		transform: scale(1.01);
	}

	.news-block {
		padding: 8rem 4rem 5.7rem 4rem;
		width: 124.5rem;
		margin: 0 auto;
	}

	.news-block a {
		display: flex;
		color: #fff;
	}

	.title-p {
		width: 66rem;
		max-width: 100%;
		margin: 1rem 0 3rem 0;
		text-align: left;
	}

	@media (max-width: 820px) {
		.article {
			padding: 0 3rem 9rem 3rem;
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

		.any-news a {
			font-size: 3.6rem;
			display: block;
			text-align: center;
		}

		.news-block {
			padding: 5rem 3rem 1rem 3rem;
			width: 100%;
		}

		.news {
			display: block;
		}

		.title-p {
			width: 50rem;
			margin: 1.5rem auto 3rem auto;
			text-align: center;
		}
	}

	@media (max-width: 580px) {
		a {
			text-align: center;
		}

		.news-block {
			padding: 6rem 3rem 1rem 3rem;
			width: 100%;
		}

		.title-p {
			width: 32rem;
			margin: 2rem 0 4rem 0;
			text-align: center;
		}
	}
</style>
