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
		<!-- <p class="posts-p">
			Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis
			eros tincidunt.
		</p> -->
		<ul class="post-list">
			{#each filteredPosts as post}
				<BlogListItem {post} />
			{/each}
		</ul> 
	</section>


<style>
	section{
		padding: 0 2rem 8rem 2rem;
		position: relative;
		margin-top: -4rem;
	}

	h1 {
		font-size: 4.2rem;
	}
	/* .posts-heading {
		
	} */
	.posts-p {
		width: 66rem;
		max-width: 100%;
		margin: 1rem 0;
		text-align: left;
	}
	.post-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 10.5rem;
		margin: 0;
    	padding: 0;
	}

	/* .arrow-up {
		transform: rotate(180deg);
	}
	.posts-heading a {
		padding-top: 1.5rem;
		color: #fff;
	}
	.category-link.category-link {
		text-transform: capitalize;
		padding: 0;
	}
	.category-dropdown {
		list-style-type: none;
		position: absolute;
		background-color: #072031;
		padding: 1em;
		width: 20rem;
		max-height: 25rem;
		z-index: 1;
		text-align: center;
		box-shadow: 0.7rem 0.7rem 2rem #1c1c1cc7;
		border: 0.1rem #000 solid;
	}
	
	.category-dropdown > li {
		margin: 1.5rem 0;
	} */

	

	@media (max-width: 820px) {

		section{
			margin-top: 0;
			padding: 0 2rem;
		}

		.posts-heading {
			flex-direction: column-reverse;
		}
		.posts-heading{
   			padding-top: 1rem;
		}


	}




</style>
