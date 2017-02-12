import locales from '../i18n'

export const UPDATE_LOCALE = 'UPDATE_LOCALE'

export function updateLocale (locale) {
  return {
    type: UPDATE_LOCALE,
    data: {
      locale,
      messages: locales[locale],
    },
  }
}
