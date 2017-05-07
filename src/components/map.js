// @flow
import React from 'react'
import GoogleMap from 'google-map-react'

import mapStyle from './map.style'
import type { MapCenterT } from '../types'
import './map.scss'

type PropsT = {
  apiKey: string,
  center: MapCenterT,
  children: React$Element<*>,
  options: any,
  zoom: number,
};

const Map = ({ children, apiKey, center, options, zoom }: PropsT) => (
  <div className="map-component">
    <GoogleMap
      bootstrapURLKeys={{
        key: apiKey,
        language: 'en',
      }}
      center={center}
      zoom={zoom}
      options={{ styles: mapStyle, ...options }}
    >
      {children}
    </GoogleMap>
  </div>
)

Map.defaultProps = {
  options: { },
  zoom: 13,
}

export default Map
