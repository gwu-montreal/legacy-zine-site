import React from "react";
import i18next from "i18next";
import { Location } from "@reach/router";

import { getLanguageFromPathname } from "../utils";
import "./DownloadZines.css";

export default () => {
  return (
    <Location>
      {({ location, navigate }) => {
        const { pathname } = location;
        const languageCode = getLanguageFromPathname(pathname);
        return (
          <div>
            <h2 className="tc">{i18next.t("download_zine")}</h2>
            <div className="downloadzines-container">
              <a
                title={i18next.t("download_zine_waluigi")}
                href={i18next.t("urls.pdf_waluigi")}
              >
                <img
                  className="downloadzines-cover"
                  src={i18next.t("urls.cover_waluigi")}
                />
              </a>
              <a
                title={i18next.t("download_zine_isabelle")}
                href={i18next.t("urls.pdf_isabelle")}
              >
                <img
                  className="downloadzines-cover"
                  src={i18next.t("urls.cover_isabelle")}
                />
              </a>
              <a
                title={i18next.t("download_zine_unionize")}
                href={i18next.t("urls.pdf_unionize")}
              >
                <img
                  className="downloadzines-cover"
                  src={i18next.t("urls.cover_unionize")}
                />
              </a>
              <a
                title={i18next.t("download_zine_egg")}
                href={i18next.t("urls.pdf_egg")}
              >
                <img
                  className="downloadzines-cover"
                  src={i18next.t("urls.cover_egg")}
                />
              </a>
            </div>
            <h3 className="tc">
              {i18next.t("four_cover_variants")}
              <br />
              {i18next.t("print_and_share")}
            </h3>
            <p className="tc downloadzines-notes">
              <span>
                <a href={`/${languageCode}/endnotes`}>
                  {i18next.t("references_page")}
                </a>
              </span>
              <span>
                <a href={`/${languageCode}/how-to-print`}>
                  {i18next.t("printing_hints")}
                </a>
              </span>
            </p>
            <p className="tc downloadzines-gwuintl">
              <a href="https://gameworkersunite.org">
                <span>{i18next.t("gwu_international")}</span>
                <img
                  title={i18next.t("gwu_international")}
                  className="gwu-intl-image"
                  src="/images/gwu-logo.svg"
                />
              </a>
            </p>
          </div>
        );
      }}
    </Location>
  );
};
