import './polyfills';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

import Root from './Root';

// TODO: Add real fallback loading
const render = (Component: React.ComponentType): void => {
	ReactDOM.render(
		<I18nextProvider i18n={i18n}>
			<Suspense fallback={<div>Loading...</div>}>
				<Component />
			</Suspense>
		</I18nextProvider>,
		document.getElementById('app')
	);
};

render(Root);
