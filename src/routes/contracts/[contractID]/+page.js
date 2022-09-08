import Contracts from '$api/contracts';

export async function load({ fetch, params }) {
	const { contractID } = params;
	// TODO: ssr with auth routes
	//const contract = await new Contracts(fetch).getById(contractID);

	return {
		contractID
	};
}
