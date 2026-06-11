import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
    <div className="flex items-center justify-center h-screen bg-slate-100 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">ToolTrack Login</h2>
          <p className="text-gray-500 text-sm mt-1">Ingresa tus credenciales de administrador</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input 
              type="text" 
              placeholder="Ej. admin_user" 
              className="border p-2.5 rounded w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-sm" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="border p-2.5 rounded w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition text-sm" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-600 text-white p-2.5 w-full rounded font-semibold text-sm hover:bg-blue-700 transition duration-200 mt-2 disabled:bg-blue-400"
          >
            {loading ? 'Iniciando sesión...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
} 