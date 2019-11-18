import React from "react";
import { Root, Routes, Head } from "react-static";
import i18next from "i18next";

import Header from "./containers/Header";
import { getLanguageFromPathname } from "./utils";

import "./reboot.css";
import "./fontface.css";
import "./app.css";

import en from "../languages/en.json";
import fr from "../languages/fr.json";

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    }
  }
});

export default class App extends React.PureComponent {
  render() {
    return (
      <Root>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <div className="container">
          <Routes>
            {({ routePath, getComponentForPath }) => {
              // make sure we have the right language set before
              // rendering the route
              let pathname = routePath;
              if (pathname[0] !== '/') {
                pathname = '/' + pathname;
              }
              const languageCode = getLanguageFromPathname(pathname);
              i18next.changeLanguage(languageCode);
              const Comp = getComponentForPath(routePath);
              return <Comp />;
            }}
          </Routes>
        </div>
      </Root>
    );
  }
}
