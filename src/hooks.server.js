/** @type {import('@sveltejs/kit').HandleFetch} */
export const handleFetch = async ({ request, fetch, event }) => {
	const apiUrl = import.meta.env.VITE_API_ENDPOINT;
	if (request.url.startsWith(apiUrl)) {
		// Workaround: https://github.com/sveltejs/kit/issues/6608
		request.headers.set('origin', event.url.origin);
	}

	return fetch(request);
};
