import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nextXHR from 'i18next-xhr-backend';

const LANGUAGES = ['en'];
const DEFAULTLANGUAGES = 'en';

declare const __webpack_hash__: string;

i18n.use(LanguageDetector)
	.use(i18nextXHR)
	.init({
		backend: {
			loadPath: '/content/assets/locales/{{ns}}/{{lng}}.json',
			allowMultiLoading: false,
			queryStringParams: {
				v: __webpack_hash__
			}
		},
		whitelist: LANGUAGES,
		lng: DEFAULTLANGUAGES,
		fallbackLng: DEFAULTLANGUAGES,
		ns: ['shared'],
		debug: false,
		interpolation: {
			escapeValue: false,
			formatSeparator: ','
		},
		react: {
			wait: true
		}
	});

export default i18n;
