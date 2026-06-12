import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProducto, setCurrentProducto] = useState<Partial<Producto>>({});

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await api.get('/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error fetching productos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentProducto.id) {
        await api.put(`/productos/${currentProducto.id}`, currentProducto);
      } else {
        await api.post('/productos', currentProducto);
      }
      setIsModalOpen(false);
      fetchProductos();
    } catch (error) {
      console.error('Error saving producto:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      try {
        await api.delete(`/productos/${id}`);
        fetchProductos();
      } catch (error) {
        console.error('Error deleting producto:', error);
      }
    }
  }

  const openNewModal = () => {
    setCurrentProducto({});
    setIsModalOpen(true);
  };

  const openEditModal = (producto: Producto) => {
    setCurrentProducto(producto);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-20 font-body-md">
      {/* Dashboard Header */}
      <div className="flex flex-col gap-base mb-xl">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Inventory Management</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Real-time control of your professional toolset and hardware assets.</p>
      </div>

      {/* Inventory Filters & Search */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-lg">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
            placeholder="Search product ID or name..." 
            type="text"
          />
        </div>
      </div>

      {/* Inventory List (Mobile-first Data Cards) */}
      <div className="flex flex-col gap-md">
        {loading ? (
          <div className="text-center py-xl text-on-surface-variant">Cargando...</div>
        ) : productos.length === 0 ? (
          <div className="text-center py-xl text-on-surface-variant">No hay productos en el inventario.</div>
        ) : (
          productos.map(p => (
            <div key={p.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-start">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>ID: TT-{p.id}</span>
                  <h3 className="font-title-lg text-title-lg text-primary mt-xs">{p.nombre}</h3>
                </div>
                {p.stock > 0 ? (
                   <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-label-sm font-label-md">IN STOCK</span>
                ) : (
                   <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-1 rounded text-label-sm font-label-md">OUT OF STOCK</span>
                )}
              </div>
              
              <div className="p-md grid grid-cols-2 gap-md border-b border-outline-variant">
                <div className="col-span-2 md:col-span-1">
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Description</p>
                  <p className="font-body-md text-body-md font-medium">{p.descripcion || 'N/A'}</p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Price</p>
                  <p className="font-body-md text-body-md font-medium">${p.precio}</p>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Quantity</p>
                  <p className="font-body-md text-body-md font-medium">{p.stock} Units</p>
                </div>
              </div>
              
              <div className="p-sm flex justify-end gap-sm">
                <button 
                  onClick={() => openEditModal(p)}
                  className="flex items-center gap-xs text-on-surface-variant hover:bg-surface-container-highest px-3 py-2 rounded-xl transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  <span className="font-label-md text-label-md">Edit</span>
                </button>
                <button 
                  onClick={() => handleDelete(p.id)}
                  className="flex items-center gap-xs text-error hover:bg-error-container/20 px-3 py-2 rounded-xl transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  <span className="font-label-md text-label-md">Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={openNewModal}
        className="fixed right-6 bottom-24 bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform z-40"
      >
        <span className="material-symbols-outlined text-[32px]">add</span>
      </button>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-md bg-on-background/40 backdrop-blur-sm">
          <div className="bg-surface w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden translate-y-0 flex flex-col max-h-[90vh]">
            
            <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h3 className="font-headline-md text-headline-md text-primary">
                {currentProducto.id ? 'Edit Tool' : 'Add Tool'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-surface-container-highest rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-margin flex flex-col gap-lg overflow-y-auto">
              <div className="grid grid-cols-1 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Product Name</label>
                  <input 
                    required
                    type="text"
                    value={currentProducto.nombre || ''}
                    onChange={e => setCurrentProducto({...currentProducto, nombre: e.target.value})}
                    className="w-full bg-surface border border-outline rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none" 
                    placeholder="e.g. Cordless Hammer Drill" 
                  />
                </div>
                
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Description</label>
                  <textarea
                    required
                    rows={3}
                    value={currentProducto.descripcion || ''}
                    onChange={e => setCurrentProducto({...currentProducto, descripcion: e.target.value})}
                    className="w-full bg-surface border border-outline rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                    placeholder="Brief details about the tool..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Price (USD)</label>
                    <input 
                      required
                      type="number"
                      step="0.01"
                      value={currentProducto.precio || ''}
                      onChange={e => setCurrentProducto({...currentProducto, precio: parseFloat(e.target.value)})}
                      className="w-full bg-surface border border-outline rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none" 
                      placeholder="0.00" 
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Stock Qty</label>
                    <input 
                      required
                      type="number"
                      value={currentProducto.stock || ''}
                      onChange={e => setCurrentProducto({...currentProducto, stock: parseInt(e.target.value, 10)})}
                      className="w-full bg-surface border border-outline rounded-xl px-4 py-3 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none" 
                      placeholder="0" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-sm pt-md">
                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md text-headline-md shadow-md active:scale-95 transition-all"
                >
                  Save Changes
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full text-on-surface-variant py-3 font-label-md text-label-md hover:bg-surface-container-high rounded-xl transition-colors"
                >
                  Discard Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}