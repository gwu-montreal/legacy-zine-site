import React from "react";
import { withRouteData } from "react-static";

import "./index.css";

export default withRouteData(({ entries, tags: allTags }) => (
  <div style={{ textAlign: "center" }}>
    <div className="tags">
      {Object.entries(allTags).map(([tag, count], i) => (
        <span key={i}>
          {tag}.<sup>{count}</sup>{" "}
        </span>
      ))}
    </div>
    <div>
      {entries.map(({ name, year, tags, contents }) => (
        <div key={name}>
          <h2>{name}</h2>
          <h3>{year}</h3>
          <h3>{tags.join(", ")}</h3>
          <div dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
      ))}
    </div>
  </div>
));
