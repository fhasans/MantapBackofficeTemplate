import React from 'react';
import { RefreshCcw, Eye, EyeOff } from 'lucide-react';
import { formatIDR } from '../../utils/currency';

const SettlementCard = ({ todayAmount, floatAmount, showBalance, setShowBalance }) => {
  return (
    <div className="bg-gradient-to-r from-mantap-blue to-[#00509d] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="absolute right-0 top-0 p-6 opacity-10 pointer-events-none">
        <RefreshCcw size={150} />
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
          <div>
            <p className="text-blue-100 text-sm font-medium mb-1 flex items-center gap-2">
              Total Saldo Cair Hari Ini (H+0)
            </p>
            <div className="flex items-center gap-3">
              <h3 className="text-4xl font-bold tracking-tight">
                {showBalance ? formatIDR(todayAmount) : 'Rp ••••••••'}
              </h3>
              <button onClick={() => setShowBalance(!showBalance)} className="text-blue-200 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
                {showBalance ? <Eye size={22}/> : <EyeOff size={22}/>}
              </button>
            </div>
          </div>
          <span className="bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm backdrop-blur-sm self-start">
            LIVE
          </span>
        </div>

        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-2 sm:pb-0">
            <p className="text-blue-100 text-xs mb-1 opacity-80">Estimasi Cair Besok (Float)</p>
            <p className="text-lg font-semibold flex items-center gap-2">
              {showBalance ? formatIDR(floatAmount) : '••••••'}
              <span className="text-[10px] bg-yellow-500 text-black px-1.5 rounded font-bold">H+1</span>
            </p>
          </div>
          <div>
            <p className="text-blue-100 text-xs mb-1 opacity-80">Limit Transaksi Harian</p>
            <div className="w-full bg-blue-900/50 rounded-full h-2.5 mt-2 mb-1">
              <div className="bg-mantap-gold h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-[10px] text-blue-100">45% digunakan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettlementCard;