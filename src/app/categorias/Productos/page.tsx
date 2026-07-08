'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

// 1. Simulación de tus 15 modelos exclusivos (Diseño Industrial)
const ALL_PRODUCTS = [
  // Repisas
  { id: 'r1', name: 'Repisa Flotante Axis', category: 'repisas', price: 1299, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80', desc: 'Soporte central metálico con luz LED' },
  { id: 'r2', name: 'Repisa Modular Hexa', category: 'repisas', price: 1550, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80', desc: 'Geometría adaptable para muros' },
  { id: 'r3', name: 'Repisa Corner Esquinera', category: 'repisas', price: 980, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80', desc: 'Aprovechamiento de ángulos muertos' },
  { id: 'r4', name: 'Repisa Minimal Line', category: 'repisas', price: 1100, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80', desc: 'Perfil de acero ultra delgado' },
  { id: 'r5', name: 'Repisa Triple Ensamble', category: 'repisas', price: 2199, image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=500&q=80', desc: 'Tres niveles de madera sólida' },
  
  // Estanterías
  { id: 'e1', name: 'Estantería Industrial Zeta', category: 'estanterias', price: 3499, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80', desc: 'Estructura geométrica escalonada' },
  { id: 'e2', name: 'Librero Estructural N1', category: 'estanterias', price: 4200, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80', desc: 'Herrería reforzada de piso a techo' },
  { id: 'e3', name: 'Estantería Slim Tower', category: 'estanterias', price: 2899, image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=500&q=80', desc: 'Diseño vertical para espacios reducidos' },
  { id: 'e4', name: 'Consola Block Metálica', category: 'estanterias', price: 3850, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=500&q=80', desc: 'Divisiones asimétricas soldadas' },
  { id: 'e5', name: 'Organizador Workshop', category: 'estanterias', price: 5100, image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=500&q=80', desc: 'Madera rústica y alta capacidad' },

  // Mesas de Centro
  { id: 'm1', name: 'Mesa de Centro Cross Steel', category: 'mesas-centro', price: 2499, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80', desc: 'Base en cruz de acero negro mate' },
  { id: 'm2', name: 'Mesa Auxiliar Cube', category: 'mesas-centro', price: 1850, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80', desc: 'Cubo minimalista de metal y roble' },
  { id: 'm3', name: 'Mesa de Centro Dual Nivel', category: 'mesas-centro', price: 3200, image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80', desc: 'Dos superficies desfasadas' },
  { id: 'm4', name: 'Mesa de Centro Oval Timber', category: 'mesas-centro', price: 2990, image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=500&q=80', desc: 'Madera de encino cortada en silueta' },
  { id: 'm5', name: 'Mesa Auxiliar Trio', category: 'mesas-centro', price: 1600, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80', desc: 'Ligera, funcional y movible' },
];

export default function ProductosPage() {
  const [activeFilter, setActiveFilter] = useState('todos');

  // Filtrar productos dinámicamente según la categoría seleccionada
  const filteredProducts = activeFilter === 'todos' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#F6F6F6] min-h-screen pb-24">
      {/* HEADER DE LA CATEGORÍA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="border-b border-neutral-200 pb-5 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-neutral-900 uppercase">Catálogo de Diseños</h1>
            <p className="mt-2 text-sm text-neutral-500">
              Mostrando {filteredProducts.length} de las 15 piezas exclusivas fabricadas en nuestro estudio.
            </p>
          </div>
        </div>

        {/* BARRA DE FILTROS (UX de alta conversión) */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todos', label: 'Todos los Modelos' },
              { id: 'repisas', label: 'Repisas' },
              { id: 'estanterias', label: 'Estanterías' },
              { id: 'mesas-centro', label: 'Mesas de Centro' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Indicador estético de herramientas adicionales */}
          <div className="flex items-center gap-3 text-xs font-bold text-neutral-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded border border-neutral-200">
              <SlidersHorizontal className="w-4 h-4" /> Filtrar
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-2 rounded border border-neutral-200">
              <ArrowUpDown className="w-4 h-4" /> Ordenar
            </span>
          </div>
        </div>
      </div>

      {/* GRID DE PRODUCTOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white border border-neutral-200/60 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Imagen del Mueble */}
              <div className="aspect-square bg-neutral-100 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute top-3 left-3 bg-neutral-900/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                  {product.category.replace('-', ' ')}
                </span>
              </div>

              {/* Información Técnica e Identidad */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg group-hover:text-neutral-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{product.desc}</p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Precio Taller</span>
                    <span className="text-lg font-black text-neutral-900">
                      ${product.price.toLocaleString('es-MX')}
                    </span>
                  </div>
                  
                  <button className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors duration-200">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}