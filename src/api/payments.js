import Api from './create-api';

class Payments extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async createSubscription(planID) {
		return await this.api('/payments/create-subscription', { planID }, { method: 'POST' });
	}

	async cancelSubscription() {
		return await this.api('/payments/cancel-subscription', {}, { method: 'POST' });
	}
}

export default Payments;
