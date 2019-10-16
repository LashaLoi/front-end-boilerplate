module.exports = ({ include, exclude, outputPath = '' } = {}) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				test: /\.(gif|png|jpe?g|webp)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: `${outputPath}/[name].[hash].[ext]`
					}
				}
			}
		]
	}
});
