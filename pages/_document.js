import Document, {Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/img/favicon.png" />
          <link
            rel="dns-prefetch"
            href="//hyperlink-data.nyc3.cdn.digitaloceanspaces.com/"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin
          />
          {this.props.styleTags}
        </Head>
        <body
          style={{
            margin: "0px",
          }}
        >
          <Main />
          <NextScript />
           <script type="text/javascript" src="/paystack/index.js"></script>
           <script
            dangerouslySetInnerHTML={{
              __html: `if (window.location.host !== 'krakenedu.com') window.goatcounter = {no_onload: true}
        `,
            }}
          ></script>
         
        </body>
      </Html>
    );
  }
}
