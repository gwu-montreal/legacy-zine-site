import React from "react";

import ContentWrapper from "./ContentWrapper";

/** A component without a border, similar to the landing page. */
export default function BareArticle() {
  return (
    <ContentWrapper
      containerClassName="bare-container"
      contentClassName="bare-container-body"
      header={() => null}
    />
  );
}
