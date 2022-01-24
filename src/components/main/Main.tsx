import Editor from './Editor/Editor';
import Result from './Result/Result';
import styled from 'styled-components';

const MainWrapper = styled.div`
    flex: 1;
    display: flex;
`;

const Main = () => {
    return (
        <MainWrapper>
            <Editor />
            <Result />
        </MainWrapper>
    );
};

export default Main;
