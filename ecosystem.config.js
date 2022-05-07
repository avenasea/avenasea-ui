import cfg from 'dotenv-flow';

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
			name: 'clsearch-ui',
			script: './build/index.js',
			env_production
		}
	]
};
console.log(env_production);
export default conf;
