import { useEffect, useState } from 'react';
import { AiOutlineClear, AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  selectCss,
  selectHtml,
  selectJavascript,
} from '../../../features/code/codeSlice';
import {
  selectIsConsoleOpen,
  setHasNewConsoleData,
  setIsConsoleOpen,
} from '../../../features/console/consoleSlice';
import { consoleScript } from '../../../utils/customScript';
import { Button } from '../../General';
import ConsoleItem from './console/ConsoleItem';
import {
  Console,
  ConsoleBody,
  ConsoleHead,
  ResultWrapper,
} from './result.styled';

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

  const isConsoleOpen = useAppSelector(selectIsConsoleOpen);
  const dispatch = useAppDispatch();

  //#region Resize Console
  const [height, setHeight] = useState(null as number | null);

  function handleMouseDown() {
    document.addEventListener('mousemove', startResizing);
    document.addEventListener('mouseup', stopResizing);
  }

  const startResizing = (e: any) => {
    const ev = e as MouseEvent;
    ev.preventDefault();

    const footerHeight = document.getElementById('footer')?.offsetHeight || 0;

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

    dispatch(setHasNewConsoleData());
  }

  function clearConsole() {
    localStorage.removeItem('console');
    setConsoleData([]);
  }

  useEffect(() => {
    localStorage.removeItem('console');

    window.addEventListener('storage', getConsoleFromStorage);

    return () => window.removeEventListener('storage', getConsoleFromStorage);
  }, []);
  //#endregion

  return (
    <ResultWrapper>
      <iframe
        title='result'
        id='iframe'
        srcDoc={srcDoc}
        sandbox='allow-same-origin allow-scripts allow-modals'
      />

      {isConsoleOpen && (
        <Console
          style={{
            height: height || '50%',
            maxHeight: '100%',
            minHeight: 40,
          }}>
          <ConsoleHead style={{ height: 40 }} onMouseDown={handleMouseDown}>
            <div style={{ margin: 'auto 0' }}>CONSOLE</div>

            <div className='right'>
              <Button onClick={clearConsole}>
                <AiOutlineClear />
              </Button>

              <Button onClick={() => dispatch(setIsConsoleOpen(false))}>
                <AiOutlineClose />
              </Button>
            </div>
          </ConsoleHead>

          <ConsoleBody>
            {consoleData &&
              consoleData.map((console: any, index) => {
                return (
                  <div
                    key={index}
                    style={
                      consoleData.length > 0
                        ? {
                            borderBottom: '1px solid #cecece',
                            padding: '10px 0',
                          }
                        : {}
                    }>
                    <ConsoleItem content={console.content} />
                  </div>
                );
              })}
          </ConsoleBody>
        </Console>
      )}
    </ResultWrapper>
  );
};

export default Result;
