import h from 'react-hyperscript'
import Head from 'next/head'
import Layout from '../components/Layout';
import * as Sentry from '@sentry/node'
import { Fragment, useEffect } from 'react';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {ProgressBarZindex} from  '../components/Tokens'
import { Toaster } from "react-hot-toast";
import { hotjar } from "react-hotjar";



if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENVIRONMENT === 'production',
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

type Props = {
  Component: any,
  pageProps: any
}

const progress = new ProgressBar({
  size: 2,
  color: "#38a169",
  className: `${ProgressBarZindex}`,
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const App = ({ Component, pageProps}:Props) => {
  
 useEffect(() => {
   hotjar.initialize(
  parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID || '0', 10),
  parseInt(process.env.NEXT_PUBLIC_HOTJAR_SOFTWARE_VERSION || '0', 10)
      );
}, []);

  return h(Fragment, [
    h(Head as React.StatelessComponent, [
      h("title", "KrakenEdu"),
      h("meta", {
        property: "og:title",
        content: "KrakenEdu",
        key: "og:title",
      }),
      h("meta", {
        property: "og:description",
        content:
          " A platform for cohort-based virtual experience programs by established industry experts",
        key: "og:description",
      }),
      h("meta", {
        property: "og:image",
        content: "https://app.krakenedu.com/img/favicon.png",
        key: "og:image",
      }),
    ]),
    h(Layout, {}, [h(Component, { ...pageProps })]),
    h(Toaster,   {}),,,
  ]);
}

export default App
