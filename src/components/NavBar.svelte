<script>

	export let isHome;
	let active = false;

	function addClass(e){
		e.target.classList.toggle('active');
		active = !active;
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

<section class={isHome ? "home" : ""}>

	<nav style={active ? "right: 0; top: 0; width: 34rem; height: 100%; padding: 3rem; background: red"  : ""}>
		<a href="/">Home</a>
		<a href="/">Hotels</a>
		<a href="/about">About us</a>
		<a href="/blog">Blog</a>
		<a href="/#contact">Contact us</a>
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

		:global(body) {
			overflow-x: hidden;
		}

		nav {
			position: absolute;
			top: 0;
			right: 100%;
			flex-direction: column;
			align-items: flex-start;
			transition: all 0.5s;
			justify-content: flex-start;
			padding-top: 2rem;
		}

		.burger-menu{
			display: block;
		}

		.menu{
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}

</style>
