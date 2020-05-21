import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          {/* Load Google fonts asynchronously */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                WebFontConfig = {
                  google: {
                    families: [ 'Josefin+Sans:400&display=swap']
                  }
                };

                (function() {
                  var wf = document.createElement('script');
                  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                  wf.type = 'text/javascript';
                  wf.async = 'true';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(wf, s);
                })();
                `,
            }}
            key="josefinsans"
            type="text/javascript"
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
                html {
                  -moz-osx-font-smoothing: grayscale;
                  -webkit-font-smoothing: antialiased;
                  box-sizing: border-box;
                  font-size: 1px;
                }

                html, body, #__next {
                  height: 100%;
                }
                
                *, *::before, *::after {
                  box-sizing: inherit;
                }
                
                strong, b {
                  font-weight: bolder;
                }
                
                body {
                  font-family: 'Josefin Sans', 'Helvetica', 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
