import React from "react";
import ChapterMap from "@gameworkers/chapter-map-component";
import i18next from "i18next";

import ContentWrapper from "./ContentWrapper";

import "./Map.css";

window.WORLD_110M_JSON_PATH = "/world-110m.json";
window.WORLD_50M_JSON_PATH = "/world-50m.json";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0.9
    };
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
  }

  handleZoomIn() {
    this.setState(state => ({
      zoom: Math.min(state.zoom + 0.5, 20)
    }));
  }

  handleZoomOut() {
    this.setState(state => ({
      zoom: Math.max(state.zoom - 0.5, 1)
    }));
  }

  render() {
    const { zoom } = this.state;
    return (
      <ContentWrapper containerClassName="map_container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div style={{ width: "100%", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <button
                disabled={zoom >= 20}
                style={{
                  marginBottom: 10,
                  opacity: zoom >= 20 ? 0.3 : 1
                }}
                onClick={this.handleZoomIn}
              >
                ➕
              </button>
              <button
                disabled={zoom <= 1}
                style={{ opacity: zoom <= 1 ? 0.3 : 1 }}
                onClick={this.handleZoomOut}
              >
                ➖
              </button>
            </div>
          </div>
          <ChapterMap
            className="chapter_map"
            centerLat={18}
            centerLng={13}
            height={450}
            markerScale={0.1}
            scale={205}
            width={780}
            enablePanning
            zoom={this.state.zoom}
            tooltipClassName="chapter_map_tooltip"
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "1.4rem",
              marginTop: "1rem"
            }}
          >
            {i18next.t("find_local_chapter")}
          </p>
        </div>
      </ContentWrapper>
    );
  }
}

export default Map;
