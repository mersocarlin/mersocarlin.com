import { css } from 'styled-components'

const theme = css`
  :root {
    /* font definitions */
    --font-family: 'Josefin Sans', 'Helvetica', 'Arial', sans-serif;
    --font-size-h1: 40rem;
    --font-size-h2: 30rem;
    --font-size-h3: 25rem;

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
    --background-main-level1: #fff;
    --background-text: #666;
    --primary-main: #c0392b;
    --primary-dark: #923026;

    /* gray colors */
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-200: #eeeeee;
    --gray-300: #e0e0e0;
    --gray-400: #bdbdbd;
    --gray-500: #9e9e9e;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
  }

  .dark-theme {
    /* color definitions */
    --background-main: #212121;
    --background-main-level1: #333;
    --background-text: #fafafa;
    --primary-main: #ff0000;
    --primary-dark: #d91e18;

    /* gray colors */
    --gray-50: #212121;
    --gray-100: #424242;
    --gray-200: #616161;
    --gray-300: #757575;
    --gray-400: #9e9e9e;
    --gray-500: #bdbdbd;
    --gray-600: #e0e0e0;
    --gray-700: #eeeeee;
    --gray-800: #f5f5f5;
    --gray-900: #fafafa;
  }
`

export default theme
