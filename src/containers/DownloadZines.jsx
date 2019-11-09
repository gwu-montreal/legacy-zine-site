import React from "react";
import i18next from "i18next";

import "./DownloadZines.css";

export default () => {
  return (
    <div>
      <h2 className="tc">{i18next.t("download_zine")}</h2>
      <div className="downloadzines-container">
        <a
          title={i18next.t("download_zine_waluigi")}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019waluigi.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_waluigi.jpg"
          />
        </a>
        <a
          title={i18next.t("download_zine_isabelle")}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019isabelleisabelle.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_isabelle.jpg"
          />
        </a>
        <a
          title={i18next.t("download_zine_unionize")}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019unionize.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_unionize.jpg"
          />
        </a>
        <a
          title={i18next.t("download_zine_egg")}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019egg.pdf"
        >
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_egg.jpg"
          />
        </a>
      </div>
      <h3 className="tc">
        {i18next.t("four_cover_variants")}
        <br />
        {i18next.t("print_and_share")}
      </h3>
      <p className="tc downloadzines-notes">
        <div>
          <a href="/endnotes">{i18next.t("references_page")}</a>
        </div>
        <div>
          <a href="/how-to-print">{i18next.t("printing_hints")}</a>
        </div>
        <div>
          <a href="https://gameworkersunite.org">
            {i18next.t("gwu_international")}
          </a>
        </div>
      </p>
    </div>
  );
};
