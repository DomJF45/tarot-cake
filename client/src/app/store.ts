import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/cards/card.slice';

export const store = configureStore({
  reducer: {
    cardState: cardReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
