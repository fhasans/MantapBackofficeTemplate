import React from 'react';
import { Download, Share2, ArrowLeft, Printer, Copy } from 'lucide-react';

const QrisPage = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header & Back Button */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">QRIS Statis</h2>
          <p className="text-slate-500 text-sm">Tampilkan atau unduh kode QR toko Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Kolom Kiri: Tampilan QRIS */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
          <div className="bg-white p-4 border-2 border-slate-900 rounded-xl mb-6 shadow-lg">
             {/* Simulasi Gambar QRIS */}
             <div className="w-48 h-48 bg-slate-900 flex items-center justify-center text-white rounded-lg">
                <div className="grid grid-cols-6 gap-1 p-2">
                    {/* Pattern acak simulasi QR */}
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className={`w-6 h-6 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}></div>
                    ))}
                </div>
             </div>
          </div>
          
          <h3 className="font-bold text-xl text-slate-800">Toko Berkah Mandiri</h3>
          <p className="text-slate-500 text-sm mb-6">NMID: ID102003004005</p>

          <div className="flex gap-3 w-full justify-center">
             <button className="flex items-center gap-2 bg-mantap-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                <Download size={18} /> Unduh
             </button>
             <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                <Share2 size={18} /> Bagikan
             </button>
          </div>
        </div>

        {/* Kolom Kanan: Panduan & Info */}
        <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
                <h4 className="font-bold text-mantap-blue mb-2">Panduan Cetak</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    Gunakan QRIS ini di kasir toko Anda. Pastikan hasil cetak terlihat jelas dan tidak buram agar mudah dipindai oleh pelanggan.
                </p>
                <button className="mt-4 text-sm font-semibold text-mantap-blue flex items-center gap-2 hover:underline">
                    <Printer size={16} /> Panduan Ukuran Standar
                </button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">Link Pembayaran (PayLink)</h4>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-3 rounded-lg">
                    <span className="text-sm text-slate-500 truncate flex-1">https://mantap.id/pay/toko-berkah</span>
                    <button className="text-mantap-blue hover:text-blue-700">
                        <Copy size={18} />
                    </button>
                </div>
                <p className="text-xs text-slate-400 mt-2">Bagikan link ini untuk pembayaran jarak jauh.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QrisPage;