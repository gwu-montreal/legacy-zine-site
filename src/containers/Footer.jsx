import React from "react";

import Clearfix from "./Clearfix";
import PrevNextLinks from "./PrevNextLinks";
import TableOfContents from "./TableOfContents";
import DownloadZines from "./DownloadZines";

export default ({ prevPage, nextPage }) => (
  <div style={{ marginBottom: '2rem' }}>
    <Clearfix />
    <PrevNextLinks prevPage={prevPage} nextPage={nextPage} />
    <TableOfContents />
    <DownloadZines />
    <p style={{ textAlign: 'center', marginTop: '2rem' }}>
      <a href="/endnotes">References page</a>
    </p>
  </div>
);
