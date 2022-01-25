import Monaco from '@monaco-editor/react';
import { emmetCSS, emmetHTML, emmetJSX } from 'emmet-monaco-es';
import { useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCodeigniter, DiCss3, DiJavascript } from 'react-icons/di';
import { EditorWrapper, Loading, Resizer, Tab, Tabs } from './Editor.styled';

const opts = {
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
    wordWrap: 'on',
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

    function handleMount(editor: any) {
        editor.focus();
        editor.onDidChangeModel(() => editor.focus());
    }

    function handleChange(code: any) {
        console.log(code);
    }
    return (
        <>
            <EditorWrapper style={{ width, minWidth: '333px' }}>
                <Tabs>
                    <Tab isActive>
                        <AiFillHtml5 color='#e34c26' />
                        {isTooShort || <span>HTML</span>}
                    </Tab>

                    <Tab isActive={false}>
                        <DiCss3 color='#264de4' />
                        {isTooShort || <span>CSS</span>}
                    </Tab>

                    <Tab isActive={false}>
                        <DiJavascript color='#f0db4f' />
                        {isTooShort || <span>JAVASCRIPT</span>}
                    </Tab>
                </Tabs>

                <Monaco
                    theme='vs-dark'
                    options={opts}
                    language='html'
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
