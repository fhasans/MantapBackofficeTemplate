import React from 'react';
import { useSelector } from 'react-redux';
import { TrendingUp, MoreHorizontal, PieChart } from 'lucide-react';
import Header from '../organisms/Header';

const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

export const ChartAnalysis = () => {
    const { transactionTrend: trendData, paymentComposition: compositionData } = useSelector((state) => state.dashboard);

    return (
        <div className="animation-fade-in">
            <Header title="Chart Analysis" desc="Visualisasi tren dan komposisi data (Point B)" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-700 flex items-center gap-2"><TrendingUp size={18} className="text-mantap-blue" /> Tren Transaksi</h3>
                        <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal /></button>
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
                    <h3 className="font-bold text-slate-700 flex items-center gap-2 mb-1"><PieChart size={18} className="text-orange-500" /> Metode Bayar</h3>
                    <div className="flex-1 flex items-center justify-center relative mt-4">
                        <div className="w-40 h-40 rounded-full" style={{ background: 'conic-gradient(#2563EB 0% 45%, #22C55E 45% 75%, #F97316 75% 100%)' }}></div>
                        <div className="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
                            <span className="text-xs font-bold text-slate-400">Total<br />100%</span>
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

export default ChartAnalysis;
