import Api from './create-api';

class Jobs extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async getAll() {
		return await this.api('/jobs');
	}

	async getByTag(tag) {
		return await this.api('/jobs/tags/' + tag);
	}

	async getByUsername(username) {
		return await this.api('/jobs/users/' + username.toLowerCase());
	}

	async getAllMine() {
		return await this.api('/jobs/me');
	}

	async create(job) {
		return await this.api('/jobs', job, { method: 'POST' });
	}

	async update(job) {
		return await this.api('/jobs/' + job.id, job, { method: 'PUT' });
	}

	async deleteById(id) {
		return await this.api('/jobs/' + id, {}, { method: 'DELETE' });
	}

	async getById(id) {
		console.log(id);
		return await this.api('/jobs/' + id, {}, { method: 'GET' });
	}
}

export default Jobs;
