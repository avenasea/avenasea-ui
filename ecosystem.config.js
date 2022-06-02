import cfg from 'dotenv-flow';
import pkg from 'package.json';

cfg.config();

const {
	HOST_USER,
	HOST_DOMAIN,
	HOST_PATH,
	HOST_PROJECT,
	PORT,
	VITE_API_ENDPOINT,
	APP_URL,
	NODE_ENV
} = process.env;

const env_production = {
	HOST_USER,
	HOST_DOMAIN,
	HOST_PATH,
	HOST_PROJECT,
	PORT,
	VITE_API_ENDPOINT,
	APP_URL,
	NODE_ENV
};

const conf = {
	apps: [
		{
			name: pkg.name,
			script: './build/index.js',
			env_production
		}
	]
};
console.log(env_production);
export default conf;
