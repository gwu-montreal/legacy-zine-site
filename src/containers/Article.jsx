import React from "react";
import { withRouteData, Head } from "react-static";

import Footer from "./Footer";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />
    <div>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
      <Footer prevPage={prevPage} nextPage={nextPage} />
    </div>
  </>
));
