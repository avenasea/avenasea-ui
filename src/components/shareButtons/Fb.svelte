<script>
	import { onMount } from 'svelte';

	let win;

	onMount(() => {
		win = window;
	});
</script>

{#if win}
	<div id="fb-root" />

	<span class="container">
		<iframe
			src={`https://www.facebook.com/plugins/share_button.php?href=${win?.location.href}&layout=button&size=small&appId=116843901659983&width=67&height=20`}
			width="67"
			height="20"
			style="border:none;overflow:hidden"
			scrolling="no"
			frameborder="0"
			allowfullscreen="true"
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		/>
	</span>
{/if}

<style>
	.container {
		display: flex;
		margin: 0 0.3rem;
	}
</style>
