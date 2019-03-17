import React from "react";

import PrevNextLinks from "./PrevNextLinks";
import TableOfContents from "./TableOfContents";

export default ({ prevPage, nextPage }) => (
  <>
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
    <TableOfContents />
  </>
);
