import Api from './create-api';
import type { Contract } from '$types/contract';

class Jobs extends Api {
	constructor(fetch?) {
		super(fetch);
	}

	async getMyContracts() {
		return (await this.api('/contracts')) as Pick<Contract, 'id' | 'name' | 'created_at'>[];
	}

	async create(data) {
		return await this.api('/contracts', data, { method: 'POST' });
	}

	async getById(id) {
		return (await this.api(`/contracts/${id}`)) as Contract;
	}

	async getFieldByName(id, fieldName) {
		return await this.api(`/contracts/${id}/fields/${fieldName}`);
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

	async addParty(id, email) {
		return await this.api(`/contracts/${id}/add-party`, { email }, { method: 'POST' });
	}
}

export default Jobs;
