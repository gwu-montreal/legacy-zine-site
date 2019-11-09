import React from "react";
import { Link, Location } from "@reach/router";
import Headroom from "react-headroom";
import i18next from "i18next";

import { getLanguageFromPathname, replaceLanguageInPathname } from "../utils";
import "./Header.css";

export default () => (
  <Headroom>
    <div className="top-bar">
      <Location>
        {({ location, navigate }) => {
          const { pathname } = location;
          const languageCode = getLanguageFromPathname(pathname);
          return (
            <div className="container">
              <label
                htmlFor="lang-select"
                className="lang-select-label"
              >
                {i18next.t("select_a_language")}
              </label>
              &nbsp;
              <select
                value={languageCode}
                onChange={e => {
                  const code = e.target.value;
                  i18next.changeLanguage(code);
                  navigate(replaceLanguageInPathname(pathname, code));
                }}
                name="language"
                id="lang-select"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          );
        }}
      </Location>
    </div>
    <div className="container">
      <nav className="head">
        <div>
          <Link to="/">
            <img
              alt="Game Workers Unite"
              className="header-logo-image"
              src="/images/gwu-mag-logo.svg"
            />
            <span className="header-after-logo">
              {i18next.t("header_title")}
            </span>
          </Link>
        </div>
        <div className="head-right">
          <a href="https://gameworkersunite.org">
            <img
              title="Game Workers Unite International"
              className="header-logo-image"
              src="/images/gwu-logo.svg"
            />
          </a>
        </div>
      </nav>
    </div>
  </Headroom>
);
