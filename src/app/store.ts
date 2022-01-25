import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CodeReducer from '../features/code/codeSlice';
import ConsoleReducer from '../features/console/consoleSlice';

export const store = configureStore({
    reducer: { code: CodeReducer, console: ConsoleReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
