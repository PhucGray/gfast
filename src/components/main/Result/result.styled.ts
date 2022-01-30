import styled from 'styled-components';

export const ResultWrapper = styled.div`
  z-index: 100;
  background: white;
  flex: 1;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;

export const Console = styled.div`
  width: 100%;
  overflow: hidden;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;

  background: #fff;
`;

export const ConsoleHead = styled.div`
  padding-inline: 20px;

  display: flex;
  justify-content: space-between;

  cursor: row-resize;
  color: #fff;
  background: #383838;

  .right {
    display: flex;
    place-items: center;
    column-gap: 10px;

    button {
      height: 100%;
      padding-inline: 20px;

      svg {
        font-size: 25px;
      }
    }
  }
`;

export const ConsoleBody = styled.div`
  flex: 1;
  padding-inline: 10px;
  overflow-y: auto;
  /* overflow-x: hidden; */

  // custom scrollbar

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: inherit;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
  }

  ::-webkit-scrollbar-thumb:hover {
  }
`;
