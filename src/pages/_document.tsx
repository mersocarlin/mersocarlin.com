import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    const isProd = process.env.CONFIG_ENV === 'production'

    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />

          {/* Load Google fonts asynchronously */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                WebFontConfig = {
                  google: {
                    families: [ 'Josefin+Sans:300,400,600,700&display=swap']
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
                html, body, #__next {
                  height: 100%;
                }
              `,
            }}
          />

          {isProd && (
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-17163651-1"
            />
          )}
          {isProd && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-17163651-1', {
                page_path: window.location.pathname + window.location.hash + window.location.search,
              });
          `,
              }}
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
