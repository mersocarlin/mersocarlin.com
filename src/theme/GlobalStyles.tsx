import { createGlobalStyle } from 'styled-components'

import cssReset from './CssReset'
import theme from './Theme'

const GlobalStyes = createGlobalStyle(theme as any, cssReset as any)

export default GlobalStyes
