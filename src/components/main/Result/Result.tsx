import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import {
    selectCss,
    selectHtml,
    selectJavascript,
} from '../../../features/code/codeSlice';
import { Console, ResultWrapper } from './result.styled';
import { AiOutlineClose, AiOutlineClear } from 'react-icons/ai';
import { Button } from '../../General';
import { consoleScript } from '../../../utils/customScript';

const Result = () => {
    //#region Code
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
                    <script>
                    ${consoleScript + javascript}
                    </script>
                </body>
            </html>`;

            setSrcDoc(code);
        }, 500);

        return () => clearTimeout(timeout);
    }, [html, css, javascript]);
    //#endregion

    //#region Resize Console
    const DEFAULT_HEIGHT = 40;
    const [height, setHeight] = useState(DEFAULT_HEIGHT);

    function handleMouseDown() {
        document.addEventListener('mousemove', startResizing);
        document.addEventListener('mouseup', stopResizing);
    }

    const startResizing = (e: any) => {
        const ev = e as MouseEvent;
        ev.preventDefault();

        const footerHeight =
            document.getElementById('footer')?.offsetHeight || 0;

        const currentHeight =
            document.body.clientHeight - ev.clientY - footerHeight;

        setHeight(currentHeight);
    };

    function stopResizing() {
        document.removeEventListener('mousemove', startResizing);
        document.removeEventListener('mouseup', stopResizing);
    }
    //#endregion

    //#region Console logic
    const [consoleData, setConsoleData] = useState([]);

    function getConsoleFromStorage() {
        const localData = localStorage.getItem('console');

        const consoleFromStorage = localData && JSON.parse(localData);

        setConsoleData(consoleFromStorage);
    }

    function clearConsole() {
        localStorage.removeItem('console');
        setConsoleData([]);
    }

    useEffect(() => {
        localStorage.removeItem('console');

        window.addEventListener('storage', getConsoleFromStorage);

        return () =>
            window.removeEventListener('storage', getConsoleFromStorage);
    }, []);
    //#endregion

    return (
        <ResultWrapper>
            <iframe
                title='result'
                id='iframe'
                srcDoc={srcDoc}
                sandbox='allow-same-origin allow-scripts'
            />

            <Console
                style={{
                    height,
                    maxHeight: '100%',
                    minHeight: DEFAULT_HEIGHT,
                }}>
                <div
                    className='console__head'
                    style={{ height: DEFAULT_HEIGHT }}
                    onMouseDown={handleMouseDown}>
                    <div style={{ margin: 'auto 0' }}>CONSOLE</div>

                    <div className='right'>
                        <Button>
                            <AiOutlineClear />
                        </Button>

                        <Button>
                            <AiOutlineClose />
                        </Button>
                    </div>
                </div>

                <hr style={{ margin: '10px 0' }} />

                <div>
                    {consoleData &&
                        consoleData.map((console: any) => {
                            return <div>{}</div>;
                        })}
                </div>
            </Console>
        </ResultWrapper>
    );
};

export default Result;
