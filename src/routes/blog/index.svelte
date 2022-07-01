<script context="module">
	import posts from './_posts';

	export async function load({ url, params }) {
		const category = url.search.replace('?category=', '') || 'all';

		// get list of categories
		let categories = [];
		posts.forEach((post) => {
			if (post.category && !categories.includes(post.category)) {
				categories.push(post.category);
			}
		});

		// filter posts by category
		let filteredPosts =
			category == 'all' ? posts : posts.filter((post) => post.category == category);

		console.log(categories);
		console.log(category);
		return {
			props: {
				category,
				categories,
				filteredPosts
			}
		};
	}
</script>

<script>
	import BlogListItem from '$components/blog/BlogListItem.svelte';

	export let category;
	export let categories;
	export let filteredPosts;
	let showCategoryDropdown = false;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="posts container">
	<span class="color-heading">Curabitur</span>
	<h1 class="posts-heading">Latest news</h1>

	<ul class="post-list">
		{#each filteredPosts as post}
			<BlogListItem {post} />
		{/each}
	</ul>
</section>

<style>
	section {
		padding: 0 2rem 8rem 2rem;
		position: relative;
		margin-top: -4rem;
	}

	h1 {
		font-size: 4.2rem;
	}

	.posts-p {
		width: 66rem;
		max-width: 100%;
		margin: 1rem 0;
		text-align: left;
	}
	.post-list {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-gap: 1rem;
		padding-bottom: 9.5rem;
	}

	@media (max-width: 820px) {
			.post-list {
				grid-template-columns: repeat(1, auto);
			}
		section {
			margin-top: 0;
			padding: 0 2rem;
		}

		.posts-heading {
			flex-direction: column-reverse;
		}
		.posts-heading {
			padding-top: 1rem;
		}
	}
</style>
