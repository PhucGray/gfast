import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    selectHasNewConsoleData,
    selectIsConsoleOpen,
    setIsConsoleOpen,
} from '../../features/console/consoleSlice';
import { Button } from '../General';
import { FooterWrapper } from './footer.styled';

const Footer = () => {
    const dispatch = useAppDispatch();

    const isConsoleOpen = useAppSelector(selectIsConsoleOpen);
    const hasNewConsoleData = useAppSelector(selectHasNewConsoleData);
    return (
        <FooterWrapper id='footer'>
            <Button onClick={() => dispatch(setIsConsoleOpen(true))}>
                Console
                {!isConsoleOpen && hasNewConsoleData && (
                    <div>
                        <span className='span_2' />
                        <span className='span_1' />
                    </div>
                )}
            </Button>
        </FooterWrapper>
    );
};

export default Footer;
