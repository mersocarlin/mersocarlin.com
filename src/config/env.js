export default {
  environment: process.env.NODE_ENV,
  apiService: {
    url:
      process.env.API_SERVICE_URL || 'https://mersocarlin-api.herokuapp.com/',
  },
  google: {
    analyticsId: process.env.GOOGLE_ANALYTICS_ID || 'UA-17163651-1',
    mapsApiKey:
      process.env.GOOGLE_MAPS_API_KEY ||
      'AIzaSyA946EyUxmKjZBttWpQJBIOdOdaBee8LHc',
  },
  map: {
    center: {
      lat: parseFloat(process.env.MAP_CENTER_LATITUDE || '52.5205177'),
      lng: parseFloat(process.env.MAP_CENTER_LONGITUDE || '13.4014216'),
    },
  },
}
