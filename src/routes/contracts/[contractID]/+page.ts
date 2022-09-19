import Contracts from '$api/contracts';
import type { Contract } from '$types/contract';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const { contractID } = params;
	const contract = await new Contracts(fetch).getById(contractID);

	return {
		contractID,
		contract
	};
}
