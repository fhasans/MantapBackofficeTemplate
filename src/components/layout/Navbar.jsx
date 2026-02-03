import React, { useState } from 'react';
import { 
  Volume2, VolumeX, Bell, ChevronDown, Menu, 
  LogOut, User, Settings, CheckCircle, Info, AlertTriangle 
} from 'lucide-react';

const Navbar = ({ ttsEnabled, setTtsEnabled, toggleSidebar, onLogout }) => {
  // State untuk mengontrol dropdown mana yang aktif ('none', 'notification', 'profile')
  const [activeDropdown, setActiveDropdown] = useState('none');

  // Dummy Data Notifikasi
  const notifications = [
    { id: 1, title: 'Dana Masuk', message: 'Rp 50.000 dari QRIS - Budi', time: 'Baru saja', type: 'success', read: false },
    { id: 2, title: 'Settlement Berhasil', message: 'Dana H+0 sebesar Rp 3.450.000 telah cair.', time: '14:00 WIB', type: 'info', read: true },
    { id: 3, title: 'Peringatan Keamanan', message: 'Login terdeteksi dari perangkat baru.', time: 'Kemarin', type: 'warning', read: true },
  ];

  // Fungsi toggle (Buka/Tutup)
  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown('none'); // Jika sudah terbuka, tutup
    } else {
      setActiveDropdown(menu); // Buka menu yang diklik
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-30 h-16">
      <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Kiri: Tombol Menu (Mobile) & Judul */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-bold text-slate-800 hidden sm:block">
            Overview
          </h2>
        </div>

        {/* Kanan: Notifikasi & Profil */}
        <div className="flex items-center gap-3 md:gap-4 relative">
          
          {/* 1. TTS Toggle */}
          <button 
            onClick={() => setTtsEnabled(!ttsEnabled)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              ttsEnabled 
                ? 'bg-blue-50 text-mantap-blue border-blue-200' 
                : 'bg-slate-100 text-slate-500 border-slate-200'
            }`}
          >
            {ttsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="hidden md:inline">{ttsEnabled ? 'Suara: ON' : 'Suara: OFF'}</span>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          {/* 2. NOTIFICATION DROPDOWN */}
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

          {/* 3. PROFILE DROPDOWN */}
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
              <ChevronDown size={16} className={`text-slate-400 hidden md:block transition-transform ${activeDropdown === 'profile' ? 'rotate-180' : ''}`}/>
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

        </div>
      </div>
    </nav>
  );
};

export default Navbar;