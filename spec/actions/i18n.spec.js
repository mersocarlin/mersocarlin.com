import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { I18nActionCreators } from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('i18n-actions', () => {
  it('should dispatch UPDATE_LOCALE', () => {
    const expectedAction = { type: I18nActionCreators.UPDATE_LOCALE }
    const store = mockStore({})

    const action = store.dispatch(I18nActionCreators.updateLocale('en'))
    expect(action.type).toEqual(expectedAction.type)
  })
})
