import React from 'react';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = ({ activeDropdown, toggleDropdown, onLogout }) => {
    return (
        <div className="relative">
            <button
                onClick={() => toggleDropdown('profile')}
                className={`flex items-center gap-3 pl-2 cursor-pointer rounded-lg p-1 transition-colors ${activeDropdown === 'profile' ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
            >
                <div className="h-9 w-9 bg-mantap-blue/10 rounded-full flex items-center justify-center font-bold text-mantap-blue text-sm border border-blue-100">
                    TB
                </div>
                <div className="hidden md:block text-left">
                    <p className="text-sm font-bold text-slate-700 leading-none">Toko Berkah</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Owner</p>
                </div>
                <ChevronDown size={16} className={`text-slate-400 hidden md:block transition-transform ${activeDropdown === 'profile' ? 'rotate-180' : ''}`} />
            </button>

            {/* Isi Dropdown Profil */}
            {activeDropdown === 'profile' && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animation-fade-in-up">
                    <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                        <p className="text-sm font-bold text-slate-800">Toko Berkah Mandiri</p>
                        <p className="text-xs text-slate-500">ID: MANTAP-882910</p>
                    </div>
                    <div className="p-1">
                        <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg flex items-center gap-2">
                            <User size={16} /> Profil Saya
                        </button>
                        <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg flex items-center gap-2">
                            <Settings size={16} /> Pengaturan Toko
                        </button>
                    </div>
                    <div className="p-1 border-t border-slate-50">
                        <button
                            onClick={onLogout} // Panggil fungsi logout dari App.jsx
                            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 font-medium"
                        >
                            <LogOut size={16} /> Keluar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
