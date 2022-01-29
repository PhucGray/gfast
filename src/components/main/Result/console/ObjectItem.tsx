import { useState } from 'react';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { checkContentType } from '../../../../utils/console';
import ConsoleItem, { ConsoleItemProps } from './ConsoleItem';
import { ObjectContent, Wrapper } from './consoleItem.styled';

const ObjectItem = ({ content }: ConsoleItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const keys = Object.keys(content);
  const values = Object.values(content);

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
          <span style={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>{`{`}</span>
            {keys.map((key, index) => {
              const content = values[index] as any;
              const contentType = checkContentType(content);

              return (
                <span key={index} style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <span>{key}</span>
                  <span
                    style={{
                      fontWeight: 'bold',
                      marginRight: '10px',
                    }}>
                    :
                  </span>

                  {contentType === 'array' && <>Array({content.length})</>}

                  {contentType !== 'array' && <ConsoleItem content={content} />}

                  <span style={{ marginRight: '10px' }}>
                    {index < keys.length - 1 ? ',' : ''}
                  </span>
                </span>
              );
            })}
            <span>{`}`}</span>
          </span>
        </>
      ) : (
        <>
          <RiArrowDownSFill />
          <ObjectContent>
            {keys.map((key, index) => (
              <div style={{ display: 'flex' }}>
                <span className='index'>
                  {key} <span style={{ fontWeight: 'bold' }}>:</span>
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
