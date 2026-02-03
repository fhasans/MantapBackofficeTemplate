import React, { useState, useEffect } from 'react';

// Auth & Layout
import LoginPage from './components/auth/LoginPage';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

// Routing Logic (Pemisahan Code)
import AppRoutes from './routes/AppRoutes';

// Data
import { settlementData } from './data/mockData';

function App() {
  // --- STATE MANAGEMENT ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // UI State
  const [showBalance, setShowBalance] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Navigation & Loading State
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isContentLoading, setIsContentLoading] = useState(false);

  // --- EFFECTS ---
  
  // 1. Cek Login saat awal buka
  useEffect(() => {
    const loggedInUser = localStorage.getItem('isLoggedIn');
    if (loggedInUser === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoadingAuth(false);
  }, []);

  // 2. Simulasi Loading saat ganti halaman
  useEffect(() => {
    if (isAuthenticated) {
      setIsContentLoading(true);
      const timer = setTimeout(() => {
        setIsContentLoading(false);
      }, 800); // 0.8 detik loading
      return () => clearTimeout(timer);
    }
  }, [currentPage, isAuthenticated]);

  // --- HANDLERS ---
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  // --- RENDER ---
  if (isLoadingAuth) return null;
  if (!isAuthenticated) return <LoginPage onLogin={handleLogin} />;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      {/* Sidebar Navigasi */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        currentPage={currentPage}
        setPage={setCurrentPage}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        {/* Header Navbar */}
        <Navbar 
          ttsEnabled={ttsEnabled} 
          setTtsEnabled={setTtsEnabled}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          onLogout={handleLogout}
        />

        {/* Konten Utama (Routing ditangani di sini) */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="max-w-7xl mx-auto">
            
            <AppRoutes 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isLoading={isContentLoading}
              data={settlementData}
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