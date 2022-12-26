import * as path from 'path';
import * as webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends webpack.Configuration {
	devServer?: WebpackDevServerConfiguration;
}

const SRC_DIR = path.resolve(__dirname, '../src');

const config: Configuration = {
	mode: 'development',
	entry: path.resolve(SRC_DIR, 'index.ts'),
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle[hash:8].js',
		// publicPath: 'Header'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: '[filename][contentHash:8].css'
		// })
	],
}

export default config;
