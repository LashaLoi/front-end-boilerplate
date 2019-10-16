declare module '*.scss';

declare module '*.svg' {
	import React from 'react';
	const value: any;
	const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	export { ReactComponent };
	export default value;
}
