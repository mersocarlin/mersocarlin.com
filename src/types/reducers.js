import type { LocationT, SocialItemT } from './'

export type ReducerErrorT = {
  message: string,
};

export type i18nReducerT = {
  flag: string,
  locale: string,
  messages: {
    [string]: string,
  },
};

export type SendContactReducerT = {
  contactSent: boolean,
  error: ReducerErrorT,
  isSubmiting: boolean,
};

export type SocialListReducerT = {
  items: Array<SocialItemT>,
  error: ReducerErrorT,
  isFetching: boolean,
};

export type RoutingReducerT = {
  locationBeforeTransitions: LocationT,
};
