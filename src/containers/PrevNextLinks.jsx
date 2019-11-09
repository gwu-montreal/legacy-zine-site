import React from "react";
import { Link, Location } from "@reach/router";

import { getLanguageFromPathname } from "../utils";
import "./PrevNextLinks.css";

export default ({ prevPages, nextPages }) => {
  if (!prevPages) {
    // not on a sequence page
    return null;
  }
  return (
    <Location>
      {({ location }) => {
        const { pathname } = location;
        const languageCode = getLanguageFromPathname(pathname);
        const prevPage = prevPages[languageCode];
        const nextPage = nextPages[languageCode];
        return (
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
      }}
    </Location>
  );
};
