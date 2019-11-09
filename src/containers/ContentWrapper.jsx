import React from "react";
import { withRouteData, Head } from "react-static";

import Clearfix from "./Clearfix";
import Footer from "./Footer";
import TableOfContents from "./TableOfContents";

import "./ContentWrapper.css";

export default withRouteData(
  ({
    title,
    contents,
    prevPages,
    nextPages,
    header,
    type,
    containerClassName = "",
    headerClassName = "",
    contentClassName = "",
    children
  }) => (
    <React.Fragment>
      <Head title={`GWU GDC 2019 Zine - ${title}`}>
        <meta
          property="og:title"
          content={`${type === "unionfaqs" ? "UnionFAQs: " : ""}${title}`}
        />
      </Head>
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
  )
);
