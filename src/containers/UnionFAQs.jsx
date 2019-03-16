import React from "react";
import { withRouteData } from "react-static";

import PrevNextLinks from "./PrevNextLinks";

export default withRouteData(({ title, contents, prevPage, nextPage }) => (
  <div>
    <br />
    <h3>UNIONFAQS: {title}</h3>
    <pre>
      <code>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </code>
    </pre>
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
  </div>
));
