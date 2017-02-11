import { social } from '../api'

export const SOCIAL_LIST_REQUEST = 'SOCIAL_LIST_REQUEST'
export const SOCIAL_LIST_SUCCESS = 'SOCIAL_LIST_SUCCESS'
export const SOCIAL_LIST_FAILURE = 'SOCIAL_LIST_FAILURE'

export function fetchSocialList () {
  return async (dispatch) => {
    dispatch({ type: SOCIAL_LIST_REQUEST })
    try {
      const data = social.getSocialList()
      dispatch({ type: SOCIAL_LIST_SUCCESS, data })
    } catch (error) {
      dispatch({ type: SOCIAL_LIST_FAILURE, error })
    }
  }
}
