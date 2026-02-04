import React from 'react';
import { useSelector } from 'react-redux';
import { Award, MapPin } from 'lucide-react';
import Header from '../organisms/Header';

const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

export const TopLeaderboards = () => {
    const { topMerchants: merchants, topRegions: regions } = useSelector((state) => state.dashboard);

    return (
        <div className="animation-fade-in">
            <Header title="Top Leaderboards" desc="Peringkat kinerja terbaik (Point C)" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-700 flex items-center gap-2"><Award size={18} className="text-yellow-500" /> Top 5 Merchant (TPV)</h3>
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
                        <h3 className="font-bold text-slate-700 flex items-center gap-2"><MapPin size={18} className="text-red-500" /> Top Wilayah</h3>
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

export default TopLeaderboards;
