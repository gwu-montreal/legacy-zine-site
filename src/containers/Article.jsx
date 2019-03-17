import React from "react";
import { withRouteData, Head } from "react-static";

import Clearfix from "./Clearfix";
import Footer from "./Footer";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />
    <div>
      <div className="page">
        <h3>{title}</h3>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: contents }} />
        <Clearfix />
      </div>
      <Footer prevPage={prevPage} nextPage={nextPage} />
    </div>
  </>
));
