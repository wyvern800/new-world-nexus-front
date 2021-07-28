import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  color: #b0a5a0;
}

body, html {
  // Remove selections
  -webkit-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;

input, textarea {
     user-select: text;
     -moz-user-select: text;
}

  background-color: rgba(26,27,31);
}

// Panel used in any place
.panelWidget {
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0.1em dotted #3c3c3c;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 10px;
}
`;
