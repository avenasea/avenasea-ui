import { browser } from '$app/environment';

class Api {
	constructor(ssrFetch = null) {
		this.fetch = typeof window !== 'undefined' ? fetch.bind(window) : ssrFetch;
	}

	async api(path, body = {}, opts = {}) {
		path = import.meta.env.VITE_API_ENDPOINT + path;
		body = JSON.stringify(body);
		const method = opts.method || 'GET';
		const headers = {};

		if (browser) {
			const token = localStorage.getItem('token');
			headers.Authorization = token ? 'Bearer ' + token : '';
		}

		const res = await this.fetch(path, {
			method: opts.method || 'GET',
			body: method === 'GET' ? null : body,
			headers
		});

		if (res.ok) {
			return await (opts.raw ? res.text() : res.json());
		}

		const err = await res.json();

		throw new Error(err.message);
	}
}

export default Api;
