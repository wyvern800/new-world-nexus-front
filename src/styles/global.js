import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  color: #b0a5a0;
}

body, html {
  background-color: rgba(26,27,31);

  // Remove selections
  -webkit-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;

input, textarea {
     user-select: text;
     -moz-user-select: text;
  }
}

// The content wrapper, goes around the application
.main {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 600px) {
    .main {
      flex-direction: column;
    }
  }

// Panel used in any place
.block-panel {
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0.1em dashed #3c3c3c;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 10px;
}

// Top container used by the AD_01 hotspot
.block-top {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    border-bottom: solid 1px rgba(255, 255, 1, 0.3);
    display: flex;
  }

  // Left container
  .block-left {
    flex-grow: 0; /* default 0 */
    min-width: 10px;
    flex-direction: column;
  }

  // Middle container
  .block-middle {
    flex-grow: 1; /* default 0 */
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  // Right container
  .block-right {
    flex-grow: 4; /* default 0 */
    flex-direction: column;
  }

  // Bottom container
  .block-bottom {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    border-top: solid 1px rgba(255, 255, 1, 0.3);

    display: flex;
    justify-content: space-between;
  }

  // Used in breadcrumbs
  .breadcrumb-articles {
    margin-left: 20px;

    a {
      color: white;
      text-decoration: none;
    }

    a:hover {
      color: rgba(255, 208, 0, 0.6);
    }

    .breadcrumb-separator {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;
