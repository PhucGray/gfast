import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import {
    selectCss,
    selectHtml,
    selectJavascript,
} from '../../../features/code/codeSlice';
import { ResultWrapper } from './result.styled';

const Result = () => {
    const html = useAppSelector(selectHtml);
    const css = useAppSelector(selectCss);
    const javascript = useAppSelector(selectJavascript);

    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const code = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${javascript}</script>
                </body>
            </html>`;

            setSrcDoc(code);
        }, 500);

        return () => clearTimeout(timeout);
    }, [html, css, javascript]);
    return (
        <ResultWrapper style={{}}>
            <iframe
                title='result'
                id='iframe'
                srcDoc={srcDoc}
                sandbox='allow-scripts'
            />
        </ResultWrapper>
    );
};

export default Result;
