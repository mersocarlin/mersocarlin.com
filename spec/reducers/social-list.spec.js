import reducer from '../../src/reducers/social-list'
import { SocialActionCreators } from '../../src/actions'

describe('social-list reducer', () => {
  it('should return the initial state', () => {
    const actualState = reducer(undefined, {})
    const expectedState = {
      items: [],
      error: null,
      isFetching: false,
    }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle SOCIAL_LIST_FAILURE', () => {
    let actualState = reducer(undefined, {
      type: SocialActionCreators.SOCIAL_LIST_REQUEST,
    })
    let expectedState = {
      items: [],
      error: null,
      isFetching: true,
    }

    expect(actualState).toEqual(expectedState)

    actualState = reducer(expectedState, {
      type: SocialActionCreators.SOCIAL_LIST_FAILURE,
      error: {},
    })
    expectedState = {
      items: [],
      error: {},
      isFetching: false,
    }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle SOCIAL_LIST_SUCCESS', () => {
    let actualState = reducer(undefined, {
      type: SocialActionCreators.SOCIAL_LIST_REQUEST,
    })
    let expectedState = {
      items: [],
      error: null,
      isFetching: true,
    }

    expect(actualState).toEqual(expectedState)

    const data = [
      {
        icon: 'linkedin',
        name: 'LinkedIn',
        side: 0,
        url: '',
      },
    ]

    actualState = reducer(expectedState, {
      type: SocialActionCreators.SOCIAL_LIST_SUCCESS,
      data,
    })
    expectedState = {
      items: data,
      error: null,
      isFetching: false,
    }

    expect(actualState).toEqual(expectedState)
  })
})
