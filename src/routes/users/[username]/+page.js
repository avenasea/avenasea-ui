import User from '$api/user';
import Jobs from '$api/jobs';
import Searches from '$api/searches';

const name = import.meta.env.VITE_META_NAME;

export async function load({ fetch, params }) {
	const { username } = params;
	const user = await new User(fetch).getByUsername(username);
	const jobs = await new Jobs(fetch).getByUsername(username);
	const searches = await new Searches(fetch).getByUsername(username);

	return {
		jobs,
		user,
		searches,
		username
	};
}
