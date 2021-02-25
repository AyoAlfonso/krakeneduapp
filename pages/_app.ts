import h from 'react-hyperscript'
import Head from 'next/head'
import Layout from '../components/Layout';
import * as Sentry from '@sentry/node'
import { Fragment } from 'react';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import {ProgressBarZindex} from  '../components/Tokens'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
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
  return h(Fragment, [
    h(Head as React.StatelessComponent, [
      h("title", "krakenedu.com"),
      h("meta", {
        property: "og:title",
        content: "krakenedu.com",
        key: "og:title",
      }),
      h("meta", {
        property: "og:description",
        content:
          " A platform for cohort-based virtual experience programs by established experts for professionals",
        key: "og:description",
      }),
      h("meta", {
        property: "og:image",
        content: "https://krakenedu.com/img/social-logo.png",
        key: "og:image",
      }),
    ]),
    h(Layout, {}, [h(Component, { ...pageProps })]),
  ]);
}

export default App
