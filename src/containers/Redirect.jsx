import React from "react";
import { redirectTo } from "@reach/router"
import { withRouteData, Head } from "react-static";

export default withRouteData(
  class extends React.PureComponent {
    componentDidMount() {
      // for Firefox which disabled meta http-equiv redirects
      redirectTo(this.props.redirectPath);
    }

    render() {
      const { redirectPath } = this.props;
      return (
        <React.Fragment>
          <Head>
            <link rel="canonical" href={redirectPath} />
            <meta name="robots" content="noindex" />
            <meta
              httpEquiv="refresh"
              content={`0; url=${redirectPath}`}
            />
          </Head>
          <div>Redirecting...</div>
        </React.Fragment>
      );
    }
  }
);
