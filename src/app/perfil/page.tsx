'use client';

import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Package, 
  Settings, 
  Clock, 
  MessageSquare
} from 'lucide-react';

// Mock de datos del usuario
const MOCK_USER = {
  nombre: 'Hector Escobar',
  email: 'hector@ejemplo.com',
  telefono: '+52 222 123 4567',
  ubicacionPrincipal: 'Puebla, Pue.',
  registro: 'Marzo 2026',
};

// Mock de historial de cotizaciones
const MOCK_PEDIDOS = [
  {
    id: 'LUM-8492',
    fecha: '15 de Julio, 2026',
    estado: 'Cotización Enviada',
    cobertura: 'Puebla',
    totalEstimado: 12700,
    items: [
      { nombre: 'Estantería Industrial 3 Niveles', cantidad: 1, precio: 8500 },
      { nombre: 'Mesa de Centro Con Cajones', cantidad: 1, precio: 4200 },
    ],
  },
  {
    id: 'LUM-7210',
    fecha: '02 de Junio, 2026',
    estado: 'Atendido por WhatsApp',
    cobertura: 'Veracruz',
    totalEstimado: 25500,
    items: [
      { nombre: 'Escritorio Roble y Estructura I-Beam', cantidad: 3, precio: 8500 },
    ],
  },
];

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<'historial' | 'ajustes'>('historial');

  return (
    <div className="min-h-screen bg-white text-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER DEL PERFIL */}
        <div className="bg-[#D3D3D3] border border-neutral-800 rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-500 font-bold text-2xl shadow-inner">
              {MOCK_USER.nombre.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-black">
                {MOCK_USER.nombre}
              </h1>
              <p className="text-neutral-600 text-sm flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-amber-500" />
                {MOCK_USER.ubicacionPrincipal} • Miembro desde {MOCK_USER.registro}
              </p>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN POR PESTAÑAS */}
        <div className="flex border-b border-neutral-800 gap-2 sm:gap-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('historial')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'historial'
                ? 'border-amber-500 text-amber-500'
                : 'border-transparent text-neutral-500 hover:text-black'
            }`}
          >
            <Package className="w-4 h-4" />
            Cotizaciones Recientes
          </button>

          <button
            onClick={() => setActiveTab('ajustes')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'ajustes'
                ? 'border-amber-500 text-amber-500'
                : 'border-transparent text-neutral-500 hover:text-black'
            }`}
          >
            <Settings className="w-4 h-4" />
            Datos y Direcciones
          </button>
        </div>

        {/* CONTENIDO SEGÚN LA PESTAÑA */}

        {/* 1. HISTORIAL DE COTIZACIONES */}
        {activeTab === 'historial' && (
          <div className="space-y-4">
            {MOCK_PEDIDOS.map((pedido) => (
              <div 
                key={pedido.id}
                className="bg-[#D3D3D3] border border-neutral-800 rounded-xl p-6 transition-all hover:border-neutral-700 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800/60">
                  <div>
                    <span className="text-xs text-amber-500 font-mono tracking-wider font-semibold">
                      {pedido.id}
                    </span>
                    <h3 className="text-sm font-medium text-black">
                      Solicitado el {pedido.fecha}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {pedido.estado}
                    </span>
                    <span className="text-xs text-neutral-400 border-l border-neutral-800 pl-3">
                      Destino: <strong className="text-white">{pedido.cobertura}</strong>
                    </span>
                  </div>
                </div>

                {/* Desglose de Items */}
                <div className="divide-y divide-neutral-900">
                  {pedido.items.map((item, idx) => (
                    <div key={idx} className="py-2 flex justify-between items-center text-sm">
                      <span className="text-black">
                        <strong className="text-amber-500 font-mono">{item.cantidad}x</strong> {item.nombre}
                      </span>
                      <span className="text-black font-mono">
                        ${(item.precio * item.cantidad).toLocaleString('es-MX')} MXN
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer de la tarjeta */}
                <div className="pt-4 border-t border-neutral-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block">Total Estimado</span>
                    <span className="text-lg font-bold text-amber-500 font-mono">
                      ${pedido.totalEstimado.toLocaleString('es-MX')} MXN
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/522220000000?text=Hola,%20quisiera%20darle%20seguimiento%20a%20mi%20cotización%20${pedido.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    Reconsultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. DATOS Y DIRECCIONES */}
        {activeTab === 'ajustes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Formulario de Datos Personales */}
            <div className="bg-[#D3D3D3] border border-neutral-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-black flex items-center gap-2 border-b border-neutral-800 pb-3">
                <User className="w-5 h-5 text-amber-500" />
                Información Personal
              </h2>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-black block mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    defaultValue={MOCK_USER.nombre} 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-black block mb-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    defaultValue={MOCK_USER.email} 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-black block mb-1">Teléfono / WhatsApp</label>
                  <input 
                    type="text" 
                    defaultValue={MOCK_USER.telefono} 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs rounded-lg transition-colors mt-2">
                Guardar Cambios
              </button>
            </div>

            {/* Zonas de Cobertura y Dirección */}
            <div className="bg-[#D3D3D3] border border-neutral-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-black flex items-center gap-2 border-b border-neutral-800 pb-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                Ubicación y Entregas
              </h2>

              <div>
                <label className="text-xs text-black block mb-1">Estado de Entrega Principal</label>
                <select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500">
                  <option value="Puebla">Puebla</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Veracruz">Veracruz</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-black block mb-1">Dirección / Referencia de Flete</label>
                <textarea 
                  rows={3}
                  placeholder="Ej: Av. Juárez #123, Col. Centro, Puebla..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}