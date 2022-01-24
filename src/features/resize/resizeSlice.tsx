import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ResizeProps {
    editorW: number;
    resultW: number;
}

const initialState: ResizeProps = {
    editorW: document.body.clientWidth / 2 - 15,
    resultW: document.body.clientWidth / 2,
};

const resizeSlice = createSlice({
    name: 'resize',
    initialState,
    reducers: {
        setEditorW: (state, { payload }: PayloadAction<number>) => {
            state.editorW = payload;
            state.resultW = document.body.clientWidth - payload;
        },
    },
});

export const { setEditorW } = resizeSlice.actions;
export const selectEditorW = (state: RootState) => state.resize.editorW;
export const selectResultW = (state: RootState) => state.resize.resultW;

export default resizeSlice.reducer;
