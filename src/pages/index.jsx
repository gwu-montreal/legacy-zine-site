import React from "react";
import { withRouteData } from "react-static";

import "./index.css";

const Tags = ({ tags }) => (
  <div className="tags flex">
    {Object.entries(tags).map(([tag, count]) => (
      <span key={tag}>
        {tag}.<sup>{count}</sup>{" "}
      </span>
    ))}
  </div>
);

const Entries = ({ entries }) => (
  <div>
    {entries.map(({ name, year, tags, contents }, i) => (
      <div className="entry" key={name}>
        <div
          style={
            i % 2 == 0
              ? {
                  maxWidth: "40%",
                  paddingTop: 10,
                  marginLeft: 30,
                  float: "right"
                }
              : {
                  maxWidth: "40%",
                  paddingTop: 10,
                  marginRight: 30,
                  float: "left"
                }
          }
        >
          there was a gallery here
        </div>
        <h2>{name}</h2>
        <h3>
          <span className="entry-year">{year}</span>
          <span className="entry-tags">{tags.join(" — ")}</span>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
        <div className="clear" style={{ marginBottom: 30 }} />
      </div>
    ))}
  </div>
);

export default withRouteData(({ entries, tags: allTags }) => (
  <div>
    <div className="hero-work flex-wrap">
      <div className="flex tc">there was a header here</div>
      <Tags tags={allTags} />
    </div>
    <h1 className="header-work">Work</h1>
    <Entries entries={entries} />
  </div>
));
