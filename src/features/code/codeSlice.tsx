import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LanguageType } from '../../types';

interface CodeProps {
    html: string;
    css: string;
    javascript: string;
    currentLanguage: LanguageType;
}

const initialState: CodeProps = {
    html: '',
    css: '',
    javascript: '',
    currentLanguage: 'html',
};

export interface SetCodeProps {
    language: LanguageType;
    code: string;
}

const codeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        setCode: (state, { payload }: PayloadAction<SetCodeProps>) => {
            const { language, code } = payload;

            if (language === 'html') {
                state.html = code;
                return;
            }

            if (language === 'css') {
                state.css = code;
                return;
            }

            if (language === 'javascript') state.javascript = code;
        },
        clearCode: (state) => {
            state.html = '';
            state.css = '';
            state.javascript = '';
        },
        setCurrentLanguage: (
            state,
            { payload }: PayloadAction<LanguageType>,
        ) => {
            state.currentLanguage = payload;
        },
    },
});

export const { setCode, clearCode, setCurrentLanguage } = codeSlice.actions;
export const selectHtml = (state: RootState) => state.code.html;
export const selectCss = (state: RootState) => state.code.css;
export const selectJavascript = (state: RootState) => state.code.javascript;
export const selectCurrentLanguage = (state: RootState) =>
    state.code.currentLanguage;

export default codeSlice.reducer;
