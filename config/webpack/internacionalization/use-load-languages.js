const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ fromPath, toPath }) => ({
	plugins: [
		new CopyWebpackPlugin([
			{ from: fromPath, to: toPath }
		], { logLevel: 'trace' })
	]
});
