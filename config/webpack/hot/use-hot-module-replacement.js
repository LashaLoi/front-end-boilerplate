const webpack = require('webpack');

module.exports = () => ({
	entry: {
		app: [

            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
		]
    },
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    },
	devServer: {
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
});
