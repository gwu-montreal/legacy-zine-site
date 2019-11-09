import React from "react";
import { Link, Location } from "@reach/router";
import Headroom from "react-headroom";

import { getLanguageFromPathname, replaceLanguageInPathname } from "../utils";
import "./Header.css";

export default () => (
  <Headroom>
    <div className="top-bar">
      <Location>
        {({ location, navigate }) => {
          const { pathname } = location;
          return (
            <div className="container">
              <label
                htmlFor="lang-select"
                className="lang-select-label"
              >
                Select a language:
              </label>
              <select
                value={getLanguageFromPathname(pathname)}
                onChange={e => {
                  navigate(replaceLanguageInPathname(pathname, e.target.value));
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
            <span className="header-after-logo">GDC 2019 Zine</span>
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
