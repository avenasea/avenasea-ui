import Searches from '$api/searches';

export async function load({ fetch, params }) {
	const { id } = params;

	const search = await new Searches(fetch).getById(id);

	return {
		id,
		search
	};
}
