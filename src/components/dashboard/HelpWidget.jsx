import React from 'react';
import { AlertCircle } from 'lucide-react';

const HelpWidget =({ onNavigate }) =>  {
  return (
    <div className="bg-slate-900 text-slate-300 p-6 rounded-xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-white font-bold mb-1 flex items-center gap-2">
            <AlertCircle size={18} className="text-mantap-gold"/> Kendala Settlement?
          </h4>
          <p className="text-xs mb-4 opacity-80">Hubungi tim support jika saldo H+0 belum cair hingga pukul 21:00 WIB.</p>
          <button
           onClick={() => onNavigate('help')}
          className="w-full py-2 bg-mantap-gold text-slate-900 font-bold rounded-lg text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
            Buka Tiket Bantuan
          </button>
        </div>
    </div>
  );
};

export default HelpWidget;