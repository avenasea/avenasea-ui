import Contracts from '$api/contracts';
import type { Contract } from '$types/contract';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const contracts = await new Contracts(fetch).getMyContracts();

	return {
		contracts
	};
}
