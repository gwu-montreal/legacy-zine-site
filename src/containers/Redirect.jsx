import React from "react";
import { withRouteData, Head } from "react-static";

export default withRouteData(
  ({ redirectPath }) => (
    <React.Fragment>
      <Head>
        <meta
          httpEquiv="refresh"
          content={`2; url=${redirectPath}`}
        />
      </Head>
      <div>Redirecting...</div>
    </React.Fragment>
  )
);
