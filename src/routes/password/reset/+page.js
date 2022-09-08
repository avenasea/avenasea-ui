export async function load({ url }) {
	const token = url.searchParams.get('token');
	const expiry = url.searchParams.get('expiry');
	return { token, expiry };
}
