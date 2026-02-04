import React, { useState } from 'react';
import { Wallet, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulasi Request ke API (Delay 1.5 detik)
    setTimeout(() => {
      // Dummy Credential Logic
      if (formData.username.length > 3 && formData.password.length > 3) {
        onLogin(); // Panggil fungsi login dari Parent
      } else {
        setError('Username atau Password salah. (Min. 4 karakter)');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-mantap-blue/5 z-0"></div>
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative z-10">
        
        {/* Header Logo */}
        <div className="bg-mantap-blue p-8 text-center">
          <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Wallet className="text-mantap-gold h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-white">Mantap Merchant</h1>
          <p className="text-blue-200 text-sm mt-1">Masuk untuk kelola bisnis Anda</p>
        </div>

        {/* Form Login */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ID Merchant / Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue transition-all"
                  placeholder="Contoh: merchant01"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mantap-blue/20 focus:border-mantap-blue transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100 animate-pulse">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-mantap-blue text-white font-bold py-2.5 rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Memproses...
                </>
              ) : (
                'Masuk ke Dashboard'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Lupa password? <a href="#" className="text-mantap-blue hover:underline font-medium">Hubungi Helpdesk</a>
            </p>
          </div>
        </div>

        {/* Footer Kecil */}
        <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400">© 2026 Mandiri Taspen. Secure Connection.</p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;