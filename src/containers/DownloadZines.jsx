import React from "react";
import i18next from "i18next";
import { Location } from "@reach/router";

import { getLanguageFromPathname } from "../utils";
import "./DownloadZines.css";

export default () => {
  return (
    <Location>
      {({ location }) => {
        const { pathname } = location;
        const languageCode = getLanguageFromPathname(pathname);
        return (
          <div>
            <div className="downloadzines-container">
              <div>
                <a
                  title={i18next.t("download_zine")}
                  href="https://gameworkers.github.io/zine-gdc-2019/ZineRemaster_2020/GWUZine_Remaster.pdf"
                >
                  <img
                    className="downloadzines-cover"
                    src="/images/cover_thumb_2020.jpg"
                  />
                </a>
              </div>
              <div>
                <a href="https://gameworkers.github.io/zine-gdc-2019/ZineRemaster_2020/GWUZine_Remaster.pdf">
                  <h3>{i18next.t("download_zine")}</h3>
                </a>
                <p>
                  <div>
                    <a href={`/${languageCode}/endnotes`}>
                      {i18next.t("references_page")}
                    </a>
                  </div>
                  <div>
                    <a href={`/${languageCode}/how-to-print`}>
                      {i18next.t("printing_hints")}
                    </a>
                  </div>
                  <div>
                    <a href={`/${languageCode}/older-versions`}>
                      {i18next.t("older_versions")}
                    </a>
                  </div>
                </p>
              </div>
            </div>
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
