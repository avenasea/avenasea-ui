import Api from './create-api';

class Searches extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async getAll(searchType) {
		const q = searchType ? '?type=' + searchType : '';
		return await this.api('/searches' + q);
	}

	async getByTag(tag) {
		return await this.api('/searches/tags/' + tag);
	}

	async getByUsername(username) {
		return await this.api('/searches/users/' + username);
	}

	async getCandidates(id) {
		return await this.api('/candidates/' + id);
	}

	async create(search) {
		return await this.api('/searches', search, { method: 'POST' });
	}

	async update(search) {
		console.log('api update: /searches', search);
		return await this.api('/searches/' + search.id, search, { method: 'PUT' });
	}

	async deleteById(id) {
		return await this.api('/searches/' + id, {}, { method: 'DELETE' });
	}

	async getById(id) {
		console.log(id);
		return await this.api('/searches/' + id, {}, { method: 'GET' });
	}
}

export default Searches;
