<script>
	import { goto } from '$app/navigation';

	export let itemName;
	export let amount;
	export let planID;
	export let userID;
</script>

<form action="https://www.coinpayments.net/index.php" method="post" target="_blank">
	<input type="hidden" name="cmd" value="_pay" />
	<input type="hidden" name="reset" value="1" />
	<input type="hidden" name="merchant" value={import.meta.env.VITE_COINPAYMENTS_ID} />
	<input type="hidden" name="item_name" value={`${itemName} - 1 month`} />
	<input type="hidden" name="invoice" value={userID} />
	<input type="hidden" name="item_number" value={planID} />
	<input type="hidden" name="currency" value="USD" />
	<input type="hidden" name="amountf" value={amount} />
	<input type="hidden" name="quantity" value="1" />
	<input type="hidden" name="allow_quantity" value="1" />
	<input type="hidden" name="want_shipping" value="0" />
	<input type="hidden" name="allow_extra" value="0" />
	<input
		type="image"
		src="https://www.coinpayments.net/images/pub/buynow-grey.png"
		alt="Buy Now with CoinPayments.net"
		on:click={() => goto('/payment/waiting')}
	/>
</form>

<style>
</style>
