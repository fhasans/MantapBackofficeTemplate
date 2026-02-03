export const settlementData = {
  todayAmount: 3450000,
  floatAmount: 1250000,
  merchantName: "Toko Berkah Mandiri",
  merchantId: "MANTAP-882910",
  history: [
    { id: 1, date: '02 Feb 2026', time: '14:30', amount: 50000, status: 'success', desc: 'QRIS Payment - Cust: Budi' },
    { id: 2, date: '02 Feb 2026', time: '13:15', amount: 125000, status: 'success', desc: 'QRIS Payment - Cust: Sari' },
    { id: 3, date: '02 Feb 2026', time: '11:00', amount: 2500000, status: 'pending', desc: 'Settlement Batch 1 (Proses)' },
    { id: 4, date: '01 Feb 2026', time: '09:00', amount: 200000, status: 'failed', desc: 'Settlement Gagal (Koneksi)' },
  ]
};