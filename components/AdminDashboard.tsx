import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Ritual, Category } from '../types';
import { X, Save, Edit2, Plus, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminDashboardProps {
  onClose: () => void;
}

const emptyRitual: Ritual = {
  id: '',
  name: '',
  description: '',
  category: 'Amor',
  prices: { '1d': 0, '3d': 0, 'VDF': 0, '7d': 0 }
};

const CATEGORIES: Category[] = [
  'Amor', 
  'Limpieza', 
  'Protecciones', 
  'Trabajo de Dinero', 
  'Trabajo de Magia Negra', 
  'Diferentes Trabajos'
];

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const { rituals, updateRitual, addRitual, resetRituals } = useApp();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState<Ritual | null>(null);

  const startEdit = (ritual: Ritual) => {
    setEditingId(ritual.id);
    setIsCreating(false);
    setFormData({ ...ritual });
  };

  const startCreate = () => {
    const newId = `custom-${Date.now()}`;
    setFormData({ ...emptyRitual, id: newId });
    setIsCreating(true);
    setEditingId(newId);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(null);
    setIsCreating(false);
  };

  const handleSave = () => {
    if (formData) {
      if (isCreating) {
        addRitual(formData);
      } else {
        updateRitual(formData);
      }
      setEditingId(null);
      setFormData(null);
      setIsCreating(false);
    }
  };

  const handleChange = (field: keyof Ritual, value: any) => {
    if (!formData) return;
    setFormData({ ...formData, [field]: value });
  };

  const handlePriceChange = (type: keyof Ritual['prices'], value: string) => {
    if (!formData) return;
    const numValue = parseInt(value) || 0;
    setFormData({
      ...formData,
      prices: {
        ...formData.prices,
        [type]: numValue
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-800 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-mystic-gold">Dashboard Franlilo</h1>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">Gestión de Catálogo en Tiempo Real</p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
             <button 
              onClick={startCreate}
              className="flex items-center gap-2 bg-mystic-purple text-white px-6 py-2 rounded-sm hover:bg-mystic-purple/80 transition-colors font-bold text-sm"
            >
              <Plus size={18} /> AGREGAR RITUAL
            </button>
             <button 
              onClick={resetRituals}
              className="text-red-400 text-xs hover:text-red-300 border border-red-900/50 px-3 py-2 rounded"
            >
              Resetear Default
            </button>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white"
            >
              <X />
            </button>
          </div>
        </div>

        <div className="bg-[#0f0f0f] rounded-lg border border-gray-800 overflow-hidden shadow-2xl">
          {isCreating && formData && (
             <motion.div 
               initial={{ opacity: 0, height: 0 }} 
               animate={{ opacity: 1, height: 'auto' }}
               className="bg-mystic-gold/10 p-6 border-b border-mystic-gold/20"
             >
                <h3 className="text-mystic-gold font-bold mb-4">Creando Nuevo Ritual</h3>
                {/* Form layout reused below in table, but here clearer for creation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                   <div>
                     <label className="block text-xs text-gray-500 mb-1">Nombre</label>
                     <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full bg-black border border-gray-700 p-3 rounded text-white" placeholder="Nombre del Ritual" />
                   </div>
                   <div>
                     <label className="block text-xs text-gray-500 mb-1">Categoría</label>
                     <select value={formData.category} onChange={(e) => handleChange('category', e.target.value)} className="w-full bg-black border border-gray-700 p-3 rounded text-gray-400">
                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                     </select>
                   </div>
                   <div className="md:col-span-2">
                     <label className="block text-xs text-gray-500 mb-1">Descripción</label>
                     <textarea value={formData.description} onChange={(e) => handleChange('description', e.target.value)} className="w-full bg-black border border-gray-700 p-3 rounded text-white" rows={2} placeholder="Descripción corta..." />
                   </div>
                   <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500 mb-2">Precios (Dejar en 0 si no aplica)</label>
                      <div className="grid grid-cols-4 gap-4">
                        {['1d', '3d', 'VDF', '7d'].map((p) => (
                          <div key={p}>
                            <span className="text-[10px] text-gray-500 block mb-1 uppercase">{p}</span>
                            <input type="number" value={formData.prices[p as keyof typeof formData.prices]} onChange={(e) => handlePriceChange(p as any, e.target.value)} className="w-full bg-black border border-gray-700 p-2 rounded text-white" />
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
                <div className="flex justify-end gap-3">
                  <button onClick={cancelEdit} className="px-4 py-2 text-gray-400 hover:text-white">Cancelar</button>
                  <button onClick={handleSave} className="px-6 py-2 bg-mystic-gold text-black font-bold rounded hover:bg-white transition-colors">Guardar Nuevo</button>
                </div>
             </motion.div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-[#050505] text-gray-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Ritual</th>
                  <th className="p-4">Descripción</th>
                  <th className="p-4 text-center">Precios (1d / 3d / VDF / 7d)</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300 text-sm">
                {rituals.map(ritual => {
                  const isEditing = editingId === ritual.id && !isCreating;
                  
                  return (
                    <motion.tr 
                      key={ritual.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={isEditing ? 'bg-mystic-purple/5' : 'hover:bg-white/5'}
                    >
                      {/* Name Column */}
                      <td className="p-4 align-top w-1/4">
                        {isEditing && formData ? (
                          <div className="space-y-2">
                            <input 
                              type="text" 
                              value={formData.name} 
                              onChange={(e) => handleChange('name', e.target.value)}
                              className="w-full bg-black border border-gray-700 p-2 rounded text-white"
                            />
                            <select 
                              value={formData.category}
                              onChange={(e) => handleChange('category', e.target.value)}
                              className="w-full bg-black border border-gray-700 p-2 rounded text-gray-400 text-xs"
                            >
                              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                        ) : (
                          <div>
                            <p className="font-bold text-white text-lg">{ritual.name}</p>
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              ritual.category === 'Amor' ? 'border-pink-900 text-pink-500' :
                              ritual.category === 'Trabajo de Magia Negra' ? 'border-red-900 text-red-500' :
                              ritual.category === 'Trabajo de Dinero' ? 'border-mystic-gold/50 text-mystic-gold' :
                              ritual.category === 'Protecciones' ? 'border-blue-900 text-blue-500' :
                              ritual.category === 'Limpieza' ? 'border-emerald-900 text-emerald-500' :
                              ritual.category === 'Diferentes Trabajos' ? 'border-purple-900 text-purple-500' :
                              'border-gray-800 text-gray-500'
                            }`}>
                              {ritual.category}
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Description Column */}
                      <td className="p-4 align-top w-1/3">
                        {isEditing && formData ? (
                          <textarea 
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            rows={3}
                            className="w-full bg-black border border-gray-700 p-2 rounded text-white text-xs"
                          />
                        ) : (
                          <p className="line-clamp-2 text-gray-400 text-xs leading-relaxed">{ritual.description}</p>
                        )}
                      </td>

                      {/* Prices Column */}
                      <td className="p-4 align-top">
                        {isEditing && formData ? (
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <label className="text-[10px] text-gray-500">1d</label>
                              <input type="number" value={formData.prices['1d']} onChange={(e) => handlePriceChange('1d', e.target.value)} className="bg-black border border-gray-700 p-1 rounded w-full" />
                            </div>
                            <div className="flex flex-col">
                              <label className="text-[10px] text-gray-500">3d</label>
                              <input type="number" value={formData.prices['3d']} onChange={(e) => handlePriceChange('3d', e.target.value)} className="bg-black border border-gray-700 p-1 rounded w-full" />
                            </div>
                            <div className="flex flex-col">
                              <label className="text-[10px] text-gray-500">VDF</label>
                              <input type="number" value={formData.prices['VDF']} onChange={(e) => handlePriceChange('VDF', e.target.value)} className="bg-black border border-mystic-gold/50 p-1 rounded w-full" />
                            </div>
                            <div className="flex flex-col">
                              <label className="text-[10px] text-gray-500">7d</label>
                              <input type="number" value={formData.prices['7d']} onChange={(e) => handlePriceChange('7d', e.target.value)} className="bg-black border border-gray-700 p-1 rounded w-full" />
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                            <span className={`flex justify-between ${ritual.prices['1d'] === 0 ? 'text-gray-700' : 'text-gray-400'}`}>1d: <span className="text-white">{ritual.prices['1d'] > 0 ? `$${ritual.prices['1d']}` : '-'}</span></span>
                            <span className={`flex justify-between ${ritual.prices['3d'] === 0 ? 'text-gray-700' : 'text-gray-400'}`}>3d: <span className="text-white">{ritual.prices['3d'] > 0 ? `$${ritual.prices['3d']}` : '-'}</span></span>
                            <span className={`flex justify-between ${ritual.prices['VDF'] === 0 ? 'text-gray-700' : 'text-mystic-gold'}`}>VDF: <span className="font-bold">{ritual.prices['VDF'] > 0 ? `$${ritual.prices['VDF']}` : '-'}</span></span>
                            <span className={`flex justify-between ${ritual.prices['7d'] === 0 ? 'text-gray-700' : 'text-gray-400'}`}>7d: <span className="text-white">{ritual.prices['7d'] > 0 ? `$${ritual.prices['7d']}` : '-'}</span></span>
                          </div>
                        )}
                      </td>

                      {/* Actions Column */}
                      <td className="p-4 align-top text-right">
                        {isEditing ? (
                          <div className="flex flex-col gap-2 items-end">
                            <button onClick={handleSave} className="flex items-center gap-1 bg-green-900/50 text-green-400 px-3 py-1 rounded hover:bg-green-900 text-xs">
                              <Save size={14} /> Guardar
                            </button>
                            <button onClick={cancelEdit} className="text-gray-500 text-xs hover:text-white">
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => startEdit(ritual)} className="p-2 bg-gray-800 rounded hover:bg-mystic-purple hover:text-white transition-all">
                            <Edit2 size={16} />
                          </button>
                        )}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;