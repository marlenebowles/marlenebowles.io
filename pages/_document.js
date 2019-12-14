import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						<style
							dangerouslySetInnerHTML={{
								__html: `
                                #__next { height: 100vh; }
                                `,
							}}
						/>
						<link
							href="https://fonts.googleapis.com/css?family=Oswald|Roboto:400,700&display=swap"
							rel="stylesheet"
						/>
						<style
							dangerouslySetInnerHTML={{
								__html: styledNormalize,
							}}
						/>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}