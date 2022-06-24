<script>
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
				<h2 class="post-title">{post.title}</h2>
				<span class="post-date color-heading">
					{post.timestamp
						? new Date(post.timestamp).toLocaleDateString()
						: new Date().toLocaleDateString()}
				</span>
				<span class="post-text">{@html post.html}</span>
			</div>
		</div>
	</a>
</article>

<style>
	article {
		width: 32%;
		padding: 1em 0;
		margin: 0.5em 0;
		transition: transform 0.2s ease;
	}
	article:hover {
		transform: scale(1.015);
	}
	.post-title {
		font-size: 2.5rem;
		color: #fff;
	}
	.post-text {
		color: #8794a7;
		text-align: left;
		height: 9rem;
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
		height: 28rem;
		border-radius: 4%;
	}
	.right-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.post-category {
		text-transform: uppercase;
		font-size: 1.2rem;
		color: #fff;
		background: #000;
		padding: 0.3rem 0.5rem;
		margin: 0.7rem 0;
	}
	.post-date {
		color: rgba(255, 255, 255, 0.637);
		font-size: 1.6rem;
		margin-top: -1rem;
	}
	h2 {
		letter-spacing: inherit;
	}

	@media (max-width: 820px) {

		article{
			width: 100%;
			margin: 1rem 0 4rem 0;
		}

		.post-image{
			height: 30rem;
		}


	}

	@media (max-width: 412px) {

		article{
			padding: 0;
			margin-bottom: 5rem;
		}

		.post-image{
			height: 22rem;
		}

	}


</style>
