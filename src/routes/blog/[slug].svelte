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
	import Button from '$components/Button.svelte';
import Contact from '$components/Contact.svelte';
import News from '$components/News.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<article>
		<div
			class="post-image"
			style={`background-image: url(${
				post.image || `https://picsum.photos/980/492?random=${Math.random()}`
			})`}
		/>
		<div class="container article">
			<div class="post-content">
				<!-- <span class="post-category">{post.category || 'news'}</span> -->
				<h1 class="post-title">{post.title}</h1>
				<span class="post-date color-heading"
					>{post.timestamp
						? new Date(post.timestamp).getDate()
						: new Date().toLocaleDateString()}
					{post.timestamp
						? new Date(post.timestamp).toLocaleDateString('eng', {month: 'long'})
						: new Date().toLocaleDateString()}
					{post.timestamp
							? new Date(post.timestamp).getFullYear()
							: new Date().toLocaleDateString()}</span>
				<div class="content">
					{@html post.html}
				</div>
				<!-- <div class="post-tags">
					<span class="post-tags"
						>Tags:
						{#each post.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</span>
				</div> -->
				<div class="share-buttons">
					<Fb />
					<Twitter />
				</div>
			</div>
			<div class="post-card">
				<span class="color-heading">Etiam et arcu enim</span>
				<h2>Nam interdum velit ut lorem</h2>
				<p>Nullam fermentum accumsan nibh, in ultricies elit lacinia in. Etiam viverra vel magna ut ultricies.</p>
				<Button className={'card'} content={'Learn more'} href={'/'}/>
			</div>
	</div>
</article>

<Contact className='contact-news'/>

<News contentSpan={"Curabitur"} contentA={"Related"}/>



<style>
	article {
		position: relative;
		margin-top: -7rem;
		padding: 0 2rem;
		/* box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%); */
		/* background: url(/images/texture-bg-2.png) no-repeat; */
		background-position: 0 100%;
	}

	.article {
		display: flex;
		justify-content: space-between;
		text-align: left;
		/* max-width: 100rem; */
		margin: 0 auto;
	}
	.post-content{
		width: 77rem;
		max-width: 65%;
		margin-top: 1rem;
	}
	.post-card{
		background: url(/images/BG-card.svg) no-repeat;
		background-size: cover;
		width: 37rem;
		max-width: 35%;
		border-radius: 2rem;
		padding: 7.2rem 3.2rem 5.4rem 3.2rem;
    	text-align: center;
		height: 100%;
		margin-top: 3rem;
		border: 1px solid #354BAF;
    	box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
	}
	.post-card h4{
		font-size: 4.2rem;
	}
	.post-card p{
		margin-top: 0.5rem;
	}
	.post-date {
		font-size: 1.4rem;
		display: block;
	}
	.post-image {
		width: 132rem;
		max-width: 100%;
		border-radius: 20px;
		height: 48rem;
		margin: 1em auto;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.post-title {
		font-size: 4.2rem;
		margin: 0.5rem 0 0.7rem 0;
	}
	.post-title, .post-date{
		text-align: center;
	}

	.share-buttons {
		width: 17rem;
    	display: inline-flex;
    	margin-top: 3rem;
	}
	.content {
		margin-top: 4rem;
		padding-right: 2rem;
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
	/* .any-news {
		background: #000;
	} */


	@media (max-width: 860px) {
		article{
			margin-top: 0;
		}
		/* .article {
			padding: 0 3rem 9rem 3rem;
		} */

		.article{
			display: flex;
			flex-direction: column;
		}

		.post-image {
			height: 26rem;
		}

		.content {
			margin-top: 1rem;
			padding: 0;
		}

		.post-title {
			font-size: 3.2rem;
		}

		.post-content{
			max-width: 100%;
    		margin: 0 auto;
		}

		.post-card{
			max-width: 100%;
			margin: 6rem auto;
		}

	}


</style>
