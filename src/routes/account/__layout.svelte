<script>
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { userStore } from '$stores/user.js';
	import { page } from '$app/stores';

	if (browser && !$userStore) {
		const ref = $page?.path;

		goto('/login?ref=' + ref);
	}
</script>

{#if $userStore}
	<slot />
{/if}
