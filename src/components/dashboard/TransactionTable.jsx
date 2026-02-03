import React from 'react';
import { History } from 'lucide-react';
import { formatIDR } from '../../utils/currency';

const TransactionTable = ({ history }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-slate-700 flex items-center gap-2">
          <History size={18} className="text-slate-400"/> Riwayat Transaksi & Settlement
        </h3>
        <button className="text-sm text-mantap-blue font-semibold hover:underline">Lihat Semua</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-3">Waktu</th>
              <th className="px-6 py-3">Keterangan</th>
              <th className="px-6 py-3">Nominal</th>
              <th className="px-6 py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-700">{item.time}</div>
                  <div className="text-xs text-slate-400">{item.date}</div>
                </td>
                <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                <td className="px-6 py-4 font-bold text-slate-800">{formatIDR(item.amount)}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                    item.status === 'success' ? 'bg-green-50 text-green-700 border-green-200' :
                    item.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                    'bg-red-50 text-red-700 border-red-200'
                  }`}>
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
    </div>
  );
};

export default TransactionTable;