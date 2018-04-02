const INITIAL_STATE = {
  items: [],
  error: null,
  isFetching: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SOCIAL_LIST_SUCCESS':
      return {
        ...state,
        isFetching: false,
        items: action.data,
      }
    default:
      return state
  }
}
