'use client';

import React, { useState } from 'react';
import { Send, ShieldAlert, CheckCircle2 } from 'lucide-react';

// Lista básica de palabras prohibidas para el filtro de seguridad (Boceto)
const PALABRAS_PROHIBIDAS = [
  'pendejo', 'pendeja', 'puto', 'puta', 'cabron', 'cabrón', 
  'chingar', 'chinga', 'madre', 'culero', 'culera', 'mierda'
];

export default function CotizacionesPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipoMueble: 'repisa',
    descripcion: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Convertir todo a minúsculas para analizar el texto
    const textoAnalizar = `${formData.nombre} ${formData.descripcion}`.toLowerCase();

    // 2. Validar si contiene alguna palabra prohibida
    const contieneInsulto = PALABRAS_PROHIBIDAS.some(palabra => textoAnalizar.includes(palabra));

    if (contieneInsulto) {
      setStatus({
        type: 'error',
        message: 'Tu mensaje contiene lenguaje inapropiado. Por favor, reescribe tu solicitud de forma respetuosa.'
      });
      return;
    }

    // 3. Si todo está limpio (Simulación de envío)
    setStatus({
      type: 'success',
      message: '¡Cotización enviada con éxito! Nuestro taller analizará las medidas y te contactará por correo o WhatsApp.'
    });

    // Limpiar formulario
    setFormData({ nombre: '', correo: '', telefono: '', tipoMueble: 'repisa', descripcion: '' });
  };

  return (
    <div className="bg-[#F6F6F6] min-h-screen pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        
        {/* ENCABEZADO */}
        <div className="text-center md:text-left mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
            Proyectos Especiales
          </span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 uppercase">
            Cotiza a Medida
          </h1>
          <p className="text-sm text-neutral-500 max-w-xl">
            ¿Necesitas una estantería más alta, una repisa con medidas específicas o una mesa de centro única? Platícanos tu idea y la fabricamos en el taller.
          </p>
        </div>

        {/* MENSASJES DE ESTADO (ALERTAS) */}
        {status.type === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3 text-sm font-medium animate-fade-in">
            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
            <p>{status.message}</p>
          </div>
        )}

        {status.type === 'success' && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center gap-3 text-sm font-medium animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p>{status.message}</p>
          </div>
        )}

        {/* FORMULARIO CONTENEDOR */}
        <div className="bg-white border border-neutral-200/60 rounded-xl shadow-sm p-5 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Fila 1: Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Tu Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            {/* Fila 2: Correo y Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="correo" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  WhatsApp / Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
                  placeholder="2221234567"
                />
              </div>
            </div>

            {/* Fila 3: Tipo de Mueble */}
            <div>
              <label htmlFor="tipoMueble" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                ¿Qué tipo de pieza requieres?
              </label>
              <select
                id="tipoMueble"
                name="tipoMueble"
                value={formData.tipoMueble}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
              >
                <option value="repisa">Repisa Flotante</option>
                <option value="estanteria">Estantería Estructural / Librero</option>
                <option value="mesa-centro">Mesa de Centro</option>
                <option value="otro">Otro Proyecto Especial</option>
              </select>
            </div>

            {/* Fila 4: Descripción */}
            <div>
              <label htmlFor="descripcion" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Detalles del diseño (Medidas, colores, ideas) *
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                required
                rows={5}
                value={formData.descripcion}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors resize-none"
                placeholder="Por favor descríbenos las medidas aproximadas de tu espacio o si tienes algún requerimiento especial con el grosor de la madera o el acero..."
              />
            </div>

            {/* Botón de envío */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Enviar Solicitud
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}