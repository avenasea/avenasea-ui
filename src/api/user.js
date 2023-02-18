import Api from './create-api';
import { userStore } from '../stores/user';

class User extends Api {
	constructor(fetch) {
		super(fetch);
	}

	async register(user) {
		return await this.api('/register', user, { method: 'POST' });
	}

	async login(user) {
		return await this.api('/login', user, { method: 'POST' });
	}

	async me() {
		try {
			const res = await this.api('/me');
			userStore.set(res);
			return res;
		} catch (err) {
			userStore.set(null);
		}
	}

	async getByUsername(username) {
		return await this.api('/users/' + username);
	}

	async update(me) {
		return await this.api('/me', me, { method: 'PUT' });
	}

	async all() {
		return await this.api('/users');
	}

	async requestReset(email) {
		return await this.api('/password/request-reset', { email }, { method: 'POST' });
	}

	async passwordReset(token, password) {
		return await this.api('/password/reset', { token, password }, { method: 'PUT' });
	}

	async logout() {
		return await this.api('/logout');
	}

	async newsletter(user) {
		return await this.api('/newsletters', user, { method: 'POST' });
	}
}

export default User;
