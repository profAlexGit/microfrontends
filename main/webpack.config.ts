import * as path from 'path';
import * as webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";
const { dependencies } = require("./package.json");

interface Configuration extends webpack.Configuration {
	devServer?: WebpackDevServerConfiguration;
}

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const SRC_DIR = path.resolve(__dirname, 'src');

const config: Configuration = {
	mode: 'development',
	entry: path.resolve(SRC_DIR, 'index.ts'),
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle[hash:8].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
		
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.s[ca]ss$/i,
				use: [
					{
						loader: 'style-loader'
					},
					// MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: /\.module\.\w+$/i,
								localIdentName: '[file]-[local]--[hash:base64:8]',
								exportLocalsConvention: 'camelCase'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				]
			}
		]
	},
	devServer: {
		compress: true,
		port: 9000,
		client: {
			logging: 'error',
			overlay: true,
			progress: true,
		},
		hot: true,
		open: true,
		
	},
	plugins: [
			new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		}),
		new ModuleFederationPlugin({
			name: 'main',
			remotes: {
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: dependencies["react"],
				},
				'react-dom': {
					singleton: true,
					requiredVersion: dependencies["react-dom"]
				}
			},
		})
		// new MiniCssExtractPlugin({
		// 	filename: '[filename][contentHash:8].css'
		// })
	],
}

export default config;
