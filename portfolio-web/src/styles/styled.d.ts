import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primnary: string;
      secundary: string;
      optional: string,
      optionalTwo: string,
  
      background: string;
      text: string;
    },

    fonts: {
      titleFont: string,
      bodyFont: string,
      idealFont: string,
      titleFontSize: string,
      subtitleFontSize: string,
    },

    mobile: {
      medium: string,
      large: string,
    }
  }
}