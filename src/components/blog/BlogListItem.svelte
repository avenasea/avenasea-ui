<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let post;
</script>

<article>
	<a href={`/blog/${post.slug}`}>
		<div class="post-content">
			<div
				class="post-image"
				style={`background-image: url(${
					post.image || `https://picsum.photos/980/492?random=${Math.random()}`
				})`}
			/>
			<div class="right-container">
				<span class="post-category">{post.category || 'news'}</span>
				<h2 class="post-title">{post.title}</h2>
				<span class="post-date color-heading">
					{post.timestamp
						? new Date(post.timestamp).toLocaleDateString()
						: new Date().toLocaleDateString()}
				</span>
				{#if post.html}
					<span class="post-text">{@html post.html}</span>
				{:else if post.markdown}
					<span class="post-text">
						<SvelteMarkdown source={post.markdown} />
					</span>
				{/if}
			</div>
		</div>
	</a>
</article>

<style>
	article {
		padding: 0;
		margin: 1rem;
		width: 100%;
	}

	article .post-image {
		border: 2px solid transparent;
		transition: border-color .2s linear;
	}
	article:hover .post-image {
		border-color: #99aaff;
	}
	.post-title {
		font-size: 2.5rem;
		color: #fff;
	}
	.post-text {
		color: #8794a7;
		text-align: left;
		height: 8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.post-content {
		display: flex;
		flex-direction: column;
	}
	.post-image {
		flex-shrink: 0;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 30rem;
	}
	.right-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.post-category {
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 700;
		color: #fff;
		padding: 0.5rem 0.7rem;
		background: #0d9f8e;
		border-radius: 30px;
		margin: 0.7rem 0;
	}
	.post-date {
		color: rgba(255, 255, 255, 0.637);
		font-size: 1.6rem;
		margin-top: -1rem;
	}
	h2 {
		font-size: 2.5rem;
    	line-height: 3rem;
		letter-spacing: inherit;
		margin-top: 0;
	}

	@media (max-width: 820px) {
		article {
			padding: 0;
			width: 100%;
			margin: 1rem 0 4rem 0;
		}

		.post-image {
			height: 30rem;
		}
	}

	@media (max-width: 412px) {
		article {
			margin-bottom: 5rem;
		}

		.post-image {
			height: 22rem;
		}
	}
</style>
