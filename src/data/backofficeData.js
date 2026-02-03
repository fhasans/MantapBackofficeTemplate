// src/data/backofficeData.js

// --- MODUL I: DASHBOARD UTAMA (EXECUTIVE SUMMARY) ---

// Point A: Statistik Kunci
export const bankStats = {
  tpv: { value: 15500000000, label: "Total Payment Volume", trend: 12.5, isUp: true },
  trxCount: { value: 15420, label: "Total Transaksi", trend: 8.2, isUp: true },
  disbursement: { value: 14850000000, label: "Est. Disbursement H+0", trend: -2.1, isUp: false },
  merchants: { total: 850, active: 720, suspend: 30, new: 100 }
};

// Point B: Visualisasi Data (Charts)
export const transactionTrend = [
  { day: 'Sen', value: 45000000 },
  { day: 'Sel', value: 52000000 },
  { day: 'Rab', value: 38000000 },
  { day: 'Kam', value: 65000000 },
  { day: 'Jum', value: 85000000 }, // Peak Day
  { day: 'Sab', value: 72000000 },
  { day: 'Min', value: 68000000 },
];

export const paymentComposition = [
  { method: 'QRIS On-Us', percentage: 45, color: 'bg-mantap-blue' },
  { method: 'QRIS Off-Us', percentage: 30, color: 'bg-green-500' },
  { method: 'Virtual Account', percentage: 25, color: 'bg-orange-500' },
];

// Point C: Top Performance
export const topMerchants = [
  { rank: 1, name: 'Toko Berkah Mandiri', tpv: 150000000, trx: 450, location: 'Jakarta Selatan' },
  { rank: 2, name: 'Kopi Senja Abadi', tpv: 125000000, trx: 380, location: 'Bandung' },
  { rank: 3, name: 'Sate Padang Duo', tpv: 98000000, trx: 310, location: 'Medan' },
  { rank: 4, name: 'Warung Madura 24J', tpv: 85000000, trx: 290, location: 'Surabaya' },
  { rank: 5, name: 'Bakso Pak Man', tpv: 76000000, trx: 250, location: 'Solo' },
];

export const topRegions = [
  { rank: 1, name: 'DKI Jakarta', percentage: 40 },
  { rank: 2, name: 'Jawa Barat', percentage: 25 },
  { rank: 3, name: 'Jawa Timur', percentage: 20 },
  { rank: 4, name: 'Sumatera Utara', percentage: 10 },
  { rank: 5, name: 'Lainnya', percentage: 5 },
];


// --- MODUL II: MANAJEMEN MERCHANT ---

// Child A: Daftar Merchant (Database)
export const masterMerchantList = [
  { id: 1, mid: 'MANTAP-001', name: 'Toko Berkah Mandiri', owner: 'H. Budi', status: 'Active', city: 'Jakarta', joinDate: '2025-01-10' },
  { id: 2, mid: 'MANTAP-002', name: 'Kopi Senja Abadi', owner: 'Sarah A.', status: 'Active', city: 'Bandung', joinDate: '2025-01-15' },
  { id: 3, mid: 'MANTAP-003', name: 'Warung Madura 24J', owner: 'Cak Imin', status: 'Suspend', city: 'Surabaya', joinDate: '2025-02-01' }, 
  { id: 4, mid: 'MANTAP-004', name: 'Gadget Store Pro', owner: 'Kevin', status: 'New', city: 'Jakarta', joinDate: '2026-02-03' },
  { id: 5, mid: 'MANTAP-005', name: 'Soto Seger Mbok', owner: 'Sri Wahyuni', status: 'Active', city: 'Semarang', joinDate: '2025-02-05' },
];

// Child B: Approval Queue
export const registrationQueue = [
  { id: 'REG-101', businessName: 'Bakso Pak Man', owner: 'Suparman', type: 'UMI', status: 'Waiting Review' },
  { id: 'REG-102', businessName: 'Salon Cantik', owner: 'Susi Susanti', type: 'UKE', status: 'In Review' },
  { id: 'REG-103', businessName: 'Toko Kelontong Asep', owner: 'Asep Sunarya', type: 'UMI', status: 'Waiting Review' },
];


// --- MODUL III: MONITORING TRANSAKSI ---

export const globalTransactions = [
  { id: 'TRX-9981', rrn: '001928331', mid: 'MANTAP-001', merchant: 'Toko Berkah Mandiri', amount: 50000, status: 'success', time: '14:30' },
  { id: 'TRX-9982', rrn: '001928332', mid: 'MANTAP-002', merchant: 'Kopi Senja Abadi', amount: 125000, status: 'success', time: '14:32' },
  { id: 'TRX-9983', rrn: '001928333', mid: 'MANTAP-003', merchant: 'Warung Madura 24J', amount: 2500000, status: 'flagged', time: '02:00' }, 
  { id: 'TRX-9984', rrn: '001928334', mid: 'MANTAP-001', merchant: 'Toko Berkah Mandiri', amount: 10000, status: 'success', time: '14:45' }, 
];