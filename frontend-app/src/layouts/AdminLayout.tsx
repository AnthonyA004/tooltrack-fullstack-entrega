import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">ToolTrack</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/admin" className="hover:bg-slate-700 p-2 rounded">Dashboard</Link>
            <Link to="/admin/productos" className="hover:bg-slate-700 p-2 rounded">Productos</Link>
            <Link to="/admin/categorias" className="hover:bg-slate-700 p-2 rounded">Categorías</Link>
            <Link to="/admin/clientes" className="hover:bg-slate-700 p-2 rounded">Clientes</Link>
            <Link to="/admin/ventas" className="hover:bg-slate-700 p-2 rounded">Ventas</Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="bg-red-600 p-2 rounded mt-4">Cerrar Sesión</button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}