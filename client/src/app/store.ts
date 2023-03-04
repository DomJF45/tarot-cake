import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; import cardReducer from '../features/cards/card.slice';
import authReducer from '../features/auth/auth.slice';
import storage from 'redux-persist/lib/storage';
import { 
  persistReducer, 
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist'; 
const persistConfig = { 
  key: 'root', 
  storage, 
} 
const rootReducer = combineReducers({ 
  cardState: cardReducer, 
  authState: authReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer); 

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
