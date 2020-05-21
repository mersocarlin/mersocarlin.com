import { css } from 'styled-components'

const cssReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  strong,
  b {
    font-weight: bolder;
  }
`

export default cssReset
