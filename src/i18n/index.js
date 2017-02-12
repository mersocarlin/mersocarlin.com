import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import brLocaleData from 'react-intl/locale-data/br'

import en from './lang-en'
import br from './lang-pt-BR'

addLocaleData([
  ...enLocaleData,
  ...brLocaleData,
])

export default {
  en,
  br,
}
