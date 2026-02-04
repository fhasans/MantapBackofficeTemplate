import React from 'react';
import { Bell } from 'lucide-react';

const NotificationDropdown = ({ activeDropdown, toggleDropdown, notifications = [] }) => {
    return (
        <div className="relative">
            <button
                onClick={() => toggleDropdown('notification')}
                className={`relative p-2 rounded-full transition-colors ${activeDropdown === 'notification' ? 'bg-blue-50 text-mantap-blue' : 'hover:bg-slate-50 text-slate-600'}`}
            >
                <Bell size={20} />
                {/* Badge Merah (Hanya jika ada unread) */}
                <span className="absolute top-1.5 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>

            {/* Isi Dropdown Notifikasi */}
            {activeDropdown === 'notification' && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animation-fade-in-up">
                    <div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                        <h3 className="text-sm font-bold text-slate-700">Notifikasi</h3>
                        <button className="text-xs text-mantap-blue hover:underline">Tandai dibaca</button>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                        {notifications.map((item) => (
                            <div key={item.id} className={`px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer flex gap-3 ${!item.read ? 'bg-blue-50/30' : ''}`}>
                                <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${!item.read ? 'bg-red-500' : 'bg-transparent'}`}></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700 mb-0.5">{item.title}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.message}</p>
                                    <p className="text-[10px] text-slate-400 mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 text-center border-t border-slate-50">
                        <button className="text-xs font-medium text-slate-500 hover:text-mantap-blue">Lihat Semua</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
