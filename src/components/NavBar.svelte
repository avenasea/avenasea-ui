<script>

	let active = false;

	export let url;


	function addClass(e){
		e.target.classList.toggle('active');
		active = !active;
	}

	function close() {
		const openMenu = document.querySelector('.burger-menu.active');
		if (openMenu) {
			openMenu.classList.remove('active');
			active = false;
		}
	}




	// import { goto } from '$app/navigation';
	// import { userStore } from '$stores/user';

	// const logout = () => {
	// 	localStorage.removeItem('token');
	// 	localStorage.removeItem('user');
	// 	userStore.set(null);
	// 	goto('/');
	// };
</script>

<section>

	<nav style={active ? "right: 0; top: 0; width: 100%; height: 35rem; padding: 7rem 3rem; background: #14235B; display: flex " : ""}>
		<a href="/" class={`${url === '/' ? 'active' : ''}`}  on:click={close}>Home</a>
		<!-- <a href="/"  on:click={close}>Hotels</a> -->
		<a href="/about" class={`${url === '/about' ? 'active' : ''}`}  on:click={close}>About Us</a>
		<a href="/blog" class={`${url.includes('/blog') ? 'active' : ''}`}  on:click={close}>Blog</a>
		<a href="/contact" class={`${url === '/contact' ? 'active' : ''}`}  on:click={close}>Contact Us</a>

	<hr size="8" width="100%">

	</nav>

	<div class="menu">

		<div class="burger-menu" 
			on:click|preventDefault={(e) => {
				addClass(e);
			}}>

			<span class="line" style={active ? "display: none" : ""}></span>

		</div>

	</div>



</section>



	<!-- <a href="/jobs">Jobs</a>
	<a href="/pricing">Pricing</a>
	{#if $userStore}
		<a href="/dashboard">Dashboard</a>
		<a href="/account/settings">Settings</a>
		<a href="/account/settings">Settings</a> -->
		<!--<a href="#" on:click|preventDefault={logout}>Logout</a>
	{:else}
		<a href="/login">Login</a>
		<a href="/register">Signup</a>
	{/if} -->

<style>

	a{
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 2.9rem;
		color: #99AAFF;
		margin: 0 2rem;
	}

	.active{
		color: #fff;
		font-weight: 700;
	}

	.menu{
		display: none;
	}
	
	.burger-menu{
		display: none;
	}

	.burger-menu {
		display: block;
		position: relative;
		width: 2.5rem;
		height: 2rem;
	}

	.burger-menu:before, .burger-menu:after {
		content: '';
		background-color: #fff;
		position: absolute;
		width: 100%;
		height: 0.2rem;
		left: 0;
		transition: all 0.3s ease 0s;
	}

	.burger-menu:before{
		top: 0.1rem;
	}

	.burger-menu:after{
		bottom: 0;
	}
	.burger-menu span {
		position: absolute;
		background-color: #fff;
		left: 0;
		width: 100%;
		height: 0.2rem;
		top: 0.9rem;
		pointer-events: none;
	}

	.active span{
		display: none; 
    }

    .active:before {
        transform: rotate(45deg);
        top: 1.1rem;
    }

    .active:after {
        transform: rotate(-45deg);
        bottom: 0.7rem;
    }

	hr{
		display: none;
		position: absolute;
		bottom: 0;
		left: 0;
		background: linear-gradient(90deg, #21a8f3, #c7f5c6);
		border: none;
	}

	/* nav{
		margin-top: 2rem;
	} */

	/* nav {
		text-align: center;
		padding: 1rem;
	}

	nav a {
		margin: 0 0.4rem;
	} */

	@media (max-width: 1034px) {
		
		hr{
			display: block;
		}

		:global(body) {
			overflow-x: hidden;
		}

		nav {
			position: fixed;
			z-index: 99;
			top: -100%;
			right: 0;
			flex-direction: column;
			align-items: flex-start;
			transition: all 0.5s;
			justify-content: flex-start;
			padding-top: 2rem;
		}

		.burger-menu{
			display: block;
			position: fixed;
			z-index: 999;
		}

		.menu{
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}

		.active:before, .active:after{
			background-color: #0D9F8E;
		}

		a{
			padding: 1rem 0;
			margin: 0;
		}

		.active{
			/* background-image: linear-gradient(90deg, #21A8F3, #C7F5C6);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent; */
			color: #21A8F3;
		}
	}

</style>
