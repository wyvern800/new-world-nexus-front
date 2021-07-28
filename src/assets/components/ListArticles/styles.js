import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
  }

  // Post card used in a postlist
  .post_card {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;

    div {
      display: flex;
      flex-direction: row;

      img {
        width: 200px;
        border-radius: 10px;
        height: auto;
        max-width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        h3 {
          color: #fffafa;
        }

        p {
          display: block;
          width: 400px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    p {
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }

  .post_card:not(:first-child) {
    border-top: 1px solid rgba(196, 196, 196, 0.2);
  }

  .post_card:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: rgba(54, 54, 54, 0.24);
    cursor: pointer;
  }

  // Animatin when we move our mouse out
  .post_card:not(:hover) {
    transition: background-color 0.3s ease-in-out;
  }
`;
