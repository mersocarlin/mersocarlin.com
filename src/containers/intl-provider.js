import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

export default connect(state => (
  { ...state.i18n }
))(IntlProvider)
