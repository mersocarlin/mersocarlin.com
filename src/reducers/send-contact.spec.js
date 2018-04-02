import reducer from './send-contact'
import { ContactActionCreators } from '../actions'

describe('send-contact reducer', () => {
  it('should return the initial state', () => {
    const actualState = reducer(undefined, {})
    const expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: false,
    }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle SEND_CONTACT_FAILURE', () => {
    let actualState = reducer(undefined, {
      type: ContactActionCreators.SEND_CONTACT_REQUEST,
    })
    let expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: true,
    }

    expect(actualState).toEqual(expectedState)

    actualState = reducer(expectedState, {
      type: ContactActionCreators.SEND_CONTACT_FAILURE,
      error: {},
    })
    expectedState = {
      contactSent: false,
      error: {},
      isSubmiting: false,
    }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle SEND_CONTACT_SUCCESS', () => {
    let actualState = reducer(undefined, {
      type: ContactActionCreators.SEND_CONTACT_REQUEST,
    })
    let expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: true,
    }

    expect(actualState).toEqual(expectedState)

    actualState = reducer(expectedState, {
      type: ContactActionCreators.SEND_CONTACT_SUCCESS,
      data: true,
    })
    expectedState = {
      contactSent: true,
      error: null,
      isSubmiting: false,
    }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle RESET_CONTACT_FORM', () => {
    const actualState = reducer(undefined, {
      type: ContactActionCreators.RESET_CONTACT_FORM,
    })
    const expectedState = {
      contactSent: false,
      error: null,
      isSubmiting: false,
    }

    expect(actualState).toEqual(expectedState)
  })
})
