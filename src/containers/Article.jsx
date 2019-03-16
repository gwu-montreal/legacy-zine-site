import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

export default withRouteData(({ title, contents }) => (
  <div>
    <Link to="/">{"<"} Back</Link>
    <br />
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: contents }} />
  </div>
));
