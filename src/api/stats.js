import Api from './create-api';

class Stats extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async getStats() {
		return await this.api('/stats');
	}

	async getTags() {
		return await this.api('/tags');
	}

	async getJobTags() {
		return await this.api('/tags/jobs');
	}
}

export default Stats;
