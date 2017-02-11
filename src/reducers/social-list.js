import {
  SOCIAL_LIST_REQUEST,
  SOCIAL_LIST_SUCCESS,
  SOCIAL_LIST_FAILURE,
} from '../actions/social'


const INITIAL_STATE = {
  items: [],
  error: null,
  isFetching: false,
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOCIAL_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case SOCIAL_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case SOCIAL_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
