import { Button } from '../General';
import { HeaderWrapper } from './header.styled';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className='logo'>gfast</div>

            <Button>
                <i className='fas fa-eraser'></i>
                <div>Clear</div>
            </Button>
        </HeaderWrapper>
    );
};

export default Header;
