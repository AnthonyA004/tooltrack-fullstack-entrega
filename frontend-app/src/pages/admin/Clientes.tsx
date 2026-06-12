import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Cliente {
  id: number;
  nombre: string;
  email: string;
  iniciales: string;
  bgClass: string;
  tier: string;
  rentals: number;
}

export default function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body-md text-body-md">
      <div className="flex flex-col gap-base mb-xl">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Customer Directory</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">View and manage contractors and external technical teams.</p>
      </div>

      <section className="space-y-lg">
        <div className="bg-white border border-outline-variant rounded-xl p-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg">
            <h3 className="font-title-lg text-title-lg">Customer List</h3>
            <div className="relative w-full md:w-64">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                className="w-full pl-xl pr-md py-sm bg-surface-container-low border border-outline rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" 
                placeholder="Search customers..." 
                type="text"
              />
            </div>
          </div>

          <div className="space-y-sm">
            {loading ? (
              <div className="text-center py-md font-body-md text-on-surface-variant">Cargando...</div>
            ) : (
              clientes.map(c => (
                <div key={c.id} className="flex items-center justify-between p-md border border-outline-variant rounded-lg hover:border-primary transition-all group">
                  <div className="flex items-center gap-md">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${c.bgClass}`}>
                      {c.iniciales}
                    </div>
                    <div>
                      <p className="font-medium text-on-surface">{c.nombre}</p>
                      <p className="text-xs text-on-surface-variant font-label-sm">{c.email}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-xl">
                    <div className="text-right">
                      <p className="text-xs font-label-md text-outline uppercase">Tier</p>
                      <p className="text-sm font-medium">{c.tier}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-label-md text-outline uppercase">Active Rentals</p>
                      <p className="text-sm font-medium">{c.rentals}</p>
                    </div>
                  </div>
                  
                  <button className="text-outline hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}