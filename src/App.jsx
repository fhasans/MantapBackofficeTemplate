import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Auth & Layout
import LoginPage from './components/auth/LoginPage';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

// Routing Logic
import AppRoutes from './routes/AppRoutes';

// --- DATA BACKOFFICE ---
import {
  bankStats, transactionTrend, paymentComposition,
  topMerchants, topRegions, masterMerchantList,
  registrationQueue, globalTransactions
} from './data/backofficeData';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  // Authentication Check
  useEffect(() => {
    const loggedInUser = localStorage.getItem('isLoggedIn');
    if (loggedInUser === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoadingAuth(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    // Reload to clear router state or redirect to '/' which will show Login if strict
    window.location.href = '/';
  };

  if (isLoadingAuth) return null;
  if (!isAuthenticated) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <Navbar
          ttsEnabled={ttsEnabled}
          setTtsEnabled={setTtsEnabled}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={handleLogout}
        />

        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)] scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <AppRoutes
              // Data Props
              stats={bankStats}
              trendData={transactionTrend}
              compositionData={paymentComposition}
              topMerchants={topMerchants}
              topRegions={topRegions}
              merchants={masterMerchantList}
              registrations={registrationQueue}
              transactions={globalTransactions}

              // Utils
              showBalance={showBalance}
              setShowBalance={setShowBalance}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;