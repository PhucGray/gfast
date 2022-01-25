export type DataType =
    | 'number'
    | 'boolean'
    | 'array'
    | 'object'
    | 'undefined'
    | 'string';

export function checkContentType(content: any): DataType {
    const contentType = typeof content;

    if (contentType === 'number') return 'number';

    if (contentType === 'boolean') return 'boolean';

    if (content instanceof Array) return 'array';

    if (contentType === 'object') return 'object';

    if (contentType === 'undefined') return 'undefined';

    return 'string';
}
