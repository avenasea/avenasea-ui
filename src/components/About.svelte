<script>
	import formatRFC3339WithOptions from 'date-fns/fp/formatRFC3339WithOptions';
</script>

<section id="hotels">
	<div class="container about-us">
		<div class="booking-image">
			<img src="/images/booking.svg" />
		</div>
		<div class="about-us-text">
			<h3 class="color-heading">Fast negotiation of Hotel RFPs</h3>
			<h2>
				Work directly with hoteliers or corporate travel managers in defining your custom RFP.
			</h2>
			<p>Quickly assess every incoming RFP.</p>
			<p>Automatically route RFPs to the appropriate sales representative.</p>
			<p>Respond to the RFPs that make sense for your business within minutes.</p>
		</div>
	</div>
</section>

<style>
	section {
		margin-top: -2.4rem;
	}

	.about-us {
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
	}

	.about-us-text {
		width: 57rem;
		max-width: 60%;
		margin-left: -6.4rem;
		margin-top: 15rem;
	}

	h2 {
		margin-top: 0.5rem;
	}

	.booking-image {
		/* width: 67rem; */
		max-width: 60%;
		background: url(/images/booking-background.svg) no-repeat;
		background-size: cover;
		border-radius: 20px;
		border: 1px solid #354baf;
		padding: 10rem 2.9rem;
		box-shadow: 0px 0px 45px 25px rgb(0 0 0 / 20%);
	}

	.booking-image img {
		width: 100%;
	}

	span {
		font-weight: 300;
	}

	p {
		margin-top: 2rem;
	}

	@media (max-width: 1130px) {
		section {
			margin-top: 5rem;
		}
	}

	@media (max-width: 680px) {
		.about-us {
			padding: 0;
			width: 100%;
			flex-direction: column;
		}

		.about-us-text {
			margin: 2rem 0 0 0;
			max-width: 100%;
		}

		.booking-image {
			max-width: 100%;
			padding: 6.5rem 2.9rem;
		}
	}
</style>
