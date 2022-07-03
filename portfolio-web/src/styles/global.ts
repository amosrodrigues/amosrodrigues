import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    font: 400 1rem ${(props) => props.theme.fonts.bodyFont};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  .title {
    font: 700 ${(props) => props.theme.fonts.titleFontSize} ${(props) =>
  props.theme.fonts.titleFont};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: auto;
  }

  .container {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .section {
    height: 100vh;
    width: 100vw;
    padding: calc(5rem + 4.5rem) 0;
    overflow-Y: auto;

    @media (min-width: ${(props) => props.theme.mobile.large}) {
      overflow-Y: hidden;
    }
  }

  .section .title {
    margin-bottom: 1rem;
  }

  .section .subtitle {
    font-size: ${(props) => props.theme.fonts.subtitleFontSize};
  }
`;
