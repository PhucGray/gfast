import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ConsoleProps {
    isConsoleOpen: boolean;
    hasNewConsoleData: boolean;
}

const initialState: ConsoleProps = {
    isConsoleOpen: false,
    hasNewConsoleData: false,
};

const consoleSlice = createSlice({
    name: 'console',
    initialState,
    reducers: {
        setIsConsoleOpen: (state, { payload }: PayloadAction<boolean>) => {
            state.hasNewConsoleData = false;
            state.isConsoleOpen = payload;
        },
        setHasNewConsoleData: (state) => {
            state.hasNewConsoleData = true;
        },
    },
});

export const { setIsConsoleOpen, setHasNewConsoleData } = consoleSlice.actions;
export const selectIsConsoleOpen = (state: RootState) =>
    state.console.isConsoleOpen;
export const selectHasNewConsoleData = (state: RootState) =>
    state.console.hasNewConsoleData;
export default consoleSlice.reducer;
