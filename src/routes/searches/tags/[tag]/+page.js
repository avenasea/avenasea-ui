import Searches from '$api/searches';

export async function load({ fetch, params }) {
	const { tag } = params;

	const searches = await new Searches(fetch).getByTag(tag);

	return {
		tag,
		searches
	};
}
