import App from 'next/app'
import React from 'react'
import { Grommet } from 'grommet';

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Grommet theme={theme}>
        <Component {...pageProps} />
      </Grommet>
    )
  }
}