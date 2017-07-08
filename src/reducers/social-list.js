import { SocialActionCreators } from '../actions'

const INITIAL_STATE = {
  items: [],
  error: null,
  isFetching: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SocialActionCreators.SOCIAL_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case SocialActionCreators.SOCIAL_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    case SocialActionCreators.SOCIAL_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
