import React from 'react';

interface IErrorBoundaryState {
	error?: Error | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errorInfo?: any;
}

interface IErrorBoundaryProps {
	children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
	public state: IErrorBoundaryState = {
		error: null,
		errorInfo: null
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public componentDidCatch(error: Error, errorInfo: any) {
		this.setState({
			error,
			errorInfo
		});
	}

	public render() {
		if (this.state.errorInfo) {
			return (
				<div>
					<h2>Something went wrong.</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</details>
				</div>
			);
		}
		return this.props.children;
	}
}
