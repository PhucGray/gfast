import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    column-gap: 10px;

    cursor: pointer;
    color: #fff;
    background: #4e4e4e;

    :hover {
        background: #8d8d8d;
    }
`;
