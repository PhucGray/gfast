import styled from 'styled-components';

export const EditorWrapper = styled.div`
    /* width: 50vw; */
    /* width */
`;

export const Tabs = styled.div`
    display: flex;

    background: #000;

    .fab {
        font-size: 20px;
    }

    .fa-html5 {
        color: #e34c26;
    }

    .fa-css3-alt {
        color: #264de4;
    }

    .fa-js-square {
        color: #f0db4f;
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
    border-right: 1px solid gray;
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
