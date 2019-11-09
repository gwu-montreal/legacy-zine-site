import React from "react";
import { withRouteData, Head } from "react-static";
import { Link } from "@reach/router";
import i18next from "i18next";

import TableOfContents from "../containers/TableOfContents";
import DownloadZines from "../containers/DownloadZines";

import "./OpeningStatement.css";

export default withRouteData(({ openingStatement }) => (
  <>
    <Head title={`GWU GDC 2019 Zine`} />
    <div className="intro-container">
      <img
        alt="Isabelle: Unionize!"
        className="intro-image"
        src="/images/isabelle-clearbg-inlined.svg"
      />
      <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
      <Link to="/intro">
        <h1 className="intro-readzine">{i18next.t("read_the_zine")}</h1>
      </Link>
      <TableOfContents />
      <DownloadZines />
    </div>
  </>
));
