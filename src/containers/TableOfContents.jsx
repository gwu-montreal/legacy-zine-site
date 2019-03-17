import React from "react";
import { withSiteData } from "react-static";
import { Link, Location } from "@reach/router";

import "./TableOfContents.css";

export default withSiteData(({ tableOfContents }) => (
  <div className="table-of-contents-wrapper">
    <Location>
      {({ location }) =>
        tableOfContents.map(({ route, title, articleType }) => {
          const linkText =
            articleType === "unionfaqs" ? `UnionFAQs: ${title}` : title;

          return (
            <span className="table-of-contents-item" key={route}>
              {location.pathname === route ? (
                <span>{linkText}</span>
              ) : (
                <Link to={route}>{linkText}</Link>
              )}
            </span>
          );
        })
      }
    </Location>
  </div>
));
