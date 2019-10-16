const merge = require('webpack-merge');
const path = require('path');

const {
	useBanner,
	useCleaner,
	useDevServer,
	useFaviconGenerator,
	useFontLoader,
	useSourceMaps,
	useHotModuleReplacement,
	useHtmlTemplate,
	useImageLoader,
	useSvgLoader,
	useApplicationManifest,
	useExtendedAPI,
	useChunk,
	useHashedModule,
	useModuleConcatenation,
	usePerformance,
	useTypescriptLoader,
	useTypescriptLinter,
	useTypescriptTypeChecker,
	useCompression,
	useLoadLanguages,
	reportAnalyzer
} = require('./config/webpack');

const ENVIROMENTS = Object.freeze({
	DEVELOPMENT: 'development',
	PRODUCTION: 'production'
});

const PATHS = Object.freeze({
	ROOTFOLDER: path.resolve(__dirname, '/'),
	APPFOLDER: path.join(__dirname, 'app'),
	OUTPUTFOLDER: path.join(__dirname, 'build'),
	HTMLTEMPLATE: path.join(__dirname, 'index.template.html'),
	NODE_MODULES: path.join(__dirname, 'node_modules'),
	FONTSFOLDER: path.join(__dirname, 'app/content/fonts'),
	LANGUAGESFOLDER: path.join(__dirname, 'app/content/assets/locales'),
	REPORTFOLDER: path.join(__dirname, 'reports'),
	STATICSFOLDER: 'statics',
	LANGUAGEOUTPUT: 'content/assets/locales',
	FONTSOUTPUT: 'content/fonts',
	IMAGEOUTPUT: 'content/images',
	ANALYZERSTATS: 'analyzer-stats.json',
	ANALYZERREPORT: '/analyzer-report.html',
	FAVICON: './app/content/favicon/favicon.svg',
	FAVICONOUTPUT: 'content/favicons'
});

const alias = Object.freeze({
	'@app': PATHS.APPFOLDER,
	'@shared': path.join(PATHS.APPFOLDER, 'shared'),
	'@content': path.join(PATHS.APPFOLDER, 'content')
});

const commonConfiguration = ({ DEPLOY_ENVIROMENT }) =>
	merge([
		{
			output: {
				path: PATHS.OUTPUTFOLDER,
				publicPath: '/',
				filename: `${PATHS.STATICSFOLDER}/[name].[hash].js`
			},
			resolve: {
				alias: {
					...alias,
					'@config': path.join(__dirname, `config/config_${DEPLOY_ENVIROMENT}.ts`)
				}
			}
		},
		useTypescriptTypeChecker({
			tsconfig: path.join(
				__dirname,
				DEPLOY_ENVIROMENT === 'local' ? `tsconfig.json` : `tsconfig.${DEPLOY_ENVIROMENT}.json`
			)
		}),
		useHtmlTemplate({ template: PATHS.HTMLTEMPLATE }),
		useTypescriptLoader({ include: PATHS.APPFOLDER, exclude: PATHS.NODE_MODULES }),
		useFontLoader({
			include: PATHS.FONTSFOLDER,
			outputPath: PATHS.FONTSOUTPUT
		}),
		useImageLoader({
			outputPath: PATHS.IMAGEOUTPUT
		}),
		useSvgLoader(),
		useTypescriptLinter({ include: PATHS.APPFOLDER }),
		useLoadLanguages({
			fromPath: PATHS.LANGUAGESFOLDER,
			toPath: PATHS.LANGUAGEOUTPUT
		}),
		useFaviconGenerator({
			logo: PATHS.FAVICON,
			prefix: `${PATHS.FAVICONOUTPUT}/[hash]-`
		})
	]);

const developmentConfiguration = () =>
	merge([
		{
			mode: ENVIROMENTS.DEVELOPMENT,
			entry: {
				app: [PATHS.APPFOLDER]
			}
		},
		useDevServer({
			host: 'localhost',
			port: 8080,
			open: true,
			stats: 'errors-only'
		}),
		useHotModuleReplacement(),
		useSourceMaps({ sourceMapType: 'cheap-module-source-map' })
	]);

const productionConfiguration = () =>
	merge([
		{
			mode: ENVIROMENTS.PRODUCTION,
			entry: {
				app: PATHS.APPFOLDER
			}
		},
		useChunk(),
		useSourceMaps({ sourceMapType: 'source-map' }),
		useCleaner({
			paths: [PATHS.OUTPUTFOLDER, PATHS.REPORTFOLDER]
		}),
		useHashedModule(),
		useModuleConcatenation(),
		usePerformance({
			hints: 'warning',
			maxEntrypointSize: 100000,
			maxAssetSize: 450000
		}),
		reportAnalyzer({
			analyzerMode: 'static',
			reportFilename: `${PATHS.REPORTFOLDER}/${PATHS.ANALYZERREPORT}`,
			defaultSizes: 'stat',
			openAnalyzer: false,
			generateStatsFile: true,
			statsFilename: `${PATHS.REPORTFOLDER}/${PATHS.ANALYZERSTATS}`
		}),
		useBanner({
			exclude: /\.svg$/
		}),
		useApplicationManifest(),
		useExtendedAPI(),
		useCompression()
	]);

module.exports = ({ ENVIROMENT, DEPLOY_ENVIROMENT }) => {
	if (ENVIROMENT === ENVIROMENTS.PRODUCTION) {
		return merge(commonConfiguration({ DEPLOY_ENVIROMENT }), productionConfiguration());
	}
	return merge(commonConfiguration({ DEPLOY_ENVIROMENT }), developmentConfiguration());
};
