import React, { useState } from 'react';
import { Search, Filter, Download, Calendar } from 'lucide-react';
import { formatIDR } from '../../utils/currency';

const HistoryPage = () => {
  // Dummy Data Lebih Banyak
  const allTransactions = [
    { id: 'TRX-001', date: '02 Feb 2026', time: '14:30', amount: 50000, type: 'QRIS', status: 'success', customer: 'Budi Santoso' },
    { id: 'TRX-002', date: '02 Feb 2026', time: '13:15', amount: 125000, type: 'QRIS', status: 'success', customer: 'Sari Roti' },
    { id: 'TRX-003', date: '02 Feb 2026', time: '11:00', amount: 2500000, type: 'Settlement', status: 'pending', customer: 'System' },
    { id: 'TRX-004', date: '01 Feb 2026', time: '19:20', amount: 75000, type: 'QRIS', status: 'success', customer: 'Ahmad Dani' },
    { id: 'TRX-005', date: '01 Feb 2026', time: '09:00', amount: 200000, type: 'Settlement', status: 'failed', customer: 'System' },
    { id: 'TRX-006', date: '31 Jan 2026', time: '10:00', amount: 45000, type: 'QRIS', status: 'success', customer: 'Guest' },
    { id: 'TRX-007', date: '31 Jan 2026', time: '08:45', amount: 3500000, type: 'Settlement', status: 'success', customer: 'System' },
  ];

  const [filterStatus, setFilterStatus] = useState('all');

  // Filter Logic Sederhana
  const filteredData = filterStatus === 'all' 
    ? allTransactions 
    : allTransactions.filter(item => item.status === filterStatus);

  return (
    <div className="space-y-6">
      
      {/* Header Page */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Riwayat Transaksi</h2>
          <p className="text-slate-500 text-sm">Semua transaksi masuk dan pencairan dana.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm">
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Cari ID Transaksi atau Nama Pelanggan..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mantap-blue/20 transition-all"
          />
        </div>

        {/* Date Filter */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-600 cursor-pointer hover:border-mantap-blue transition-colors">
            <Calendar size={18} />
            <span className="text-sm font-medium">01 Feb - 02 Feb 2026</span>
        </div>

        {/* Status Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['all', 'success', 'pending', 'failed'].map((status) => (
                <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors border ${
                        filterStatus === status 
                        ? 'bg-blue-50 text-mantap-blue border-blue-200' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                >
                    {status === 'all' ? 'Semua' : status}
                </button>
            ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">ID Transaksi</th>
                <th className="px-6 py-4 font-semibold">Waktu</th>
                <th className="px-6 py-4 font-semibold">Tipe</th>
                <th className="px-6 py-4 font-semibold">Customer/Ket</th>
                <th className="px-6 py-4 font-semibold">Nominal</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-700">{item.date}</div>
                    <div className="text-xs text-slate-400">{item.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                        item.type === 'Settlement' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                        {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-700">{item.customer}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{formatIDR(item.amount)}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        item.status === 'success' ? 'bg-green-50 text-green-700 border-green-200' :
                        item.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                        'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                             item.status === 'success' ? 'bg-green-500' :
                             item.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></span>
                        {item.status === 'success' && 'Berhasil'}
                        {item.status === 'pending' && 'Proses'}
                        {item.status === 'failed' && 'Gagal'}
                      </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
            <span>Menampilkan <strong>{filteredData.length}</strong> dari <strong>128</strong> data</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
                <button className="px-3 py-1 border rounded bg-mantap-blue text-white border-mantap-blue">1</button>
                <button className="px-3 py-1 border rounded hover:bg-slate-50">2</button>
                <button className="px-3 py-1 border rounded hover:bg-slate-50">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;