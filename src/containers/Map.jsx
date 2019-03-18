import React from 'react';
import ChapterMap from '@gameworkers/chapter-map-component/dist/chapter-map-component';
import { withRouteData } from "react-static";

import Footer from "./Footer";

import "./Map.css";

window.WORLD_110M_JSON_PATH = '/world-110m.json';
window.WORLD_50M_JSON_PATH = '/world-50m.json';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1
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
    const { title, contents, prevPage, nextPage } = this.props;
    const { zoom } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>{title}</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
              display: 'flex',
              flexDirection: 'column'
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
          <ChapterMap
            className="chapter_map"
            centerLat={30}
            centerLng={13}
            height={450}
            markerScale={0.075}
            scale={125}
            width={780}
            enablePanning
            zoom={this.state.zoom}
            projection="mercator"
            isGeographyIncluded={geography => {
              return geography.properties.NAME !== 'Antarctica'
            }}
          />
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.4rem',
              marginTop: '1rem'
            }}
          >
            Find your local chapter and get involved!
          </p>
        </div>
        <Footer prevPage={prevPage} nextPage={nextPage} />
      </div>
    );
  }
}

export default withRouteData(Map);
