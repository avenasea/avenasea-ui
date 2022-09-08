import { error } from '@sveltejs/kit';

export async function load({ url, params }) {
	const planID = url.searchParams.get('planID');
	const type = url.searchParams.get('type');

	if (!planID) {
		throw error(400, 'No plan selected');
	}

	return { planID, type };
}
