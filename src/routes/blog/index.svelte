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
	<title>{category.charAt(0).toUpperCase() + category.slice(1)} | Blog | $HSKO</title>
</svelte:head>

<div class="background">
	<section class="posts-container">
		<div class="posts-heading">
			<a href="#" on:click|preventDefault={() => (showCategoryDropdown = !showCategoryDropdown)}>
				Categories
				<img class:arrow-up={showCategoryDropdown} src="/images/icons/down-arrow.svg" alt="" />
			</a>
			{#if showCategoryDropdown}
				<ul class="category-dropdown">
					<li>
						<a
							class="category-link"
							href={`/blog?category=all`}
							on:click={() => (showCategoryDropdown = false)}
						>
							all news
						</a>
					</li>
					{#each categories as category}
						<li>
							<a
								class="category-link"
								href={`/blog?category=${category}`}
								on:click={() => (showCategoryDropdown = false)}
							>
								{category}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
			<h1>Latest news</h1>
		</div>
		<p class="posts-p">
			Cras feugiat nunc in accumsan pretium. Curabitur accumsan, lorem sed sodales pulvinar, felis
			eros tincidunt.
		</p>
		<ul class="post-list">
			{#each filteredPosts as post}
				<BlogListItem {post} />
			{/each}
		</ul>
	</section>
</div>

<style>
	section{
		padding: 0 2rem;
	}
	.background {
		background: url(/images/texture-bg-2.png) no-repeat;
		background-position: 0 100%;
		width: 100%;
		height: 100%;
	}
	.posts-container {
		margin: 0 auto;
		/* padding: 3em 1em; */
		max-width: 100rem;
	}
	h1 {
		font-size: 4.2rem;
	}
	.posts-heading {
		display: flex;
		justify-content: space-between;
		flex-direction: row-reverse;
	}
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
		padding-bottom: 9.5rem;
	}
	.arrow-up {
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
		/* border: 0.1rem #000 solid; */
	}
	
	.category-dropdown > li {
		margin: 1.5rem 0;
	}

	

	@media (max-width: 820px) {

		.posts-heading {
			flex-direction: column-reverse;
		}

		h1{
			text-align: center;
		}

		.posts-p{
		    text-align: center;
			margin: 1rem auto 2rem auto;
		}

		.posts-heading{
   			padding-top: 1rem;
		}

		.post-list{
			padding: 0 2rem 5.5rem 2rem;
		}

		.category-dropdown{
			top: 18rem;
    		left: 27rem;
		}
	}

	@media (max-width: 580px) {

		.posts-p{
			width: 35rem;
		}

		.post-list{
			padding: 0 2rem 2.5rem 2rem;
		}

		
		.category-dropdown{
			top: 16rem;
    		left: 9rem;
		}
	}




</style>
