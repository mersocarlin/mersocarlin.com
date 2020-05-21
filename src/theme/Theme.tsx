import { css } from 'styled-components'

const theme = css`
  :root {
    /* font definitions */
    --font-family: 'Josefin Sans', 'Helvetica', 'Arial', sans-serif;
    --font-size-h1: 40rem;
    --font-size-h2: 30rem;

    /* paddings */
    --padding-xsmall: 2rem;
    --padding-small: 4rem;
    --padding-normal: 8rem;
    --padding-large: 16rem;
    --padding-xlarge: 32rem;

    /* box shadows */
    --box-shadow-1: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    --box-shadow-2: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12);
    --box-shadow-3: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    --box-shadow-4: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    --box-shadow-5: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  html {
    font-size: 1px;
  }

  body,
  .light-theme {
    /* color definitions */
    --background-main: #fafafa;
    --background-text: #666;
  }

  .dark-theme {
    /* color definitions */
    --background-main: #212121;
    --background-text: #fafafa;
  }
`

export default theme
