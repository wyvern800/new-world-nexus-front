import styled from 'styled-components';

export const Container = styled.div`
  .article-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    img {
      height: 300px;
      border-radius: 10px;
      margin: 15px;
    }

    h1 {
      color: white;
      margin: 15px;
    }

    p {
      padding-bottom: 25px;
    }

    div.article-separator {
      display: flex;
      border-bottom: 0.1em dashed rgba(61, 61, 61, 0.3);
      justify-content: center;
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      div.reactions {
        margin: 20px
      }

      span.signature {
        text-align: right;
        font-style: italic;
        margin: 20px;
      }
    }
  }
`;
