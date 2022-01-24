import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
    selectEditorW,
    setEditorW,
} from '../../../features/resize/resizeSlice';
import { EditorWrapper, Resizer, Tab, Tabs } from './Editor.styled';

const Editor = () => {
    const dispatch = useAppDispatch();
    const width = useAppSelector(selectEditorW);

    function handleMouseDown() {
        document.addEventListener('mousemove', startResizing);
        document.addEventListener('mouseup', stopResizing);
    }

    const startResizing = (e: any) => {
        const ev = e as MouseEvent;
        ev.preventDefault();
        dispatch(setEditorW(ev.clientX));
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
                        <span>HTML</span>
                    </Tab>

                    <Tab isActive={false}>
                        <i className='fab fa-css3-alt'></i>
                        <span>CSS</span>
                    </Tab>

                    <Tab isActive={false}>
                        <i className='fab fa-js-square'></i>
                        <span>JAVASCRIPT</span>
                    </Tab>
                </Tabs>

                <div>Editor</div>
            </EditorWrapper>

            <Resizer onMouseDown={handleMouseDown} />
        </>
    );
};

export default Editor;
