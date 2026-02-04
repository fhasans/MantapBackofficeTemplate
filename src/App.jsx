import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './store/slices/authSlice';

// Auth & Layout
import LoginPage from './pages/auth/LoginPage';
import Sidebar from './components/organisms/Sidebar';
import Navbar from './components/organisms/Navbar';

// Routing Logic
import AppRoutes from './routes/AppRoutes';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // UI State (Local)
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  // Note: Initial auth check is handled in slice initialState or can be refined here if verification is needed.

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/';
  };

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