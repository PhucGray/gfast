import styled from 'styled-components';

export const ResultWrapper = styled.div`
    flex: 1;
    position: relative;

    iframe {
        width: 100%;
        height: 100%;
    }
`;

export const Console = styled.div`
    width: 100%;
    padding-inline: 20px;
    overflow: hidden;

    color: #fff;

    position: absolute;
    bottom: 0;

    background: #383838;
    font-family: sans-serif;

    .console__head {
        display: flex;
        justify-content: space-between;
        cursor: row-resize;
    }

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
