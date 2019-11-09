import React from "react";
import { withSiteData } from "react-static";
import { Link, Location } from "@reach/router";

import { getLanguageFromPathname, replaceLanguageInPathname } from "../utils";
import "./TableOfContents.css";

export default withSiteData(({ tableOfContents }) => (
  <div className="toc-wrapper">
    <Location>
      {({ location }) => {
        const languageCode = getLanguageFromPathname(location.pathname);
        const contents = tableOfContents[languageCode];
        return contents.map(({ route, title, articleType }) => {
          const maybeUnionfaqs =
            articleType === "unionfaqs" ? (
              <span className="toc-unionfaqs">UnionFAQs: </span>
            ) : null;

          return (
            <span className="toc-item" key={route}>
              {location.pathname === route ||
              location.pathname === route + "/" ? (
                <span className="toc-item-active">
                  {maybeUnionfaqs}
                  {title}
                </span>
              ) : (
                <Link to={route}>
                  {maybeUnionfaqs}
                  {title}
                </Link>
              )}
            </span>
          );
        })
      }}
    </Location>
  </div>
));
