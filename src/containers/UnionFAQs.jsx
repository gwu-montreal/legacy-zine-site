import React from "react";
import { withRouteData, Head } from "react-static";

import Clearfix from "./Clearfix";
import Footer from "./Footer";

import "./UnionFAQs.css";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />

    <div className="page unionfaqs-container">
      <h3>UNIONFAQS: {title}</h3>
      <div
        className="page-content unionfaqs-container-body"
        dangerouslySetInnerHTML={{ __html: contents }}
      />
      <Clearfix />
    </div>
    <Footer prevPage={prevPage} nextPage={nextPage} />
  </>
));
