import React from "react";

import PrevNextLinks from "./PrevNextLinks";
import TableOfContents from "./TableOfContents";
import DownloadZines from "./DownloadZines";

export default ({ prevPages, nextPages }) => (
  <div style={{ marginBottom: "2rem" }}>
    <PrevNextLinks prevPages={prevPages} nextPages={nextPages} />
    <TableOfContents />
    <DownloadZines />
  </div>
);
