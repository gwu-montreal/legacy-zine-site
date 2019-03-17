import React from "react";
import { Link } from "@reach/router";
import Headroom from "react-headroom";

export default () => (
  <Headroom>
    <div className="container">
      <nav className="head">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="head-right">
          <a href="https://gameworkersunite.org">GWU International</a>
        </div>
      </nav>
    </div>
  </Headroom>
);
