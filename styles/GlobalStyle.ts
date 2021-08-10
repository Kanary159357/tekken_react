import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: 'Spoqa Han Sans Neo';
}

@font-face {
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 200;
  src: url("/fonts/SpoqaHanSansNeoRegular.woff") format('woff');
}
`;
