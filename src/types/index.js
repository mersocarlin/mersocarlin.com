export type ContactT = {
  email: string,
  message: string,
  name: string,
  subject: string,
}

type IntlBodyT = {
  id: string,
}

export type IntlT = {
  formatMessage: (body: IntlBodyT) => string,
}

export type LocationT = {
  action: string,
  hash: string,
  key: string,
  pathname: string,
  search: string,
}

export type MapCenterT = {
  lat: string,
  lng: string,
}

export type SocialItemT = {
  icon: string,
  name: string,
  side: number,
  url: string,
}

export * from './reducers'
