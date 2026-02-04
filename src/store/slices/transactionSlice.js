import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    globalTransactions: [
        { id: 'TRX-9981', rrn: '001928331', mid: 'MANTAP-001', merchant: 'Toko Berkah Mandiri', amount: 50000, status: 'success', time: '14:30', tid: '880012', type: 'QRIS', fraudStatus: 'clean', pan: '93600...123' },
        { id: 'TRX-9982', rrn: '001928332', mid: 'MANTAP-002', merchant: 'Kopi Senja Abadi', amount: 125000, status: 'success', time: '14:32', tid: '880013', type: 'QRIS', fraudStatus: 'clean', pan: '93600...124' },
        { id: 'TRX-9983', rrn: '001928333', mid: 'MANTAP-003', merchant: 'Warung Madura 24J', amount: 2500000, status: 'flagged', time: '02:00', tid: '880014', type: 'QRIS', fraudStatus: 'suspicious', pan: '93600...125' },
        { id: 'TRX-9984', rrn: '001928334', mid: 'MANTAP-001', merchant: 'Toko Berkah Mandiri', amount: 10000, status: 'success', time: '14:45', tid: '880012', type: 'QRIS', fraudStatus: 'clean', pan: '93600...123' },
    ]
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.globalTransactions.unshift(action.payload);
        }
    },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
