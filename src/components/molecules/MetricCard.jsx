import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

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

export default MetricCard;
