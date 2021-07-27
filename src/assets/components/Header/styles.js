import styled from 'styled-components';

export const HeaderComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 80px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;

  // The nav bar with its content
  div.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .logo {
      width: 45px;
      border-right: solid 2px rgba(20, 40, 20, 0.3);
      border-bottom: solid 2px rgba(20, 40, 20, 0.3);
    }

    ul {
      li {
        display: inline;
        font-size: 18px;
        margin: 20px;
      }

      li:hover {
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
    }
  }
`;
