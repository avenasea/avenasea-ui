<script>
	const name = import.meta.env.VITE_META_NAME;
	const domain = import.meta.env.VITE_META_DOMAIN;
</script>

<svelte:head>
	<title>Terms</title>
</svelte:head>

<section class="container">

<h1>Terms of Service</h1>

<ul>
	<li>
		<p>
			As a condition to using {name}, you are required to open an account with and select a password
			and username, and to provide registration information. The registration information you
			provide must be accurate, complete, and current at all times. Failure to do so constitutes a
			breach of the Terms, which may result in immediate termination of your account.
		</p>
	</li>

	<li>
		<p>
			You may not use as a username the name of another person or entity or that is not lawfully
			available for use, a name or trade mark that is subject to any rights of another person or
			entity other than you without appropriate authorization, or a name that is otherwise
			offensive, vulgar or obscene.
		</p>
	</li>

	<li>
		<p>
			You are responsible for maintaining the confidentiality of your password and are solely
			responsible for all activities resulting from the use of your password and conducted through
			your {name} account.
		</p>
	</li>

	<li>
		<p>
			{name} is available only to individuals who are either (i) at least 18 years old, or (ii) at least
			14 years old, and who are authorized to access {name} by a parent or legal guardian. If you have
			authorized a minor to use {name}, you are responsible for the online conduct of such minor,
			and the consequences of any misuse of {name} by the minor. {name} does not display photographs
			and images containing nudity and violence that may be offensive to some, anyone doing so will have
			their account terminated.
		</p>
	</li>

	<li>
		<p>
			{name} is for use by individuals who are looking to find a job or hire an applicant.. If you do
			not qualify for registration you are not permitted to open an account or use {name}.
		</p>
	</li>
	<li>
		<p>
			Any legal action or arbitration concerning {name} must be done in Santa Clara County, California
			USA. Damages limited to $100 per incident.
		</p>
	</li>
	<li>
		<p>Registering an account on {name} is acceptance of these terms and conditions.</p>
	</li>
</ul>

</section>

<style>

	section{
		margin: 0rem auto 15rem auto;
		padding: 0 2rem;
	}

	h1{
		font-size: 4.2rem;
	}

	@media (max-width: 680px) {
		section {
			padding: 7rem 2rem;
			margin: 0 auto;
		}
	}

</style>