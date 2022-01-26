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

<head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <i id="icon" class="fas fa-dragon"></i>
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

.fa-dragon {
  font-size: 50px;
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
}`,
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
