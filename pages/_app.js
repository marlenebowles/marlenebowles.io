import App from 'next/app';
import React from 'react';
import { Grommet } from 'grommet';
import { theme } from './_theme';

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Grommet theme={theme}>
				<Component {...pageProps} />
			</Grommet>
		);
	}
}
