import { useAppSelector } from '../../../app/hooks';
import { selectResultW } from '../../../features/resize/resizeSlice';
import { ResultWrapper } from './result.styled';

const Result = () => {
    const width = useAppSelector(selectResultW);
    return (
        <ResultWrapper
            style={{
                width,
            }}>
            <iframe title='result' id='iframe' />
        </ResultWrapper>
    );
};

export default Result;
