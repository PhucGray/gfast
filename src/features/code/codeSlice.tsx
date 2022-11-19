import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LanguageType } from '../../types';

interface CodeProps {
  html: string;
  css: string;
  javascript: string;
}

const initialState: CodeProps = {
  html: `<h1>Sunshine chào dev</h1>`,
  css: `h1 {
  color: blue;
}`,
  javascript: `console.log('Hi');`,
};

export interface SetCodeProps {
  language: LanguageType;
  code: string;
  html: string;
  css: string;
  javascript: string;
}

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, { payload }: PayloadAction<any>) => {
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
  },
});

export const { setCode, clearCode } = codeSlice.actions;
export const selectHtml = (state: RootState) => state.code.html;
export const selectCss = (state: RootState) => state.code.css;
export const selectJavascript = (state: RootState) => state.code.javascript;

export default codeSlice.reducer;
