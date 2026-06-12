import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Petición al endpoint exacto que pide la práctica
      const response = await api.post('/auth/login', { username, password });
      
      // Guardar el token JWT de forma local
      localStorage.setItem('token', response.data.token);
      
      // Redirigir al panel de administración protegido
      navigate('/admin');
    } catch (err) {
      setError('Credenciales inválidas o error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-on-surface bg-background font-body-md">
      {/* Background Grid Effect */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#c4c5d5 1px, transparent 1px), linear-gradient(90deg, #c4c5d5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.05
        }}
      ></div>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-margin relative z-10">
        {/* Login Card */}
        <div className="w-full max-w-sm bg-surface-container-lowest border border-outline-variant p-xl flex flex-col gap-xl shadow-sm rounded-xl">
          
          {/* Logo and Header */}
          <div className="flex flex-col items-center gap-sm">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[32px]">construction</span>
              <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">ToolTrack</h1>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-center px-md">
              Technical precision in tool management.
            </p>
          </div>

          {error && (
            <div className="bg-error-container text-on-error-container font-label-md px-md py-sm rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">error</span>
              {error}
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-lg" onSubmit={handleLogin}>
            
            {/* Username Field */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-base" htmlFor="username">
                Username
              </label>
              <div className="relative group">
                <input 
                  className="w-full px-md py-sm bg-surface border border-outline font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded-md" 
                  id="username" 
                  name="username" 
                  placeholder="e.g. admin" 
                  required 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-md pointer-events-none text-outline group-focus-within:text-primary">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-xs">
              <div className="flex justify-between items-center px-base">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <input 
                  className="w-full px-md py-sm bg-surface border border-outline font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-all rounded-md" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  className="absolute inset-y-0 right-0 flex items-center pr-md text-outline hover:text-on-surface transition-colors" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full py-md bg-primary-container text-on-primary-container rounded-lg font-headline-md text-headline-md font-bold transition-all active:scale-[0.98] hover:bg-primary-fixed-dim border border-transparent shadow-sm flex justify-center items-center gap-sm disabled:opacity-70 disabled:cursor-not-allowed" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                  Validating...
                </>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Bottom Status Indicator */}
          <div className="pt-md border-t border-outline-variant">
            <div className="flex items-center gap-sm text-on-secondary-container bg-secondary-container/30 px-md py-xs rounded-xl w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm">System Status: Online</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Simplified for Login */}
      <footer className="w-full py-xl px-margin flex flex-col items-center gap-md border-t border-outline-variant bg-surface-container-lowest relative z-10">
        <p className="font-label-md text-label-md text-on-surface-variant text-center">
          © 2024 ToolTrack Systems. All rights reserved.
        </p>
        <div className="flex gap-lg">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Privacy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Terms</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Support</a>
        </div>
      </footer>
    </div>
  );
}