import React from 'react';

// Import Components Dashboard
import SettlementCard from '../dashboard/SettlementCard';
import TransactionTable from '../dashboard/TransactionTable';
import QuickActions from '../dashboard/QuickActions';
import HelpWidget from '../dashboard/HelpWidget';

const DashboardPage = ({ data, showBalance, setShowBalance, onNavigate }) => {
  return (
    <>
      <div className="mb-8 animation-fade-in">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Keuangan</h1>
        <p className="text-slate-500 text-sm mt-1">
          Halo, {data.merchantName}! Berikut laporan hari ini.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 animation-fade-in">
        {/* Kolom Kiri */}
        <div className="xl:col-span-2 space-y-6">
          <SettlementCard 
            todayAmount={data.todayAmount}
            floatAmount={data.floatAmount}
            showBalance={showBalance}
            setShowBalance={setShowBalance}
          />
          <TransactionTable history={data.history} />
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          <QuickActions 
              merchantId={data.merchantId} 
              onNavigate={onNavigate}
          />
          <HelpWidget onNavigate={onNavigate} />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;