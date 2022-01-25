import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 56px;
    width: 100%;
    padding-inline: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #212121;

    .logo {
        color: #fff;
        font-size: 18px;
    }

    button {
        font-size: 18px;
        padding: 10px 30px;
    }
`;
