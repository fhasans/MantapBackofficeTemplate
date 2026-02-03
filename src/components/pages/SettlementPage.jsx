import React, { useState } from 'react';
import { Download, Calendar, ArrowUpRight, ArrowDownLeft, Wallet } from 'lucide-react';
import { formatIDR } from '../../utils/currency';

const SettlementPage = () => {
    const [dateRange, setDateRange] = useState('02 Feb 2026');

    // Dummy Data Settlement
    const settlements = [
        { id: 'SET-20260202-001', date: '02 Feb 2026', mid: 'M001239', merchant: 'Toko Berkah', amount: 15500000, fee: 108500, net: 15391500, status: 'processed' },
        { id: 'SET-20260202-002', date: '02 Feb 2026', mid: 'M001240', merchant: 'Warung Makan Padang', amount: 8200000, fee: 57400, net: 8142600, status: 'processed' },
        { id: 'SET-20260202-003', date: '02 Feb 2026', mid: 'M001299', merchant: 'Kopi Kenangan Mantan', amount: 3500000, fee: 24500, net: 3475500, status: 'pending' },
        { id: 'SET-20260201-001', date: '01 Feb 2026', mid: 'M001239', merchant: 'Toko Berkah', amount: 12100000, fee: 84700, net: 12015300, status: 'processed' },
        { id: 'SET-20260201-002', date: '01 Feb 2026', mid: 'M001240', merchant: 'Warung Makan Padang', amount: 9500000, fee: 66500, net: 9433500, status: 'processed' },
    ];

    const totalSettlement = settlements.reduce((acc, curr) => acc + curr.net, 0);

    return (
        <div className="space-y-6 animation-fade-in">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Laporan Settlement</h1>
                    <p className="text-slate-500 text-sm">Rekapitulasi pencairan dana merchant harian.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm">
                        <Calendar size={18} /> {dateRange}
                    </button>
                    <button className="flex items-center gap-2 bg-mantap-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 shadow-lg shadow-blue-900/20">
                        <Download size={18} /> Download Rekap
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Total Pencairan Hari Ini</p>
                        <h3 className="text-2xl font-bold text-slate-800 mt-1">{formatIDR(totalSettlement)}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-mantap-blue flex items-center justify-center">
                        <Wallet size={24} />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Total Transaksi (Gross)</p>
                        <h3 className="text-xl font-bold text-slate-800 mt-1">{formatIDR(48800000)}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Total Potongan (MDR)</p>
                        <h3 className="text-xl font-bold text-red-600 mt-1">{formatIDR(341600)}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                        <ArrowDownLeft size={24} />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4">ID Settlement</th>
                                <th className="px-6 py-4">Merchant (MID)</th>
                                <th className="px-6 py-4 text-right">Gross Amount</th>
                                <th className="px-6 py-4 text-right">Fee (MDR)</th>
                                <th className="px-6 py-4 text-right">Net Amount</th>
                                <th className="px-6 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {settlements.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-mono font-bold text-slate-700">{item.id}</div>
                                        <div className="text-xs text-slate-400">{item.date}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-800">{item.merchant}</div>
                                        <div className="text-xs font-mono text-slate-500">{item.mid}</div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-slate-600">
                                        {formatIDR(item.amount)}
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-red-500">
                                        - {formatIDR(item.fee)}
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-mantap-blue text-base">
                                        {formatIDR(item.net)}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize border ${item.status === 'processed' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SettlementPage;
