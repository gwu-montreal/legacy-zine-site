import React from "react";
import { withRouteData, Head } from "react-static";

import Clearfix from "./Clearfix";
import Footer from "./Footer";

import "./UnionFAQs.css";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />

    <div className="page unionfaqs-container">
      <h1 className="unionfaqs-header">UnionFAQs</h1>
      <h2>{title}</h2>
      <div
        className="page-content unionfaqs-container-body"
        dangerouslySetInnerHTML={{ __html: contents }}
      />
      <Clearfix />
    </div>
    <Footer prevPage={prevPage} nextPage={nextPage} />
  </>
));
