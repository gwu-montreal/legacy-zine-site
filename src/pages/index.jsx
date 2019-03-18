import React from "react";
import { withRouteData, Head } from "react-static";
import { Link } from "@reach/router";

import TableOfContents from "../containers/TableOfContents";
import DownloadZines from "../containers/DownloadZines";

import "./index.css";

export default withRouteData(({ openingStatement, title, type }) => (
  <>
    <Head title={`GWU GDC 2019 Zine`}>
      <meta property="og:title" content={`${type === 'unionfaqs' ? 'UnionFAQs: ' : ''}${title}`} />
      <meta property="og:description" content="Read the latest zine from Game Workers Unite!" />
      <meta property="og:image" content="/images/isabelle-clearbg.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className="intro-container">
      <img className="intro-image" src="images/isabelle-clearbg-inlined.svg" />
      <div dangerouslySetInnerHTML={{ __html: openingStatement.contents }} />
      <Link to="/intro">
        <h1 className="intro-readzine">Read the Zine!</h1>
      </Link>
      <TableOfContents />
      <DownloadZines />
    </div>
  </>
));
