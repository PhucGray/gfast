import { Button } from '../General';
import { HeaderWrapper } from './header.styled';
import { BsFillEraserFill } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { clearCode } from '../../features/code/codeSlice';

const Header = () => {
    const dispatch = useAppDispatch();

    function handleClear() {
        if (window.confirm('Do you want to clear all contents ?')) {
            dispatch(clearCode());
        }
    }
    return (
        <HeaderWrapper>
            <div className='logo'>gfast</div>

            <Button onClick={handleClear}>
                <BsFillEraserFill />
                <div>Clear</div>
            </Button>
        </HeaderWrapper>
    );
};

export default Header;
