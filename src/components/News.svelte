<script>
	import BlogListItem from './blog/BlogListItem.svelte';
	import posts from '../routes/blog/_posts';

	export let contentA;
	export let contentSpan;
	export let className;

	console.log(posts.length);
	// export let title;
</script>

<section id="news" class={className}>
		<span class="color-heading">{contentSpan}</span>
	<a href="/blog" class="any-news">{contentA}<span>news</span></a>
	<div class="news">
		<BlogListItem post={posts[0]} />
		<BlogListItem post={posts[1]} />
		<BlogListItem post={posts[2]} />
	</div>
</section>

<style>
	.news {
		margin-top: 3rem;
		display: flex;
		justify-content: space-between;
		text-align: left;
		color: #fff;
	}

	.any-news {
		font-size: 4.2rem;
		font-weight: 400;
		transition: 0.5s;
	}
	.any-news span {
		padding-left: 1rem;
		font-weight: 700;
	}

	.any-news:hover {
		transition: 0.5s;
		transform: scale(1.01);
	}

	section {
		background: none;
		max-width: 124.5rem;
		width: 100%;
		padding: 7.7rem 4rem;
	}

	.home{
		margin: -44.5rem auto 4rem auto;
	}

	.blog{
		margin: -8.5rem auto 4rem auto;
	}

	a {
		display: flex;
		color: #fff;
	}

	@media (max-width: 900px) {
		.news-block {
			padding: 0 2rem;
			width: 100%;
		}

		.news {
			display: block;
		}

		.any-news {
			font-size: 2.8rem;
		}
	}
</style>
