const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

module.exports = ({ exclude }) => ({
	plugins: [
		new webpack.BannerPlugin({
			exclude,
			banner: `Agentero \nVersion: ${new GitRevisionPlugin().version()}`
		})
	]
});
