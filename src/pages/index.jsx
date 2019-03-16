import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

import "./index.css";

export default withRouteData(({ openingStatement, routes }) => (
  <div>
    <div className="hero-work flex-wrap">
      <div className="flex tc">
        <span>pages:</span>
        {routes.map(r => (
          <div key={r}>
            <Link to={r}>{r}</Link>
          </div>
        ))}
      </div>
    </div>
    <h1 className="header-work">INTRO</h1>
    <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
  </div>
));
