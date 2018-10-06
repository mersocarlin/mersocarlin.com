// @flow
import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'

import type { MapCenterT } from '../types'

type PropsT = {
  center: MapCenterT,
  zoom?: number,
}

export default function Map({ center, zoom = 12 }: PropsT) {
  return (
    <LeafletMap
      center={[center.lat, center.lng]}
      zoom={zoom}
      zoomControl={null}
    >
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[center.lat, center.lng]} />
    </LeafletMap>
  )
}
