import React from 'react';
import { Calendar } from 'lucide-react';

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

export default Header;
