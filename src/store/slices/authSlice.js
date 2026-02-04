import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: localStorage.getItem('isLoggedIn') === 'true',
    user: {
        name: 'Toko Berkah',
        role: 'Owner'
    },
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            localStorage.setItem('isLoggedIn', 'true');
            state.isAuthenticated = true;
        },
        logout: (state) => {
            localStorage.removeItem('isLoggedIn');
            state.isAuthenticated = false;
            // Optional: Clear user data if stored
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
