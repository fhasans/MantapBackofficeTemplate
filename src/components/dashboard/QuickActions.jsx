import React from 'react';
import { FileText, ArrowUpRight, RefreshCcw } from 'lucide-react';

const QuickActions = ({ merchantId,onNavigate  }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
        <FileText size={18} className="text-slate-400"/> Akses Cepat
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        <button
        onClick={() => onNavigate('qris')} 
        className="p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center text-center group">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-mantap-blue mb-2 group-hover:bg-mantap-blue group-hover:text-white transition-colors">
            <ArrowUpRight size={20} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-mantap-blue">QRIS Statis</span>
        </button>
        
        <button className="p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-200 transition-all flex flex-col items-center text-center group">
          <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2 group-hover:bg-orange-500 group-hover:text-white transition-colors">
            <RefreshCcw size={20} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-orange-600">Refund</span>
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-500">ID Merchant</span>
            <span className="font-mono font-semibold text-slate-700">{merchantId}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;