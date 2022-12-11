<script>
	import BlogListItem from '$components/blog/BlogListItem.svelte';

	export let data;
	const { categories, filteredPosts } = data;
	let showCategoryDropdown = false;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="posts container">
	<div class="posts-heading">
		<div class="categories">
			<a href="/" on:click|preventDefault={() => (showCategoryDropdown = !showCategoryDropdown)}>
				Categories
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
		</div>

		<div class="heading-list">
			<span class="color-heading">Curabitur</span>
			<h1>Latest <span>news</span></h1>
		</div>
	</div>

	<ul class="post-list">
		{#each filteredPosts as post}
		<BlogListItem className={''} {post} />
		{/each}
	</ul>
</section>

<style>
	section {
		padding: 0 2rem 8rem 2rem;
		margin-top: -4rem;
	}

	h1 {
		font-size: 4.2rem;
		font-weight: 400;
	}

	h1 span {
		font-weight: 700;
	}

	.post-list {
		display: grid;
		grid-gap: 2rem;
		padding-bottom: 9.5rem;
		grid-template-columns: repeat(auto-fill, 35rem);
		justify-content: space-evenly;
		padding-left: 0;
	}

	.category-link.category-link {
		text-transform: capitalize;
		padding: 0;
	}
	.category-dropdown {
		list-style-type: none;
		position: absolute;
		/* background-color: #072031; */
		background: #0a133f;
		padding: 1em;
		width: 20rem;
		max-height: 25rem;
		z-index: 1;
		text-align: center;
		box-shadow: 0rem 0rem 1rem #99aaff;
		/* border: 0.1rem #000 solid; */
		right: 0;
		top: 35px;
		margin: 0;
	}

	.category-dropdown > li {
		margin: 1.5rem 0;
	}

	.posts-heading {
		display: flex;
		justify-content: space-between;
		flex-direction: row-reverse;
	}

	.categories {
		margin-top: 6rem;
		position: relative;
		top: 0;
    	left: 0;
	}

	@media (max-width: 820px) {

		.category-dropdown {
			position: absolute;
			top: 95px;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.post-list {
			grid-template-columns: repeat(1, auto);
			padding: 0;
			margin: 3rem 0;
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
			text-align: center;
		}
		.posts-heading a {
			margin-top: 2rem;
		}
		.categories {
			margin-top: 0;
		}
	}

	@media (max-width: 680px) {

		section {
			padding: 8rem 2rem;
		}

		.categories{
			position: static;
		}

		.category-dropdown {
			top: 275px;
		}

	}
</style>
