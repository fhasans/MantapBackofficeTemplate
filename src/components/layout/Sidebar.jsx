import React from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  QrCode, 
  Store, 
  HelpCircle, 
  Settings, 
  LogOut,
  X 
} from 'lucide-react';

// Terima props: currentPage (untuk highlight menu aktif) & setPage (untuk ganti halaman)
const Sidebar = ({ isOpen, toggleSidebar, currentPage, setPage ,onLogout }) => {
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'history', name: 'Riwayat Transaksi', icon: <Wallet size={20} /> },
    { id: 'qris', name: 'QRIS Generator', icon: <QrCode size={20} /> }, // Placeholder
    { id: 'store', name: 'Kelola Toko', icon: <Store size={20} /> },    // Placeholder
    { id: 'help', name: 'Pusat Bantuan', icon: <HelpCircle size={20} /> }, // Placeholder
    { id: 'settings', name: 'Pengaturan', icon: <Settings size={20} /> },   // Placeholder
  ];

  return (
    <>
      {/* Overlay Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* SIDEBAR UTAMA */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 
        h-screen w-64 bg-white border-r border-slate-200 
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0
      `}>
        
        {/* Header Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-mantap-blue p-1.5 rounded-lg">
              <Wallet className="text-mantap-gold h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold text-mantap-blue tracking-tight">Mantap</h1>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-slate-600">
            <X size={24} />
          </button>
        </div>

        {/* List Menu (Scrollable area) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">
            Menu Utama
          </p>
          
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPage(item.id);
                if (window.innerWidth < 1024) toggleSidebar(); // Tutup sidebar di mobile setelah klik
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-blue-50 text-mantap-blue border border-blue-100 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>

        {/* Footer (Logout) - Sticky at bottom of sidebar */}
        <div className="p-4 border-t border-slate-100 bg-white shrink-0">
        <button 
            onClick={onLogout} // Panggil fungsi logout disini
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
          <LogOut size={20} />
          Keluar
        </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;