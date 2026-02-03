// src/components/pages/BackofficeDashboard.jsx

import React from 'react';
import { 
  Layers, CreditCard, Banknote, Users, 
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Calendar, 
  PieChart, TrendingUp, Award, MapPin
} from 'lucide-react';

const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

// --- SHARED HEADER ---
const Header = ({ title, desc }) => (
  <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-4 mb-6">
    <div>
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
      <p className="text-slate-500 text-sm mt-1">{desc}</p>
    </div>
    <div className="flex items-center gap-2">
       <span className="text-xs text-slate-400">Periode:</span>
       <button className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50">
          <Calendar size={16} /> Hari Ini
       </button>
    </div>
  </div>
);

// --- COMPONENT A: KEY METRICS ---
export const KeyMetricsPage = ({ stats }) => { // Rename component biar jelas
  if (!stats) return null;

  const MetricCard = ({ title, value, trend, isUp, icon: Icon, colorClass }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className={`p-2 rounded-lg ${colorClass} bg-opacity-10`}>
          <Icon size={20} className={colorClass.replace('bg-', 'text-')} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-1">{value}</h3>
      <div className="flex items-center gap-2 mt-auto pt-2">
        <span className={`flex items-center text-xs font-bold px-1.5 py-0.5 rounded ${isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />} {Math.abs(trend)}%
        </span>
        <span className="text-xs text-slate-400">vs kemarin</span>
      </div>
    </div>
  );

  return (
    <div className="animation-fade-in">
      <Header title="Key Metrics" desc="Statistik kunci performa harian (Point A)" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="Total TPV" value={formatIDR(stats.tpv.value)} trend={stats.tpv.trend} isUp={stats.tpv.isUp} icon={Layers} colorClass="bg-blue-100 text-mantap-blue" />
        <MetricCard title="Freq. Transaksi" value={`${stats.trxCount.value.toLocaleString()}`} trend={stats.trxCount.trend} isUp={stats.trxCount.isUp} icon={CreditCard} colorClass="bg-purple-100 text-purple-600" />
        <MetricCard title="Disbursement" value={formatIDR(stats.disbursement.value)} trend={stats.disbursement.trend} isUp={stats.disbursement.isUp} icon={Banknote} colorClass="bg-orange-100 text-orange-600" />
        <MetricCard title="Total Merchant" value={stats.merchants.total} trend={1.2} isUp={true} icon={Users} colorClass="bg-green-100 text-green-600" />
      </div>
    </div>
  );
};

// --- COMPONENT B: CHART ANALYSIS ---
export const ChartAnalysisPage = ({ trendData, compositionData }) => {
  return (
    <div className="animation-fade-in">
      <Header title="Chart Analysis" desc="Visualisasi tren dan komposisi data (Point B)" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-700 flex items-center gap-2"><TrendingUp size={18} className="text-mantap-blue"/> Tren Transaksi</h3>
            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal/></button>
          </div>
          <div className="flex items-end justify-between h-64 gap-4 px-2">
            {trendData && trendData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="opacity-0 group-hover:opacity-100 absolute -mt-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded transition-opacity">{formatIDR(d.value)}</div>
                <div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
                  <div className="w-full bg-mantap-blue group-hover:bg-blue-600 transition-all rounded-t-lg" style={{ height: `${(d.value / 100000000) * 100}%` }}></div>
                </div>
                <span className="text-xs text-slate-500 font-medium">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-1"><PieChart size={18} className="text-orange-500"/> Metode Bayar</h3>
          <div className="flex-1 flex items-center justify-center relative mt-4">
            <div className="w-40 h-40 rounded-full" style={{ background: 'conic-gradient(#2563EB 0% 45%, #22C55E 45% 75%, #F97316 75% 100%)' }}></div>
            <div className="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
               <span className="text-xs font-bold text-slate-400">Total<br/>100%</span>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {compositionData && compositionData.map((c, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                 <div className="flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${c.color}`}></div><span className="text-slate-600">{c.method}</span></div>
                 <span className="font-bold text-slate-800">{c.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT C: TOP LEADERBOARDS ---
export const TopLeaderboardsPage = ({ merchants, regions }) => {
  return (
    <div className="animation-fade-in">
      <Header title="Top Leaderboards" desc="Peringkat kinerja terbaik (Point C)" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-700 flex items-center gap-2"><Award size={18} className="text-yellow-500"/> Top 5 Merchant (TPV)</h3>
            <button className="text-xs text-mantap-blue font-bold hover:underline">Lihat Semua</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase border-b border-slate-100">
                <tr><th className="py-2">Rank</th><th className="py-2">Nama Toko</th><th className="py-2 text-right">TPV</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {merchants && merchants.map((m) => (
                  <tr key={m.rank} className="hover:bg-slate-50">
                    <td className="py-3 font-bold text-slate-400">#{m.rank}</td>
                    <td className="py-3"><p className="font-bold text-slate-700">{m.name}</p><p className="text-[10px] text-slate-400">{m.location}</p></td>
                    <td className="py-3 text-right font-mono font-medium text-slate-700">{formatIDR(m.tpv)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-700 flex items-center gap-2"><MapPin size={18} className="text-red-500"/> Top Wilayah</h3>
          </div>
          <div className="space-y-4">
            {regions && regions.map((r) => (
              <div key={r.rank} className="space-y-1">
                 <div className="flex justify-between text-sm"><span className="font-medium text-slate-700">{r.rank}. {r.name}</span><span className="font-bold text-slate-900">{r.percentage}%</span></div>
                 <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-mantap-blue h-2 rounded-full" style={{ width: `${r.percentage}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};