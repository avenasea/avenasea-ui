<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { userStore } from '$stores/user.js';
	import { page } from '$app/stores';

	if (browser && !$userStore) {
		const ref = $page?.url.pathname;

		goto('/login?ref=' + ref);
	}
</script>

{#if $userStore}
	<slot />
{/if}
