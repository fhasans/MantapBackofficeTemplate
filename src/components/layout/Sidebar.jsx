import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  LayoutDashboard, Users, Activity, Wallet, Shield,
  LogOut, X, ChevronDown, ChevronRight, Home, ClipboardList,
  FileText, AlertTriangle
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const [expandedMenu, setExpandedMenu] = useState('module-dashboard'); // Default expanded
  const location = useLocation();

  // STRUCTURE DATA SIDEBAR (Refined: Header jadi Parent)
  const sidebarStructure = [
    // 1. DASHBOARD
    {
      label: "Dashboard",
      key: "module-dashboard",
      icon: <LayoutDashboard size={20} />,
      children: [
        { label: "Key Metrics", key: "dashboard-metrics", path: "/dashboard/metrics" },
        { label: "Chart Analysis", key: "dashboard-charts", path: "/dashboard/charts" },
        { label: "Top Leaderboards", key: "dashboard-leaderboard", path: "/dashboard/leaderboards" }
      ]
    },

    // 2. MERCHANT MANAGEMENT
    {
      label: "Merchant Management",
      key: "module-merchant",
      icon: <Users size={20} />,
      children: [
        { label: "Daftar Merchant", key: "merchant-list", path: "/merchant/list" }
      ]
    },

    // 3. MONITORING PENDAFTARAN
    {
      label: "New Onboarding",
      key: "module-onboarding",
      icon: <ClipboardList size={20} />,
      children: [
        { label: "Log Registrasi", key: "onboarding-log", path: "/onboarding/logs" }
      ]
    },

    // 4. TRANSACTION
    {
      label: "Transaction Monitoring",
      key: "module-transaction",
      icon: <Activity size={20} />,
      children: [
        { label: "Log Transaksi Global", key: "trx-global", path: "/transactions/global" },
        { label: "Fraud Detection", key: "trx-fraud", path: "/transactions/fraud" }
      ]
    },

    // 5. FINANCE
    {
      label: "Finance",
      key: "module-finance",
      icon: <Wallet size={20} />,
      children: [
        { label: "Laporan Settlement", key: "finance-settlement", path: "/finance/settlement" }
      ]
    },

    // 6. ADMIN
    {
      label: "Admin Management",
      key: "module-admin",
      icon: <Shield size={20} />,
      children: [
        { label: "Role & Permission", key: "admin-roles", path: "/admin/roles" },
        { label: "Audit Trail Log", key: "admin-audit", path: "/admin/audit" }
      ]
    }
  ];

  const handleParentClick = (key) => {
    setExpandedMenu(expandedMenu === key ? null : key);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) toggleSidebar();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleSidebar} />}

      <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        {/* Header Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-mantap-gold text-slate-900 p-1 rounded font-bold">BO</div>
            <h1 className="text-xl font-bold text-white">BackOffice</h1>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400"><X size={24} /></button>
        </div>

        {/* List Menu */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarStructure.map((item) => {
            const isExpanded = expandedMenu === item.key;
            // Active Check (If any child is active)
            const isActiveParent = item.children.some(child => {
              if (child.path.includes('#')) {
                // For hash links, check if the base path matches AND the hash matches
                const [basePath, hash] = child.path.split('#');
                return location.pathname === basePath && location.hash === '#' + hash;
              }
              // For regular links, check if the path starts with the child's path
              return location.pathname.startsWith(child.path);
            });

            return (
              <div key={item.key} className="space-y-1">
                {/* Parent Menu (Formerly Header) */}
                <button
                  onClick={() => handleParentClick(item.key)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActiveParent ? 'text-white bg-slate-800' : 'hover:bg-slate-800/50 hover:text-white'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {/* Children Items */}
                {isExpanded && item.children && (
                  <div className="pl-11 space-y-1 animation-fade-in-up">
                    {item.children.map((child) => {
                      const isHashLink = child.path.includes('#');
                      const isActive = isHashLink
                        ? location.hash === '#' + child.path.split('#')[1] && location.pathname === child.path.split('#')[0]
                        : location.pathname === child.path;

                      const LinkComponent = isHashLink ? HashLink : Link;
                      const linkProps = isHashLink
                        ? { smooth: true, scroll: (el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
                        : {};

                      return (
                        <LinkComponent
                          key={child.key}
                          to={child.path}
                          {...linkProps}
                          onClick={handleLinkClick}
                          className={`block px-3 py-2 rounded-md text-xs font-medium transition-colors border-l-2 ${isActive
                            ? 'border-mantap-blue text-mantap-blue bg-blue-900/10'
                            : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
                            }`}
                        >
                          {child.label}
                        </LinkComponent>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-900/20">
            <LogOut size={20} /> Keluar
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;