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
          icon: 'linkedin',
          name: 'LinkedIn',
          side: 0,
          title: 'Checkout my LinkedIn profile!',
          url: 'https://www.linkedin.com/in/mersocarlin/en',
        },
        {
          className: 'google plus',
          icon: 'mail',
          name: 'Email',
          side: 0,
          title: 'Feel free to send me an email and get in touch!',
          url: 'mailto:mersocarlin@mersocarlin.com',
        },
        {
          icon: 'github',
          name: 'Github',
          side: 1,
          title: 'Want to see how do I code? GitHub is the right place ;)',
          url: 'https://github.com/mersocarlin',
        },
        {
          icon: 'twitter',
          name: 'Twitter',
          side: 1,
          title: 'Checkout my last tweets!',
          url: 'http://www.twitter.com/mersocarlin',
        },
      ];
      dispatch({ type: SOCIAL_LIST_SUCCESS, data });
    } catch (error) {
      dispatch({ type: SOCIAL_LIST_FAILURE, error });
    }
  };
}
