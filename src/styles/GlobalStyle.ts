import { createGlobalStyle } from 'styled-components';
import Regulafont from './font/SpoqaHanSansNeoRegular.woff';
export const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
  user-select: none;
  font-family: 'Spoqa Han Sans';
}

@font-face {
  font-family: 'Spoqa Han Sans';
  font-weight: 200;
  src: url(${Regulafont}) format('woff');
}

`;
