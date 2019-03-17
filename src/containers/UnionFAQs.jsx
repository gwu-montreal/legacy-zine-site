import React from "react";
import { withRouteData } from "react-static";

import Footer from "./Footer";

import "./UnionFAQs.css";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
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
