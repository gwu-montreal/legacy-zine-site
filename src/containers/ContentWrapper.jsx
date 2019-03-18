import React from 'react';
import { withRouteData, Head } from "react-static";

import Clearfix from "./Clearfix";
import Footer from "./Footer";

export default withRouteData(({
  title,
  contents,
  prevPage,
  nextPage,
  containerClassName = '',
  headerClassName = '',
  contentClassName = '',
  children
}) => (
  <React.Fragment>
    <Head title={`GWU GDC 2019 Zine - ${title}`} />
    <div>
      <div className={`page ${containerClassName}`}>
        <h2 className={headerClassName}>{title}</h2>
        {children ||
          <div
            className={`page-content ${contentClassName}`}
            dangerouslySetInnerHTML={{ __html: contents }}
          />}
        <Clearfix />
      </div>
      <Footer prevPage={prevPage} nextPage={nextPage} />
    </div>
  </React.Fragment>
));
