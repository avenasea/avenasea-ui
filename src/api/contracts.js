import Api from './create-api';

class Jobs extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async create(data) {
		return await this.api('/contracts', data, { method: 'POST' });
	}

	async getById(id) {
		return await this.api(`/contracts/${id}`);
	}

	async updateField(id, data) {
		return await this.api(`/contracts/${id}/update-field`, data, { method: 'POST' });
	}

	async createComment(id, data) {
		return await this.api(`/contracts/${id}/comments`, data, { method: 'POST' });
	}

	async approveField(id, data) {
		return await this.api(`/contracts/${id}/approve-field`, data, { method: 'POST' });
	}
}

export default Jobs;
