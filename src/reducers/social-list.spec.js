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

  it('should handle SOCIAL_LIST_SUCCESS', () => {
    const data = [
      {
        icon: 'linkedin',
        name: 'LinkedIn',
        side: 0,
        url: '',
      },
    ]

    const actualState = reducer(undefined, {
      type: 'SOCIAL_LIST_SUCCESS',
      data,
    })

    const expectedState = {
      items: data,
      error: null,
      isFetching: false,
    }

    expect(actualState).toEqual(expectedState)
  })
})
