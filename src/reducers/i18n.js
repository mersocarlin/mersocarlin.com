import locales from '../i18n'
import {
  UPDATE_LOCALE,
} from '../actions/i18n'


const INITIAL_STATE = { ...locales.en }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      if (!action.data.messages) {
        return state
      }

      if (action.data.locale === state.locale) {
        return state
      }

      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
