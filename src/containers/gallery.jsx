import React, { Component } from "react";
import Lightbox from "react-images";

import "./gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxImage: null
    };
  }

  setLightboxImage(index) {
    this.setState(() => ({
      lightboxImage: index
    }));
  }

  render() {
    const { lightboxImage } = this.state;
    const lightboxActive = lightboxImage !== null;

    let { images } = this.props;

    if (images.length > 0) {
      if (typeof images[0] === "string") {
        images = images.map(src => ({
          src
        }));
      }
    }

    return (
      <div className="gallery-container">
        <Lightbox
          images={images}
          backdropClosesModal
          showThumbnails={true}
          isOpen={lightboxActive}
          currentImage={lightboxImage || 0}
          onClickThumbnail={i => this.setLightboxImage(i)}
          onClickPrev={() => this.setLightboxImage(lightboxImage - 1)}
          onClickNext={() => this.setLightboxImage(lightboxImage + 1)}
          onClose={() => this.setLightboxImage(null)}
        />
        {images.map((img, i) => (
          <a
            key={i}
            className={`gallery-image ${img.big ? "gallery-image-big" : ""}`}
            onClick={() => this.setLightboxImage(i)}
          >
            <img
              className={`gallery-image-inner ${
                img.pos && img.pos === "bottom"
                  ? "gallery-image-inner-bottom"
                  : ""
              }`}
              src={img.src}
              alt=""
            />
          </a>
        ))}
      </div>
    );
  }
}
