import reducer from '../../src/reducers/i18n'

import { I18nActionCreators } from '../actions'
import locales from '../i18n'

describe('i18n reducer', () => {
  it('should return initial state', () => {
    const actualState = reducer(undefined, {})
    const expectedState = { ...locales.en }

    expect(actualState).toEqual(expectedState)
  })

  it('should handle UPDATE_LOCALE', () => {
    const actualState = reducer(undefined, {
      type: I18nActionCreators.UPDATE_LOCALE,
      data: { ...locales['pt-BR'] },
    })

    const expectedState = { ...locales['pt-BR'] }

    expect(actualState).toEqual(expectedState)
  })
})
