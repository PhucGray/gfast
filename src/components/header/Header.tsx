import { Button } from '../General';
import { HeaderWrapper } from './header.styled';
import { BsFillEraserFill } from 'react-icons/bs';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className='logo'>gfast</div>

            <Button>
                <BsFillEraserFill />
                <div>Clear</div>
            </Button>
        </HeaderWrapper>
    );
};

export default Header;
