import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@computapars/core';
import { Nav } from './../components/Nav';
export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={themes.gallery}>
				<Nav {...pageProps} />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
