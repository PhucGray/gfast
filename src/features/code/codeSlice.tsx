import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LanguageType } from '../../types';

interface CodeProps {
  html: string;
  css: string;
  javascript: string;
}

const initialState: CodeProps = {
  html: `<!DOCTYPE html>
<html>

<body>
  <div class="container">

    <!-- svg: dragon icon -->
    <svg id='code' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dragon" role="img"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-dragon fa-w-20">
      <path fill="currentColor"
        d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"
        class=""></path>
    </svg>

    <button id="btn" class="btn">Start</button>
  </div>
</body>

</html>`,
  css: `* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
}

svg {
  height: 50px;
  width: 50px;
  color: #b334dd;
}

.btn {
  padding: 10px 40px;

  border: none;
  outline: none;
  border-radius: 50px;

  background: #b334dd;
  color: #fff;

  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #8f2ab1;
}

.bounce {
  animation: bounce 1s ease-in infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`,
  javascript: `const icon = document.getElementById('icon')
const button = document.getElementById('btn')

button.onclick = () => {
  if(icon.classList.contains('bounce')) {
    button.innerText = 'Start'
  } else {
    button.innerText = 'Stop'
  }

  icon.classList.toggle('bounce')
}

console.log("I'm a dragon !!!")`,
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
  },
});

export const { setCode, clearCode } = codeSlice.actions;
export const selectHtml = (state: RootState) => state.code.html;
export const selectCss = (state: RootState) => state.code.css;
export const selectJavascript = (state: RootState) => state.code.javascript;

export default codeSlice.reducer;
