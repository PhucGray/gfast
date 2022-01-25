import ConsoleItem, { ConsoleItemProps } from './ConsoleItem';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { ArrayContent, Wrapper } from './consoleItem.styled';
import { Fragment, useState } from 'react';

const ArrayItem = ({ content }: ConsoleItemProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const newContent = Array.from(content) as any[];

    return (
        <Wrapper
            isCollapsed={isCollapsed}
            onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? (
                <>
                    <RiArrowRightSFill />
                    <div>({newContent.length})</div>
                    <div>
                        [
                        {newContent.map((item, index) => (
                            <Fragment key={index}>
                                <ConsoleItem content={item} />
                                <span>
                                    {index < newContent.length - 1 ? ',  ' : ''}
                                </span>
                            </Fragment>
                        ))}
                        ]
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <RiArrowDownSFill /> <span>({newContent.length})</span>
                    </div>
                    <ArrayContent>
                        {newContent.map((item, index) => (
                            <div>
                                <span className='index'>
                                    {index}
                                    <span style={{ fontWeight: 'bold' }}>
                                        :
                                    </span>
                                </span>
                                <ConsoleItem content={item} />
                            </div>
                        ))}
                        <div>
                            <span
                                style={{
                                    color: '#9333bb',
                                    marginRight: '10px',
                                }}>
                                length
                                <span style={{ fontWeight: 'bold' }}>:</span>
                            </span>
                            <span style={{ color: '#5a51df' }}>
                                {newContent.length}
                            </span>
                        </div>
                    </ArrayContent>
                </>
            )}
        </Wrapper>
    );
};

export default ArrayItem;
