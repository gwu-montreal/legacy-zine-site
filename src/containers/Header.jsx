import React from "react";
import { Link, Location } from "@reach/router";
import Headroom from "react-headroom";
import i18next from "i18next";

import { getLanguageFromPathname, replaceLanguageInPathname } from "../utils";
import "./Header.css";

export default () => (
  <Location>
    {({ location, navigate }) => {
      const { pathname } = location;
      const languageCode = getLanguageFromPathname(pathname);
      return (
        <Headroom>
          <div className="container">
            <nav className="head">
              <div>
                <Link to={`/${languageCode}`}>
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
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </div>
            </nav>
          </div>
        </Headroom>
      );
    }}
  </Location>
);
