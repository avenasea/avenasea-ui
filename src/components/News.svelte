<script>
	import BlogListItem from './blog/BlogListItem.svelte';
	import posts from '../routes/blog/_posts';

	console.log(posts.length);
	// export let title;
</script>

<section id="news" class="news-block">
	<a href="/blog" class="any-news">Latest news</a>

	<p class="title-p">
		HSKO promises a very ambitious roadmap, which will be focused on rewarding those who share the most content in the community.
	</p>

	<div class="news">
		<BlogListItem post={posts[0]} />
		<BlogListItem post={posts[7]} />
	</div>
</section>

<style>
	.news {
		display: flex;
		justify-content: space-between;
		text-align: left;
		color: #fff;
	}

	.any-news {
		font-family: Furore;
		font-size: 4.2rem;
		font-weight: 400;
		transition: 0.5s;
	}

	.any-news:hover {
		transition: 0.5s;
		transform: scale(1.01);
	}

	.news-block {
		padding: 10rem 4rem 7.7rem 4rem;
		max-width: 124.5rem;
		width: 100%;
		margin: 0 auto;
	}

	.news-block a {
		display: flex;
		color: #fff;
	}

	.title-p {
		width: 66rem;
		margin: 1rem 0 3rem 0;
		text-align: left;
	}

	@media (max-width: 820px) {
		.news-block{
			padding: 5rem 3rem 1rem 3rem;
			width: 100%;
		}

		.news{
			display: block;
		}

		.title-p{
			width: 50rem;
			margin: 1.5rem auto 3rem auto;
			text-align: center;
		}

		.any-news{
			font-size: 3.6rem;
			justify-content: center;	
		}
	}

	@media (max-width: 580px) {

		.news-block{
			padding: 6rem 3rem 1rem 3rem;
			width: 100%;
		}

		.title-p{
			/* max-width: 32rem; */
			width: 90%;
			margin: 2rem auto 4rem auto;
			text-align: center;
		}
	}
</style>
