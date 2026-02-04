import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  LogOut, X, ChevronDown, ChevronRight
} from 'lucide-react';
import { sidebarStructure } from '../../config/sidebarConfig.jsx';

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const [expandedMenu, setExpandedMenu] = useState('module-dashboard'); // Default expanded
  const location = useLocation();

  const handleParentClick = (key) => {
    setExpandedMenu(expandedMenu === key ? null : key);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) toggleSidebar();
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleSidebar} />}

      <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

        {/* Header Logo */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-mantap-gold text-slate-900 p-1.5 rounded-lg font-bold text-lg shadow-lg shadow-amber-500/20">BO</div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">BackOffice</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Mantap Merchant</p>
            </div>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-white transition-colors"><X size={24} /></button>
        </div>

        {/* List Menu */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {sidebarStructure.map((item) => {
            const isExpanded = expandedMenu === item.key;
            // Active Check
            const isActiveParent = item.children.some(child => {
              if (child.path.includes('#')) {
                const [basePath, hash] = child.path.split('#');
                return location.pathname === basePath && location.hash === '#' + hash;
              }
              return location.pathname.startsWith(child.path);
            });

            return (
              <div key={item.key} className="space-y-1">
                {/* Parent Menu */}
                <button
                  onClick={() => handleParentClick(item.key)}
                  className={`group w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent ${isActiveParent
                    ? 'bg-slate-800 text-white shadow-md shadow-slate-900/50 border-slate-700/50'
                    : 'hover:bg-slate-800/50 hover:text-white hover:border-slate-800'
                    }`}
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className={`p-1 rounded-lg transition-colors ${isActiveParent ? 'text-mantap-gold' : 'text-slate-400 group-hover:text-mantap-gold'}`}>
                      {item.icon}
                    </div>
                    <span className="truncate leading-tight text-left">{item.label}</span>
                  </div>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} text-slate-500`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Children Items (Accordion) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pl-[3.25rem] pr-2 space-y-1 py-1 relative">
                    {/* Vertical Line for Hierarchy */}
                    <div className="absolute left-[1.65rem] top-0 bottom-0 w-px bg-slate-800"></div>

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
                          className={`relative block px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${isActive
                            ? 'text-white bg-slate-800 shadow-sm'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                            }`}
                        >
                          {/* Horizontal Dash for Hierarchy */}
                          {/* <div className={`absolute -left-4 top-1/2 w-3 h-px ${isActive ? 'bg-mantap-gold' : 'bg-slate-800'}`}></div> */}
                          <div className={`flex items-center gap-2 ${isActive ? 'translate-x-1' : ''} transition-transform`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-mantap-gold' : 'bg-slate-700 group-hover:bg-slate-600'}`}></div>
                            {child.label}
                          </div>
                        </LinkComponent>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0">
          <button onClick={onLogout} className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all border border-transparent hover:border-red-500/20">
            <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Keluar Aplikasi</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
