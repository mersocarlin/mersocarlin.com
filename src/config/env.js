export default {
  environment: process.env.NODE_ENV,
  apiService: {
    url: process.env.API_SERVICE_URL,
  },
  google: {
    analyticsId: process.env.GOOGLE_ANALYTICS_ID,
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
  map: {
    center: {
      lat: parseFloat(process.env.MAP_CENTER_LATITUDE),
      lng: parseFloat(process.env.MAP_CENTER_LONGITUDE),
    },
  },
}
