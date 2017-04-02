import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { updateLocale, UPDATE_LOCALE } from '../../src/actions/i18n'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('i18n-actions', () => {

  it('should dispatch UPDATE_LOCALE', () => {
    const expectedAction = { type: UPDATE_LOCALE }
    const store = mockStore({})

    const action = store.dispatch(updateLocale('en'))
    expect(action.type).toEqual(expectedAction.type)
  })
})
