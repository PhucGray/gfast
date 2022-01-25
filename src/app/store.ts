import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CodeReducer from '../features/code/codeSlice';

export const store = configureStore({
    reducer: { code: CodeReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
