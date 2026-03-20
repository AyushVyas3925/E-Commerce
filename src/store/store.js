import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import filterReducer from './slices/filterSlice';
import productsReducer from './slices/productsSlice';
import themeReducer from './slices/themeSlice';

const persistConfig = {
    key: 'shopzone_root',
    storage,
    whitelist: ['cart', 'auth', 'theme']
};

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    filters: filterReducer,
    products: productsReducer,
    theme: themeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE']
            }
        })
});

export const persistor = persistStore(store);
