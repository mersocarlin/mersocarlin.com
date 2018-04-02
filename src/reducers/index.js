import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import i18n from './i18n'
import sendContact from './send-contact'

const rootReducer = combineReducers({
  i18n,
  sendContact,
  routing,
})

export default rootReducer
