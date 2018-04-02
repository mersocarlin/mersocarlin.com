import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { env } from '../config'
import { createBigString } from '../fixtures'
import * as ContactActionCreators from './contact'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions-contact', () => {
  beforeAll(() => {
    env.apiService.url = 'http://localhost.com/'
  })

  it('it should dispatch SEND_CONTACT_FAILURE when invalid payload data', () => {
    fetchMock.mock('api/messages', {})

    const expectedActions = [
      ContactActionCreators.SEND_CONTACT_REQUEST,
      ContactActionCreators.SEND_CONTACT_FAILURE,
    ]
    const store = mockStore({})
    const payload = {
      name: createBigString(),
      email: 'mail@mail.com',
      subject: 'subject',
      message: 'message',
    }

    return store
      .dispatch(ContactActionCreators.sendContactForm(payload))
      .then(() => {
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedActions)

        fetchMock.restore()
      })
  })

  it('it should dispatch SEND_CONTACT_FAILURE when invalid request from api', () => {
    fetchMock.mock('http://localhost.com/api/messages', {
      body: { error_message: 'Something is wrong', status_code: 400 },
    })

    const expectedActions = [
      ContactActionCreators.SEND_CONTACT_REQUEST,
      ContactActionCreators.SEND_CONTACT_FAILURE,
    ]
    const store = mockStore({})
    const payload = {
      name: 'your name',
      email: 'mail@mail.com',
      subject: 'subject',
      message: 'message',
    }

    return store
      .dispatch(ContactActionCreators.sendContactForm(payload))
      .then(() => {
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedActions)

        fetchMock.restore()
      })
  })

  it('it should dispatch SEND_CONTACT_SUCCESS posting new contact message', () => {
    fetchMock.mock('http://localhost.com/api/messages', {})

    const expectedActions = [
      ContactActionCreators.SEND_CONTACT_REQUEST,
      ContactActionCreators.SEND_CONTACT_SUCCESS,
    ]
    const store = mockStore({})
    const payload = {
      name: 'your name',
      email: 'mail@mail.com',
      subject: 'subject',
      message: 'message',
    }

    return store
      .dispatch(ContactActionCreators.sendContactForm(payload))
      .then(() => {
        const actions = store.getActions().map(action => action.type)
        expect(actions).toEqual(expectedActions)

        fetchMock.restore()
      })
  })
})
