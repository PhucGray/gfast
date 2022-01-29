import ConsoleItem, { ConsoleItemProps } from './ConsoleItem';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { ArrayContent, Wrapper } from './consoleItem.styled';
import { Fragment, useState } from 'react';
import { checkContentType } from '../../../../utils/console';

const ArrayItem = ({ content }: ConsoleItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const newContent = Array.from(content) as any[];

  return (
    <Wrapper
      isCollapsed={isCollapsed}
      onClick={(e) => {
        e.stopPropagation();
        setIsCollapsed(!isCollapsed);
      }}>
      {isCollapsed ? (
        <>
          <RiArrowRightSFill />
          <span>({newContent.length})</span>
          <div style={{ display: 'flex' }}>
            <span>[</span>
            {newContent.map((item, index) => {
              const contentType = checkContentType(item);

              return (
                <div key={index} style={{ display: 'flex' }}>
                  {contentType === 'object' ? (
                    <>{`{...}`}</>
                  ) : (
                    <ConsoleItem content={item} />
                  )}

                  <span style={{ marginRight: '5px' }}>
                    {index < newContent.length - 1 ? ',' : ''}
                  </span>
                </div>
              );
            })}
            <span>]</span>
          </div>
        </>
      ) : (
        <>
          <span>
            <RiArrowDownSFill /> <span>({newContent.length})</span>
          </span>
          <ArrayContent>
            {newContent.map((item, index) => (
              <div key={index} style={{ display: 'flex' }}>
                <span className='index'>
                  {index}
                  <span style={{ fontWeight: 'bold' }}>:</span>
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
              <span style={{ color: '#5a51df' }}>{newContent.length}</span>
            </div>
          </ArrayContent>
        </>
      )}
    </Wrapper>
  );
};

export default ArrayItem;
