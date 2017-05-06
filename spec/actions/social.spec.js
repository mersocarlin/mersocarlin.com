import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import socialApiStub from '../stubs/api/social'
import { SocialActionCreators } from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions-social', () => {
  socialApiStub.install()

  it('it should dispatch SOCIAL_LIST_SUCCESS when fetching social list', () => {
    const expectedActions = [
      SocialActionCreators.SOCIAL_LIST_REQUEST,
      SocialActionCreators.SOCIAL_LIST_SUCCESS,
    ]
    const store = mockStore({})

    return store
      .dispatch(SocialActionCreators.fetchSocialList())
      .then(() => {
        const actions = store
          .getActions()
          .map(action => action.type)
        expect(actions).toEqual(expectedActions)
      })
  })
})
