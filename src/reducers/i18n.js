import locales from '../i18n'
import {
  UPDATE_LOCALE,
} from '../actions/i18n'


const INITIAL_STATE = {
  locale: 'en',
  messages: locales.en,
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
