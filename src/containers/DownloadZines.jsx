import React from "react";

import "./DownloadZines.css";

export default () => {
  return (
    <div>
      <h2 className="tc">Download the Zine!</h2>
      <div className="downloadzines-container">
        <a href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019waluigi.pdf">
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_waluigi.jpg"
          />
        </a>
        <a href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019isabelleisabelle.pdf">
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_isabelle.jpg"
          />
        </a>
        <a href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019unionize.pdf">
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_unionize.jpg"
          />
        </a>
        <a href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019egg.pdf">
          <img
            className="downloadzines-cover"
            src="/images/cover_thumb_egg.jpg"
          />
        </a>
      </div>
      <h3 className="tc">
        Choose from the four cover variants!
        <br /> Share with your coworkers and friends!
      </h3>
      <p className="tc">
        <a href="/endnotes">References page</a>
      </p>
    </div>
  );
};
