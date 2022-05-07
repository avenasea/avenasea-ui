<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { affiliate } from '$stores/user.js';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	onMount(() => {
		const aff = $page?.url?.searchParams.get('aff');

		if (aff) {
			affiliate.set(aff);
		}
	});
</script>

<Header />
<slot />
<Footer />
