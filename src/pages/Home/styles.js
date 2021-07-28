import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  // The content wrapper, goes around the application
  .contentWrapper {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 600px) {
    .contentWrapper {
      flex-direction: column;
    }
  }

  // Top container used by the AD_01 hotspot
  .topContainer {
    display: flex;
    justify-content: space-between;
  }

  // Left container
  .leftContainer {
    flex-grow: 0; /* default 0 */
    min-width: 10px;
    flex-direction: column;
  }

  // Middle container
  .midContainer {
    flex-grow: 1; /* default 0 */
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  // Right container
  .rightContainer {
    flex-grow: 4; /* default 0 */
    flex-direction: column;
  }

  // Bottom container
  .bottomContainer {
    display: flex;
    justify-content: space-between;
  }

  // Advertisement block
  .topBlock {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    border-bottom: solid 1px rgba(255, 255, 1, 0.3);
  }

  .bottomBlock {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    border-top: solid 1px rgba(255, 255, 1, 0.3);
  }
`;
