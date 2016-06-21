import React, { Component, PropTypes } from 'react';

import { mapStyle } from './map.style';

export default class Map extends Component {
  static propTypes = {
    centerLat: PropTypes.number.isRequired,
    centerLng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  };

  constructor (props) {
    super(props);

    const { centerLat, centerLng } = props;

    this.map = null;
    this.center = {
      lat: centerLat,
      lng: centerLng,
    };
    this.resize = this.onResize.bind(this);
  }

  componentWillMount () {
    window.addEventListener('resize', this.resize);
  }

  componentDidMount () {
    const customMapType = new google.maps.StyledMapType(mapStyle);
    const customMapTypeId = 'custom_style';

    this.map = new google.maps.Map(this.refs.map, {
      center: this.center,
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId],
      },
      scaleControl: false,
      streetViewControl: false,
      zoom: this.props.zoom,
    });

    this.map.mapTypes.set(customMapTypeId, customMapType);
    this.map.setMapTypeId(customMapTypeId);

    const marker = new google.maps.Marker({
      position: this.center,
      map: this.map,
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize);
  }

  onResize () {
    google.maps.event.trigger(this.map, 'resize');
    this.map.setCenter(this.center);
  }

  render () {
    return (
      <div className="map-component">
        <div className="map" ref="map"></div>
      </div>
    );
  }
}
