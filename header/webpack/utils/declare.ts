import webpack from 'webpack';
import {EnvName, getConfig} from './config';

export default (
	envWebpack: webpack.Configuration,
	envName: EnvName,
	override?: (config: any) => any): webpack.DefinePlugin => {
	let config = getConfig(envName);
	if (override) {
		config = override(config);
	}
	
	return new webpack.DefinePlugin({
		CONFIG: JSON.stringify(config)
	});
};
