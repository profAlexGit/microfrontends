import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import {exposes} from './config/exposes';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

import {merge} from 'webpack-merge';
import common from './webpack.common';
import path from 'path';
import declare from './utils/declare';
import webpack from 'webpack';
import packageJson from '../package.json';
const {dependencies} = packageJson;
// const { dependencies } = require(path.resolve(__dirname, '../package.json'));

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;


export default (env: webpack.Configuration): Configuration => merge(common, {
	mode: 'development',
	devtool: 'source-map',
	plugins: [
		declare(env, 'local', (config) => ({...config, development: true})),
		new ModuleFederationPlugin({
			name: 'STORE',
			filename: 'remote.js',
			exposes: {...exposes},
			remotes: {
				'navigationConfig': 'NAVIGATION@http://localhost:9002/remote.js'
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: dependencies["react"],
				},
			},
		})
	],
	devServer: {
		static: path.join(__dirname, '../build'),
		historyApiFallback: true,
		port: 9003,
		hot: true
	},
});
