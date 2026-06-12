import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Venta {
  id: string;
  herramienta: string;
  sku: string;
  cliente: string;
  monto: string;
  estado: string;
  estadoClase: string;
  estadoIcono: string;
}

export default function Ventas() {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVentas();
  }, []);

  const fetchVentas = async () => {
    try {
      const response = await api.get('/ventas');
      setVentas(response.data);
    } catch (error) {
      console.error('Error fetching ventas:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body-md text-body-md pb-20">
      <div className="flex flex-col gap-base mb-xl">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Sales & Transactions</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Monitor rental history and sales records.</p>
      </div>

      <section>
        <div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
          <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-secondary">history</span>
              <h3 className="font-title-lg text-title-lg">Recent Transactions</h3>
            </div>
            <div className="flex gap-sm">
              <select className="text-xs font-label-md bg-surface border border-outline rounded px-sm py-1 outline-none">
                <option>Status: All</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto hide-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-container-lowest border-b border-outline-variant">
                  <th className="px-margin py-md font-label-md text-on-surface-variant">Transaction ID</th>
                  <th className="px-md py-md font-label-md text-on-surface-variant">Tool Details</th>
                  <th className="px-md py-md font-label-md text-on-surface-variant">Customer</th>
                  <th className="px-md py-md font-label-md text-on-surface-variant">Amount</th>
                  <th className="px-md py-md font-label-md text-on-surface-variant">Status</th>
                  <th className="px-margin py-md font-label-md text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center py-md font-body-md text-on-surface-variant">Cargando...</td>
                  </tr>
                ) : (
                  ventas.map(v => (
                    <tr key={v.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-margin py-md font-label-md">{v.id}</td>
                      <td className="px-md py-md">
                        <div className="flex flex-col">
                          <span className="font-medium">{v.herramienta}</span>
                          <span className="text-xs text-on-surface-variant">SKU: {v.sku}</span>
                        </div>
                      </td>
                      <td className="px-md py-md">{v.cliente}</td>
                      <td className="px-md py-md font-medium text-primary">{v.monto}</td>
                      <td className="px-md py-md">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-tighter ${v.estadoClase}`}>
                          <span className="material-symbols-outlined text-[14px]">{v.estadoIcono}</span>
                          {v.estado}
                        </span>
                      </td>
                      <td className="px-margin py-md text-right">
                        <button className="text-primary hover:underline font-label-md text-xs">Details</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}