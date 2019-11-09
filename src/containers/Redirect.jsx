import React from "react";
import { withRouteData, Head } from "react-static";

export default withRouteData(
  class extends React.PureComponent {
    componentDidMount() {
      // for Firefox which disabled meta http-equiv redirects
      window.location.pathname = this.props.redirectPath;
    }

    render() {
      const { redirectPath } = this.props;
      return (
        <React.Fragment>
          <Head>
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
