import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';

const HelpPage = ({ onBack }) => {
  // Dummy Data Tiket
  const [tickets, setTickets] = useState([
    { id: 'TICKET-205', subject: 'Settlement H+0 Belum Masuk', status: 'In-Progress', date: '02 Feb 2026', category: 'Settlement' },
    { id: 'TICKET-198', subject: 'Gagal Login Dashboard', status: 'Resolved', date: '20 Jan 2026', category: 'Akun' },
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Pusat Bantuan</h2>
          <p className="text-slate-500 text-sm">Buat tiket pengaduan atau pantau status laporan Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Form Buat Tiket */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
                <MessageSquare className="text-mantap-blue" size={20} /> Buat Tiket Baru
            </h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kategori Masalah</label>
                        <select className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue bg-white">
                            <option>Kendala Settlement / Pencairan</option>
                            <option>Masalah QRIS / Transaksi</option>
                            <option>Perubahan Data Merchant</option>
                            <option>Lainnya</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">ID Transaksi (Opsional)</label>
                        <input type="text" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue" placeholder="Contoh: TRX-00123" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subjek Masalah</label>
                    <input type="text" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue" placeholder="Contoh: Saldo hari ini belum masuk" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi Detail</label>
                    <textarea rows="4" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue" placeholder="Jelaskan kendala yang Anda alami..."></textarea>
                </div>

                <div className="pt-2">
                    <button className="bg-mantap-blue text-white px-6 py-2.5 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10">
                        <Send size={18} /> Kirim Tiket
                    </button>
                </div>
            </form>
        </div>

        {/* Kolom Kanan: Live Tracking / Riwayat */}
        <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                        <AlertCircle className="text-mantap-gold" size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Butuh Bantuan Mendesak?</h4>
                        <p className="text-sm text-slate-300 mt-1 mb-4">Hubungi Call Center Mandiri Taspen untuk respon cepat.</p>
                        <button className="w-full py-2 bg-mantap-gold text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                            Hubungi 1500-xxx
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">Riwayat Tiket (Live)</h4>
                <div className="space-y-4">
                    {tickets.map((ticket) => (
                        <div key={ticket.id} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-mono text-slate-400">{ticket.id}</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {ticket.status}
                                </span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 mb-1">{ticket.subject}</p>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Clock size={12} /> {ticket.date} • {ticket.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HelpPage;