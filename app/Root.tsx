import React from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import { HelloWorld } from './modules/HelloWorld';
import { ErrorBoundary } from './shared/ErrorBoundary';

setConfig({
	ignoreComponents: false,
	ignoreSFC: false
});

const Root = () => (
	<ErrorBoundary>
		<HelloWorld />
	</ErrorBoundary>
);

export default hot(Root);
