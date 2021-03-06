import React from "react";
import { Root, Routes, Head } from "react-static";
import { Location } from "@reach/router";
import i18next from "i18next";

import Header from "./containers/Header";
import { getLanguageFromPathname } from "./utils";

import "./reboot.css";
import "./fontface.css";
import "./app.css";

import en from "../languages/en.json";
import fr from "../languages/fr.json";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    const languageCode = getLanguageFromPathname(this.props.location.pathname);
    i18next.init({
      lng: languageCode,
      resources: {
        en: {
          translation: en
        },
        fr: {
          translation: fr
        }
      }
    });
  }

  render() {
    return (
      <Root>
        <Head title={i18next.t("meta.title")}>
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
          <meta name="description" content={i18next.t("meta.description")} />
          <meta property="og:title" content={i18next.t("meta.title")} />
          <meta property="og:description" content={i18next.t("meta.description")} />
        </Head>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </Root>
    );
  }
}

export default function AppWithLocation(props) {
  return (
    <Location>
      {locationProps => <App {...props} {...locationProps} />}
    </Location>
  );
}
