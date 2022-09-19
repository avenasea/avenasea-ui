import User from '$api/user';

/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const me = await new User(fetch).me();

	return {
		me
	};
}
