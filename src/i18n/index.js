import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import ptBRLocaleData from 'react-intl/locale-data/pt'

import en from './lang-en'
import br from './lang-pt-BR'

addLocaleData([...enLocaleData, ...ptBRLocaleData])

export default {
  en: {
    flag: 'gb',
    locale: 'en',
    messages: en,
  },
  'pt-BR': {
    flag: 'br',
    locale: 'pt-BR',
    messages: br,
  },
}
