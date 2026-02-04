import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    merchantList: [
        { id: 1, mid: 'MANTAP-001', name: 'Toko Berkah Mandiri', owner: 'H. Budi', status: 'Active', city: 'Jakarta', joinDate: '2025-01-10' },
        { id: 2, mid: 'MANTAP-002', name: 'Kopi Senja Abadi', owner: 'Sarah A.', status: 'Active', city: 'Bandung', joinDate: '2025-01-15' },
        { id: 3, mid: 'MANTAP-003', name: 'Warung Madura 24J', owner: 'Cak Imin', status: 'Suspend', city: 'Surabaya', joinDate: '2025-02-01' },
        { id: 4, mid: 'MANTAP-004', name: 'Gadget Store Pro', owner: 'Kevin', status: 'New', city: 'Jakarta', joinDate: '2026-02-03' },
        { id: 5, mid: 'MANTAP-005', name: 'Soto Seger Mbok', owner: 'Sri Wahyuni', status: 'Active', city: 'Semarang', joinDate: '2025-02-05' },
    ],
    registrationQueue: [
        { id: 'REG-101', businessName: 'Bakso Pak Man', owner: 'Suparman', type: 'UMI', status: 'Waiting Review' },
        { id: 'REG-102', businessName: 'Salon Cantik', owner: 'Susi Susanti', type: 'UKE', status: 'In Review' },
        { id: 'REG-103', businessName: 'Toko Kelontong Asep', owner: 'Asep Sunarya', type: 'UMI', status: 'Waiting Review' },
    ]
};

const merchantSlice = createSlice({
    name: 'merchant',
    initialState,
    reducers: {
        addMerchant: (state, action) => {
            state.merchantList.push(action.payload);
        },
        updateMerchantStatus: (state, action) => {
            const { id, status } = action.payload;
            const merchant = state.merchantList.find(m => m.id === id);
            if (merchant) {
                merchant.status = status;
            }
        },
        approveRegistration: (state, action) => {
            const regId = action.payload;
            // Logic to move from queue to list could go here or be handled by thunks
            state.registrationQueue = state.registrationQueue.filter(r => r.id !== regId);
        }
    },
});

export const { addMerchant, updateMerchantStatus, approveRegistration } = merchantSlice.actions;
export default merchantSlice.reducer;
