import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Categoria {
  id: number;
  nombre: string;
  items: number;
  icon: string;
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await api.get('/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error('Error fetching categorias:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body-md text-body-md">
      <div className="flex flex-col gap-base mb-xl">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Tool Categories</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage and organize your tool classifications.</p>
      </div>

      <section className="bg-white border border-outline-variant rounded-xl flex flex-col overflow-hidden" style={{ borderTop: '2px solid #006a61' }}>
        <div className="p-md border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
          <h3 className="font-title-lg text-title-lg">Categories</h3>
          <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-0.5 rounded-full">Active</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant">Name</th>
                <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant text-right">Items</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {loading ? (
                <tr>
                  <td colSpan={2} className="text-center py-md font-body-md text-on-surface-variant">Cargando...</td>
                </tr>
              ) : (
                categorias.map(cat => (
                  <tr key={cat.id} className="hover:bg-surface-container transition-colors">
                    <td className="px-md py-md flex items-center gap-sm font-medium">
                      <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                      {cat.nombre}
                    </td>
                    <td className="px-md py-md text-right font-label-md">{cat.items}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-sm mt-auto border-t border-outline-variant">
          <button className="w-full text-center py-sm text-primary font-medium hover:bg-surface-container-high rounded transition-colors">
            Manage All Categories
          </button>
        </div>
      </section>
    </div>
  );
}