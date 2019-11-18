import React from "react";
import { withRouteData, Head } from "react-static";
import i18next from "i18next";

import Clearfix from "./Clearfix";
import Footer from "./Footer";
import TableOfContents from "./TableOfContents";

import "./ContentWrapper.css";

export default withRouteData(
  ({
    title,
    contents,
    description,
    prevPages,
    nextPages,
    header,
    type,
    containerClassName = "",
    headerClassName = "",
    contentClassName = "",
    children
  }) => {
    return (
      <React.Fragment>
        <Head
          title={`${i18next.t("site_title")} - ${title}`}
          meta={[
            { name: "description", content: description },
            {
              property: "og:title",
              content: `${type === "unionfaqs" ? i18next.t("unionfaqs_prefix") + " " : ""}${title}`
            },
            { property: "og:description", content: description }
          ]}
        />
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%", position: "relative" }}>
            <div className="nav_sidebar">
              <TableOfContents />
            </div>
          </div>
          <div className={`page ${containerClassName}`}>
            {header ? (
              header(title)
            ) : (
              <h2 className={headerClassName}>{title}</h2>
            )}
            {children || (
              <div
                className={`page-content ${contentClassName}`}
                dangerouslySetInnerHTML={{ __html: contents }}
              />
            )}
            <Clearfix />
          </div>
          <Footer prevPages={prevPages} nextPages={nextPages} />
        </div>
      </React.Fragment>
    );
  }
);
