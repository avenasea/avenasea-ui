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
		url = window.location.pathname;
		let body = document.querySelector('body')
		if(url === '/'){
			body.classList.add('home');
		}else{
			body.classList.remove('home');
		}
	});	
	

</script>

<Header {url}/>
<slot />
<Footer />
