import styled from 'styled-components';

export const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tabs = styled.div`
    display: flex;
    column-gap: 1px;

    background: #000;

    svg {
        font-size: 30px;
    }
`;

interface TabProps {
    isActive: boolean;
}

export const Tab = styled.button<TabProps>`
    padding: 10px 40px;

    display: flex;
    align-items: center;
    column-gap: 10px;

    border: none;
    border: ${(props) => (props.isActive ? '1px solid #fff' : 'none')};
    border-bottom: none;
    outline: none;

    cursor: pointer;
    background: ${(props) => (props.isActive ? '#1E1E1E' : '#525252')};
    color: #fff;
    font-weight: bolder;

    :hover {
        background: #303030;
    }
`;

export const Resizer = styled.div`
    height: 100%;
    width: 15px;
    background: gray;

    cursor: e-resize;
`;

export const Loading = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 25px;

    svg {
        animation: bounce 1s infinite;
        font-size: 30px;

        @keyframes bounce {
            0%,
            100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }
    }
`;
