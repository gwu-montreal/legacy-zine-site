import React from "react";
import { withRouteData, Head } from "react-static";

import Footer from "./Footer";

import "./UnionFAQs.css";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />
    <div className="unionfaqs-container">
      <h3>UNIONFAQS: {title}</h3>
      <div
        className="unionfaqs-container-body"
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </div>
    <Footer prevPage={prevPage} nextPage={nextPage} />
  </>
));
