import React from "react";
import { withRouteData } from "react-static";

import TableOfContents from "../containers/TableOfContents";

import "./index.css";

export default withRouteData(({ openingStatement }) => (
  <div className="intro-container">
    <img className="intro-image" src="images/isabelle-clearbg.png" />
    <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
    <TableOfContents />
  </div>
));
