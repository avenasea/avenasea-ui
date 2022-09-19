import User from '$api/user';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	await new User(fetch).me();
}
