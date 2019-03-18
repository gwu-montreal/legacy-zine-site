import React from "react";

import PrevNextLinks from "./PrevNextLinks";
import TableOfContents from "./TableOfContents";
import DownloadZines from "./DownloadZines";

export default ({ prevPage, nextPage }) => (
  <div style={{ marginBottom: "2rem" }}>
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
    <TableOfContents />
    <DownloadZines />
  </div>
);
