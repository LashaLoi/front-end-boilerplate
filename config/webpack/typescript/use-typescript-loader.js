const exclude = /node_modules/;
const test = /\.(j|t)sx?$/;

module.exports = () => ({
	resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
	module: {
		rules: [
			{
				test,
				exclude,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						babelrc: true
					}
				}
			}
		]
    }
});
