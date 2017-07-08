import { ContactActionCreators } from '../actions'

const INITIAL_STATE = {
  contactSent: false,
  error: null,
  isSubmiting: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactActionCreators.SEND_CONTACT_REQUEST:
      return {
        ...state,
        contactSent: false,
        error: null,
        isSubmiting: true,
      }
    case ContactActionCreators.SEND_CONTACT_SUCCESS:
      return {
        ...state,
        isSubmiting: false,
        contactSent: action.data,
      }
    case ContactActionCreators.SEND_CONTACT_FAILURE:
      return {
        ...state,
        isSubmiting: false,
        error: action.error,
      }
    case ContactActionCreators.RESET_CONTACT_FORM:
      return {
        ...INITIAL_STATE,
      }
    default:
      return state
  }
}
