import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dashboardReducer from './slices/dashboardSlice';
import merchantReducer from './slices/merchantSlice';
import transactionReducer from './slices/transactionSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
        merchant: merchantReducer,
        transaction: transactionReducer,
    },
});
