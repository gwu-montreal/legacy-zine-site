import React from "react";
import i18next from "i18next";

import ContentWrapper from "./ContentWrapper";

import "./UnionFAQs.css";

export default function UnionFAQs() {
  return (
    <ContentWrapper
      containerClassName="unionfaqs-container"
      contentClassName="unionfaqs-container-body"
      header={title => (
        <>
          <h1 className="unionfaqs-header">{i18next.t("unionfaqs_title")}</h1>
          <h2>{title}</h2>
        </>
      )}
    />
  );
}
