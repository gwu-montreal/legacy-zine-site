import React from "react";

export default () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        Download the Zine!
      </h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a
          style={{ width: 180 }}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019waluigi.pdf"
        >
          <img
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
              maxWidth: '100%'
            }}
            src="/images/cover_thumb_waluigi.jpg"
          />
        </a>
        <a
          style={{ width: 180 }}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019isabelleisabelle.pdf"
        >
          <img
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
              maxWidth: '100%'
            }}
            src="/images/cover_thumb_isabelle.jpg"
          />
        </a>
        <a
          style={{ width: 180 }}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019unionize.pdf"
        >
          <img
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
              maxWidth: '100%'
            }}
            src="/images/cover_thumb_unionize.jpg"
          />
        </a>
        <a
          style={{ width: 180 }}
          href="https://gameworkers.github.io/zine-gdc-2019/pdfs/gwuzine2019egg.pdf"
        >
          <img
            style={{
              marginRight: '1rem',
              marginBottom: '1rem',
              maxWidth: '100%'
            }}
            src="/images/cover_thumb_egg.jpg"
          />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1.4rem', marginTop: '1rem' }}>
         Choose from the four cover variants and share them with your coworkers!
      </p>
    </div>
  );
};
