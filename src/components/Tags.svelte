<script>
	export let tags = [];
	export let type = 'jobs';
	const link = type === 'jobs' ? '/jobs/tags' : '/searches/tags';
</script>

<ul class="tags">
	{#each tags as tag}
		<li>
			<a href="{link}/{tag.toLowerCase().replace(/\s+/g, '-')}" class="tag">{tag}</a>
		</li>
	{/each}
</ul>

<style>
	a.tag {
		color: #fff;
		text-decoration: none;
	}

	li {
		margin-bottom: 1rem;
	}
</style>
