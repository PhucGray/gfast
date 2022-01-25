import { useState } from 'react';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import ConsoleItem, { ConsoleItemProps } from './ConsoleItem';
import { ObjectContent, Wrapper } from './consoleItem.styled';

const ObjectItem = ({ content }: ConsoleItemProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const keys = Object.keys(content);
    const values = Object.values(content);

    return (
        <Wrapper
            isCollapsed={isCollapsed}
            onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? (
                <>
                    <RiArrowRightSFill />
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <span>{`{`}</span>
                        {keys.map((key, index) => (
                            <span key={index}>
                                {key}
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        marginRight: '10px',
                                    }}>
                                    :
                                </span>
                                <ConsoleItem content={values[index]} />
                                <span style={{ marginRight: '10px' }}>
                                    {index < keys.length - 1 ? ',' : ''}
                                </span>
                            </span>
                        ))}
                        <span>{`}`}</span>
                    </div>
                </>
            ) : (
                <>
                    <RiArrowDownSFill />
                    <ObjectContent>
                        {keys.map((key, index) => (
                            <div>
                                <span className='index'>
                                    {key}
                                    <span style={{ fontWeight: 'bold' }}>
                                        :
                                    </span>
                                </span>

                                <ConsoleItem content={values[index]} />
                            </div>
                        ))}
                    </ObjectContent>
                </>
            )}
        </Wrapper>
    );
};

export default ObjectItem;
