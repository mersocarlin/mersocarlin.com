import {
  SEND_CONTACT_REQUEST,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_FAILURE,
  RESET_CONTACT_FORM,
} from '../actions/contact'


const INITIAL_STATE = {
  contactSent: false,
  error: null,
  isSubmiting: false,
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_CONTACT_REQUEST:
      return {
        ...state,
        contactSent: false,
        error: null,
        isSubmiting: true,
      }
    case SEND_CONTACT_SUCCESS:
      return {
        ...state,
        isSubmiting: false,
        contactSent: action.data,
      }
    case SEND_CONTACT_FAILURE:
      return {
        ...state,
        isSubmiting: false,
        error: action.error,
      }
    case RESET_CONTACT_FORM:
      return {
        ...INITIAL_STATE,
      }
    default:
      return state
  }
}
