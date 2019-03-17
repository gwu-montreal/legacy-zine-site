import React from "react";
import { Link } from "@reach/router";
import Headroom from "react-headroom";

import "./Header.css";

export default () => (
  <Headroom>
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
          <a href="https://gameworkersunite.org">GWU International</a>
        </div>
      </nav>
    </div>
  </Headroom>
);
