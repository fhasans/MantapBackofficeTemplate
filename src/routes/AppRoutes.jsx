import React from 'react';

// Import Pages
import DashboardPage from '../components/pages/DashboardPage';
import HistoryPage from '../components/pages/HistoryPage';
import QrisPage from '../components/pages/QrisPage';
import HelpPage from '../components/pages/HelpPage';
import { DashboardSkeleton, PageSkeleton } from '../components/ui/Skeleton';

// Import Skeletons

const AppRoutes = ({ 
  currentPage, 
  setCurrentPage, 
  isLoading, 
  data, 
  showBalance, 
  setShowBalance 
}) => {

  // 1. LOGIC LOADING (Tampilkan Skeleton)
  if (isLoading) {
    if (currentPage === 'dashboard') {
        return <DashboardSkeleton />;
    } else {
        return <PageSkeleton />;
    }
  }

  // 2. LOGIC ROUTING (Tampilkan Halaman Asli)
  switch(currentPage) {
    case 'dashboard':
      return (
        <DashboardPage 
          data={data}
          showBalance={showBalance}
          setShowBalance={setShowBalance}
          onNavigate={setCurrentPage}
        />
      );
    
    case 'history':
      return <div className="animation-fade-in"><HistoryPage /></div>;
      
    case 'qris':
      return <div className="animation-fade-in"><QrisPage onBack={() => setCurrentPage('dashboard')} /></div>;

    case 'help':
      return <div className="animation-fade-in"><HelpPage onBack={() => setCurrentPage('dashboard')} /></div>;
      
    default:
      return (
        <div className="flex flex-col items-center justify-center h-96 text-slate-400">
          <p className="text-lg font-semibold">Halaman "{currentPage}" sedang dalam pengembangan.</p>
          <button onClick={() => setCurrentPage('dashboard')} className="mt-4 text-mantap-blue hover:underline">
            Kembali ke Dashboard
          </button>
        </div>
      );
  }
};

export default AppRoutes;