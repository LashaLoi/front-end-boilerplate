const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({ paths }) => ({
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: paths
		})
	]
});
