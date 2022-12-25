export type EnvName = 'dev' | 'prod' | 'local';

export const getConfig = (env: EnvName) => {
	switch (env) {
		case 'local':
			return require('../config/local.json');
		case 'dev':
			return require(`../config/dev.json`);
		case 'prod':
			return require(`../config/prod.json`);
	}
};
