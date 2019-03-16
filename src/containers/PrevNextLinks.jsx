import React from "react";
import { Link } from "@reach/router";

import "./PrevNextLinks.css";

export default ({ prevPage, nextPage }) => (
  <div className="prev-next-wrapper">
    {prevPage ? (
      <Link to={prevPage.route}>
        {"<"} {prevPage.name}
      </Link>
    ) : null}
    {nextPage ? (
      <Link to={nextPage.route}>
        {nextPage.name} {">"}
      </Link>
    ) : null}
  </div>
);
