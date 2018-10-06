export default {
  environment: process.env.NODE_ENV,
  apiService: {
    url:
      process.env.API_SERVICE_URL || 'https://mersocarlin-api.herokuapp.com/',
  },
  google: {
    analyticsId: process.env.GOOGLE_ANALYTICS_ID || 'UA-17163651-1',
  },
  map: {
    center: {
      lat: parseFloat(process.env.MAP_CENTER_LATITUDE || '53.350140'),
      lng: parseFloat(process.env.MAP_CENTER_LONGITUDE || '-6.266155'),
    },
  },
}
