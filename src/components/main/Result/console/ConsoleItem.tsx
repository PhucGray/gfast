import { checkContentType, DataType } from '../../../../utils/console';
import ArrayItem from './ArrayItem';
import ObjectItem from './ObjectItem';

export interface ConsoleItemProps {
    content: any;
}

const ConsoleItem = ({ content }: ConsoleItemProps) => {
    const contentType = checkContentType(content);

    return (
        <>
            {contentType === 'string' && (
                <span style={{ color: '#ec6308' }}>"{content}"</span>
            )}

            {(contentType === 'number' || contentType === 'boolean') && (
                <span style={{ color: '#5a51df' }}>{`${content}`}</span>
            )}

            {contentType === 'undefined' && (
                <span style={{ color: '#cfcfcf' }}>undefined</span>
            )}

            {contentType === 'array' && <ArrayItem content={content} />}

            {contentType === 'object' && <ObjectItem content={content} />}
        </>
    );
};

export default ConsoleItem;
