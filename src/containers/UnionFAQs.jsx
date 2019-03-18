import React from "react";

import ContentWrapper from "./ContentWrapper";

import "./UnionFAQs.css";

export default function UnionFAQs() {
  return (
    <ContentWrapper
      containerClassName="unionfaqs-container"
      contentClassName="unionfaqs-container-body"
      header={title => (
        <>
          <h1 className="unionfaqs-header">UnionFAQs</h1>
          <h2>{title}</h2>
        </>
      )}
    />
  );
}
