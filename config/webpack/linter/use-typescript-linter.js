
module.exports = ({ include, exclude }) => ({
	module: {
		rules: [
			{
                include,
                exclude,
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    quiet: true,
                    failOnError: true
                }
            }
		]
	}
});
