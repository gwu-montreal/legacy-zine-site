import React from "react";

import Clearfix from "./Clearfix";
import PrevNextLinks from "./PrevNextLinks";
import TableOfContents from "./TableOfContents";

export default ({ prevPage, nextPage }) => (
  <>
    <Clearfix />
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
    <TableOfContents />
  </>
);
