import React from "react";
import { withRouteData } from "react-static";

import Footer from "./Footer";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <div>
    <br />
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: contents }} />
    <Footer prevPage={prevPage} nextPage={nextPage} />
  </div>
));
