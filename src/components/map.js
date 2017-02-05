import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import { mapStyle } from './map.style';
import './map.scss';

class Map extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
  };

  render () {
    const { apiKey, center, zoom } = this.props;
    const bootstrapURLKeys = {
      key: apiKey,
      language: 'en',
    };
    const mapOptions = {
      styles: mapStyle,
    };

    return (
      <div className="map-component">
        <GoogleMap ref="map"
          bootstrapURLKeys={bootstrapURLKeys}
          defaultCenter={center}
          defaultZoom={zoom}
          onChange={this.onMapChange}
          options={mapOptions}
        >
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
