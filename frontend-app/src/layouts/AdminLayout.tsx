import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/productos', icon: 'inventory_2', label: 'Inventory' },
    { path: '/admin/categorias', icon: 'category', label: 'Categories' },
    { path: '/admin/clientes', icon: 'group', label: 'Customers' },
    { path: '/admin/ventas', icon: 'payments', label: 'Sales' },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0 font-body-md">
      {/* Top Navigation */}
      <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-margin py-md max-w-7xl mx-auto h-16">
          <div className="flex items-center gap-base">
            <button 
              className="p-base hover:bg-surface-container-high transition-colors rounded-xl md:hidden"
              onClick={toggleSidebar}
            >
              <span className="material-symbols-outlined text-primary dark:text-inverse-primary text-[24px]">menu</span>
            </button>
            <div className="flex items-center gap-xs ml-base">
              <span className="material-symbols-outlined text-primary dark:text-inverse-primary text-[24px]">construction</span>
              <h1 className="font-headline-md text-headline-md text-primary dark:text-inverse-primary font-bold tracking-tight">ToolTrack</h1>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-base hover:bg-surface-container-high transition-colors rounded-xl">
              <span className="material-symbols-outlined text-on-surface-variant text-[24px]">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant flex items-center justify-center cursor-pointer" onClick={handleLogout} title="Cerrar Sesión">
              <span className="material-symbols-outlined text-on-primary-container text-[20px]">logout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-on-background/20 z-[60] backdrop-blur-sm md:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Navigation Drawer (Sidebar) */}
      <aside 
        className={`h-full w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant dark:border-outline z-[70] transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col gap-base py-md h-full">
          <div className="px-margin py-md flex items-center justify-between md:hidden mt-2">
            <span className="font-headline-md text-headline-md font-bold text-primary">Admin</span>
            <button className="p-base hover:bg-surface-container-highest rounded-full" onClick={toggleSidebar}>
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div className="hidden md:block px-margin mt-16 mb-md">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">ToolTrack Admin</h2>
          </div>
          <nav className="mt-md flex flex-col gap-xs flex-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`rounded-full mx-2 px-4 py-3 flex items-center gap-md font-label-md text-label-md transition-all active:scale-95 ${isActive ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto px-4 pb-4">
             <button 
               onClick={handleLogout}
               className="w-full bg-error-container text-on-error-container hover:bg-error/20 py-2 rounded-xl flex items-center justify-center gap-2 font-label-md transition-colors"
             >
               <span className="material-symbols-outlined text-[20px]">logout</span>
               Sign Out
             </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 px-margin max-w-7xl mx-auto md:ml-64 md:px-lg transition-all duration-300 min-h-screen">
        <Outlet />
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden flex justify-around items-center h-16 px-gutter bg-surface dark:bg-inverse-surface fixed bottom-0 w-full z-50 border-t border-outline-variant dark:border-outline shadow-sm">
        {navLinks.slice(0, 4).map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 px-3 py-1 ${isActive ? 'bg-primary-container text-on-primary-container rounded-xl' : 'text-on-surface-variant hover:text-primary'}`}
            >
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>{link.icon}</span>
              <span className="font-label-sm text-[10px] leading-[14px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}