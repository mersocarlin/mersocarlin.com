import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import ptLocaleData from 'react-intl/locale-data/pt'

import en from './lang-en'
import pt from './lang-pt-BR'

addLocaleData([
  ...enLocaleData,
  ...ptLocaleData,
])

export default {
  en,
  pt,
}
