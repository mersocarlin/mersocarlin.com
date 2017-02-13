import { expect } from 'chai'
import reducer from '../../src/reducers/i18n'

import { UPDATE_LOCALE } from '../../src/actions/i18n'
import locales from '../../src/i18n'

describe('i18n reducer', () => {
  it('should return initial state', () => {
    const actualState = reducer(undefined, {})
    const expectedState = { ...locales.en }

    expect(actualState).to.deep.equal(expectedState)
  })

  it('should handle UPDATE_LOCALE', () => {
    const actualState = reducer(undefined, {
      type: UPDATE_LOCALE,
      data: { ...locales['pt-BR'] },
    })

    const expectedState = { ...locales['pt-BR'] }

    expect(actualState).to.deep.equal(expectedState)
  })
})
