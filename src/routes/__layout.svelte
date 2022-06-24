<script>
	import {afterUpdate} from 'svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { affiliate } from '$stores/user.js';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let url = '';


	onMount(() => {
		const aff = $page?.url?.searchParams.get('aff');

		if (aff) {
			affiliate.set(aff);
		}
	});

	afterUpdate(() => {
		console.log(window.location.pathname);
		url = window.location.pathname;
	});

</script>

<Header isHome={url === '/'}/>
<slot />
<Footer />
