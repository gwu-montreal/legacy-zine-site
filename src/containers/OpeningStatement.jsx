import React from "react";
import { withRouteData, Head } from "react-static";
import { Link, Location } from "@reach/router";
import i18next from "i18next";

import TableOfContents from "../containers/TableOfContents";
import DownloadZines from "../containers/DownloadZines";
import { getLanguageFromPathname } from "../utils";

import "./OpeningStatement.css";

export default withRouteData(({ openingStatement }) => (
  <Location>
    {({ location, navigate }) => {
      const { pathname } = location;
      const languageCode = getLanguageFromPathname(pathname);
      return (
        <React.Fragment>
          <Head title={`GWU GDC 2019 Zine`} />
          <div className="intro-container">
            <img
              alt="Isabelle: Unionize!"
              className="intro-image"
              src="/images/isabelle-clearbg-inlined.svg"
            />
            <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
            <Link to={`/${languageCode}/intro`}>
              <h1 className="intro-readzine">{i18next.t("read_the_zine")}</h1>
            </Link>
            <TableOfContents />
            <DownloadZines />
          </div>
        </React.Fragment>
      );
    }}
  </Location>
));
