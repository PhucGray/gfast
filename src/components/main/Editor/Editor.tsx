import { useState } from 'react';
import { EditorWrapper, Resizer, Tab, Tabs } from './Editor.styled';

const Editor = () => {
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
    return (
        <>
            <EditorWrapper style={{ width, minWidth: 'max-content' }}>
                <Tabs>
                    <Tab isActive>
                        <i className='fab fa-html5'></i>
                        {isTooShort || <span>HTML</span>}
                    </Tab>

                    <Tab isActive={false}>
                        <i className='fab fa-css3-alt'></i>
                        {isTooShort || <span>CSS</span>}
                    </Tab>

                    <Tab isActive={false}>
                        <i className='fab fa-js-square'></i>
                        {isTooShort || <span>JAVASCRIPT</span>}
                    </Tab>
                </Tabs>

                <div>Editor</div>
            </EditorWrapper>

            <Resizer onMouseDown={handleMouseDown} />
        </>
    );
};

export default Editor;
