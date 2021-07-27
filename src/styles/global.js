import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  text-align: center;

  color: #b0a5a0;
}

body, html {
  background-color: rgb(26,27,31);
}

// Panel used in any place
.sidePanel {
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0.2em solid rgba(255, 255, 255, 0.2);
}
`;
