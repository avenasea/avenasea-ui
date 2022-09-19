class Api {
	constructor(ssrFetch = null) {
		this.fetch = typeof window !== 'undefined' ? fetch.bind(window) : ssrFetch;
	}

	async api(path, body = {}, opts = {}) {
		path = import.meta.env.VITE_API_ENDPOINT + path;
		body = JSON.stringify(body);
		const method = opts.method || 'GET';

		try {
			const res = await this.fetch(path, {
				method: opts.method || 'GET',
				credentials: 'include',
				body: method === 'GET' ? null : body
			});

			if (res.ok) {
				return await (opts.raw ? res.text() : res.json());
			}

			const err = await res.json();

			throw new Error(err.message);
		} catch (err) {
			const { name, message } = err;

			throw {
				name,
				message
			};
		}
	}
}

export default Api;
