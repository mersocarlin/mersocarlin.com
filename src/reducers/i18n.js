import locales from '../i18n'
import { I18nActionCreators } from '../actions'


const INITIAL_STATE = { ...locales.en }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case I18nActionCreators.UPDATE_LOCALE:
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
