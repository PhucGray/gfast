import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ConsoleProps {
    isOpen: boolean;
}

const initialState: ConsoleProps = {
    isOpen: false,
};

const consoleSlice = createSlice({
    name: 'console',
    initialState,
    reducers: {
        setIsOpen: (state, { payload }: PayloadAction<boolean>) => {
            state.isOpen = payload;
        },
    },
});

export const { setIsOpen } = consoleSlice.actions;
export const selectIsConsoleOpen = (state: RootState) => state.console.isOpen

export default consoleSlice.reducer;
