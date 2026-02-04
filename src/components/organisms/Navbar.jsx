import React, { useState } from 'react';
import { Volume2, VolumeX, Menu } from 'lucide-react';
import NotificationDropdown from '../molecules/NotificationDropdown';
import ProfileDropdown from '../molecules/ProfileDropdown';

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
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${ttsEnabled
              ? 'bg-blue-50 text-mantap-blue border-blue-200'
              : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
          >
            {ttsEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="hidden md:inline">{ttsEnabled ? 'Suara: ON' : 'Suara: OFF'}</span>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          {/* 2. NOTIFICATION DROPDOWN */}
          <NotificationDropdown
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            notifications={notifications}
          />

          {/* 3. PROFILE DROPDOWN */}
          <ProfileDropdown
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            onLogout={onLogout}
          />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
