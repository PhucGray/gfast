import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ResizeReducer from '../features/resize/resizeSlice';

export const store = configureStore({
    reducer: { resize: ResizeReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
