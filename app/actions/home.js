export const SOCIAL_LIST_REQUEST = 'SOCIAL_LIST_REQUEST';
export const SOCIAL_LIST_SUCCESS = 'SOCIAL_LIST_SUCCESS';
export const SOCIAL_LIST_FAILURE = 'SOCIAL_LIST_FAILURE';


export function fetchSocialList () {
  return (dispatch) => {
    return dispatch(_fetchSocialList());
  };
}


function _fetchSocialList () {
  return async dispatch => {
    dispatch({ type: SOCIAL_LIST_REQUEST });
    try {
      const data = [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mersocarlin/en',
          icon: 'linkedin',
          side: 0,
        },
        {
          name: 'Email',
          url: 'mailto:mersocarlin@mersocarlin.com',
          icon: 'envelope-o',
          side: 0,
        },
        {
          name: 'Github',
          url: 'https://github.com/mersocarlin',
          icon: 'github',
          side: 1,
        },
        {
          name: 'Twitter',
          url: 'http://www.twitter.com/mersocarlin',
          icon: 'twitter',
          side: 1,
        },
      ];
      dispatch({ type: SOCIAL_LIST_SUCCESS, data });
    } catch (error) {
      dispatch({ type: SOCIAL_LIST_FAILURE, error });
    }
  };
}
