import { expect } from 'chai'
import reducer from '../../src/reducers/social-list'
import {
  SOCIAL_LIST_REQUEST,
  SOCIAL_LIST_SUCCESS,
  SOCIAL_LIST_FAILURE,
} from '../../src/actions/social'

describe('social-list reducer', () => {
  it('should return the initial state', () => {
    const actualState = reducer(undefined, {})
    const expectedState = {
      items: [],
      error: null,
      isFetching: false,
    }

    expect(actualState).to.deep.equal(expectedState)
  })

  it('should handle SOCIAL_LIST_FAILURE', () => {
    let actualState = reducer(undefined, { type: SOCIAL_LIST_REQUEST })
    let expectedState = {
      items: [],
      error: null,
      isFetching: true,
    }

    expect(actualState).to.deep.equal(expectedState)

    actualState = reducer(expectedState, { type: SOCIAL_LIST_FAILURE, error: {} })
    expectedState = {
      items: [],
      error: {},
      isFetching: false,
    }

    expect(actualState).to.deep.equal(expectedState)
  })

  it('should handle SOCIAL_LIST_SUCCESS', () => {
    let actualState = reducer(undefined, { type: SOCIAL_LIST_REQUEST })
    let expectedState = {
      items: [],
      error: null,
      isFetching: true,
    }

    expect(actualState).to.deep.equal(expectedState)

    const data = [
      {
        icon: 'linkedin',
        name: 'LinkedIn',
        side: 0,
        url: '',
      },
    ]

    actualState = reducer(expectedState, { type: SOCIAL_LIST_SUCCESS, data })
    expectedState = {
      items: data,
      error: null,
      isFetching: false,
    }

    expect(actualState).to.deep.equal(expectedState)
  })
})
