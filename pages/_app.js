import App from 'next/app';
import React from 'react';
import { Grommet } from 'grommet';
import { theme } from '../grommet/theme';

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Grommet
				style={{
					height: '100vh',
				}}
				theme={theme}
			>
				<Component {...pageProps} />
			</Grommet>
		);
	}
}
