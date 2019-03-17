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
      zoom: 0.9
    };
    this.handleZoom = this.handleZoom.bind(this);
  }

  handleZoom(e) {
    this.setState({
      zoom: Number(e.target.value)
    });
  }

  render() {
    const { title, contents, prevPage, nextPage } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <h3>{title}</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <ChapterMap
            className="chapter_map"
            centerLat={18}
            centerLng={13}
            height={450}
            markerScale={0.075}
            scale={205}
            width={780}
            enablePanning
            zoom={this.state.zoom}
          />
          <label
            style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}
          >
            <strong style={{ marginRight: '1rem' }}>Zoom in: </strong>
            <input
              value={this.state.zoom}
              min="1"
              max="20"
              type="range"
              step="any"
              onChange={this.handleZoom}
            />
          </label>
          <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>
            Find your local chapter and get involved!
          </p>
        </div>
        <Footer prevPage={prevPage} nextPage={nextPage} />
      </div>
    );
  }
}

export default withRouteData(Map);
