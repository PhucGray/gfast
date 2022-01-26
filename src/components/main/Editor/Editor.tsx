import MonacoEditor from '@monaco-editor/react';
import { emmetCSS, emmetHTML, emmetJSX } from 'emmet-monaco-es';
import { editor } from 'monaco-editor';
import { useEffect, useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCodeigniter, DiCss3, DiJavascript } from 'react-icons/di';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
    selectCss,
    selectHtml,
    selectJavascript,
    setCode,
} from '../../../features/code/codeSlice';
import { LanguageType } from '../../../types';
import { EditorWrapper, Loading, Resizer, Tab, Tabs } from './Editor.styled';

const opts: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    tabSize: 2,
    minimap: {
        enabled: false,
    },
    colorDecorators: false,
    acceptSuggestionOnEnter: 'smart',
    cursorStyle: 'line',
    fontSize: 17,
    fixedOverflowWidgets: true,
    wordWrap: 'off',
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoDetectHighContrast: true,
    formatOnPaste: true,
    quickSuggestions: true,
};

const Editor = () => {
    //#region Resize
    const [width, setWidth] = useState(document.body.clientWidth / 2 - 15);
    const isTooShort = width < 468;

    function handleMouseDown() {
        document.addEventListener('mousemove', startResizing);
        document.addEventListener('mouseup', stopResizing);
    }

    const startResizing = (e: any) => {
        const ev = e as MouseEvent;
        ev.preventDefault();
        setWidth(ev.clientX);
    };

    function stopResizing() {
        document.removeEventListener('mousemove', startResizing);
        document.removeEventListener('mouseup', stopResizing);
    }

    //#endregion

    function handleBeforeMount(monaco: any) {
        emmetHTML(monaco, ['html']);
        emmetCSS(monaco, ['css']);
        emmetJSX(monaco, ['jsx', 'javascript', 'typescript']);
    }

    function handleMount(editor: editor.IStandaloneCodeEditor) {
        editor.focus();
        editor.onDidChangeModelLanguage(() => {
            editor.setScrollPosition({
                scrollTop: -editor.getScrollHeight(),
                scrollLeft: -editor.getScrollLeft(),
            });
            editor.focus();
        });
    }

    function handleChange(code: any) {
        dispatch(setCode({ language: currentLanguage, code }));
    }

    //

    const dispatch = useAppDispatch();

    const [currentLanguage, setCurrentLanguage] = useState(
        'html' as LanguageType,
    );
    const html = useAppSelector(selectHtml);
    const css = useAppSelector(selectCss);
    const javascript = useAppSelector(selectJavascript);
    const currentCode =
        currentLanguage === 'html'
            ? html
            : currentLanguage === 'css'
            ? css
            : javascript;

    useEffect(() => {}, [currentLanguage]);

    return (
        <>
            <EditorWrapper style={{ width, minWidth: '333px' }}>
                <Tabs>
                    <Tab
                        isActive={currentLanguage === 'html'}
                        onClick={() => setCurrentLanguage('html')}>
                        <AiFillHtml5 color='#e34c26' />
                        {isTooShort || <span>HTML</span>}
                    </Tab>

                    <Tab
                        isActive={currentLanguage === 'css'}
                        onClick={() => setCurrentLanguage('css')}>
                        <DiCss3 color='#264de4' />
                        {isTooShort || <span>CSS</span>}
                    </Tab>

                    <Tab
                        isActive={currentLanguage === 'javascript'}
                        onClick={() => setCurrentLanguage('javascript')}>
                        <DiJavascript color='#f0db4f' />
                        {isTooShort || <span>JAVASCRIPT</span>}
                    </Tab>
                </Tabs>

                <MonacoEditor
                    className='monaco'
                    theme='vs-dark'
                    options={opts}
                    value={currentCode}
                    language={currentLanguage}
                    beforeMount={handleBeforeMount}
                    onMount={handleMount}
                    onChange={handleChange}
                    loading={
                        <Loading>
                            <DiCodeigniter color='#fb0909' />
                            <div>Loading ...</div>
                        </Loading>
                    }
                />
            </EditorWrapper>

            <Resizer onMouseDown={handleMouseDown} />
        </>
    );
};

export default Editor;
