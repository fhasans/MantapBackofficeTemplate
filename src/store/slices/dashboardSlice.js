import { createSlice } from '@reduxjs/toolkit';

// Initial state populated with dummy data (formerly from backofficeData.js)
const initialState = {
    stats: {
        tpv: { value: 15500000000, label: "Total Payment Volume", trend: 12.5, isUp: true },
        trxCount: { value: 15420, label: "Total Transaksi", trend: 8.2, isUp: true },
        disbursement: { value: 14850000000, label: "Est. Disbursement H+0", trend: -2.1, isUp: false },
        merchants: { total: 850, active: 720, suspend: 30, new: 100 }
    },
    transactionTrend: [
        { day: 'Sen', value: 45000000 },
        { day: 'Sel', value: 52000000 },
        { day: 'Rab', value: 38000000 },
        { day: 'Kam', value: 65000000 },
        { day: 'Jum', value: 85000000 },
        { day: 'Sab', value: 72000000 },
        { day: 'Min', value: 68000000 },
    ],
    paymentComposition: [
        { method: 'QRIS On-Us', percentage: 45, color: 'bg-mantap-blue' },
        { method: 'QRIS Off-Us', percentage: 30, color: 'bg-green-500' },
        { method: 'Virtual Account', percentage: 25, color: 'bg-orange-500' },
    ],
    topMerchants: [
        { rank: 1, name: 'Toko Berkah Mandiri', tpv: 150000000, trx: 450, location: 'Jakarta Selatan' },
        { rank: 2, name: 'Kopi Senja Abadi', tpv: 125000000, trx: 380, location: 'Bandung' },
        { rank: 3, name: 'Sate Padang Duo', tpv: 98000000, trx: 310, location: 'Medan' },
        { rank: 4, name: 'Warung Madura 24J', tpv: 85000000, trx: 290, location: 'Surabaya' },
        { rank: 5, name: 'Bakso Pak Man', tpv: 76000000, trx: 250, location: 'Solo' },
    ],
    topRegions: [
        { rank: 1, name: 'DKI Jakarta', percentage: 40 },
        { rank: 2, name: 'Jawa Barat', percentage: 25 },
        { rank: 3, name: 'Jawa Timur', percentage: 20 },
        { rank: 4, name: 'Sumatera Utara', percentage: 10 },
        { rank: 5, name: 'Lainnya', percentage: 5 },
    ]
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Future actions to update dashboard data can go here
        updateStats: (state, action) => {
            state.stats = { ...state.stats, ...action.payload };
        }
    },
});

export const { updateStats } = dashboardSlice.actions;
export default dashboardSlice.reducer;
