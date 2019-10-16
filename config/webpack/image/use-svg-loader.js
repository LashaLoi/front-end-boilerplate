module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				issuer: {
					test: /\.tsx?$/
				},
				use: ['@svgr/webpack', 'url-loader']
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader'
			}
		]
	}
});
