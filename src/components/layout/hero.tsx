'use client';

import React from 'react';
import { Hammer, ShieldCheck, Ruler } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white">
      {/* SECCIÓN 1: BIENVENIDA (HERO) */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Taller de Diseño Estructural
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
            Geometría <br />
            <span className="text-neutral-500 font-light">y Función.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 max-w-md mx-auto md:mx-0 font-normal leading-relaxed">
            No creamos muebles comunes. Fabricamos repisas, estanterías y mesas de centro a medida con acero de alta resistencia y maderas seleccionadas.
          </p>
          <div className="pt-4">
            <button onClick={() => { window.location.href = "/categorias/Productos"; }} className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm px-8 py-4 rounded-md transition-colors duration-200 tracking-wide uppercase" >
              Explorar los 15 Diseños
            </button>
          </div>
        </div>

        {/* Contenedor de imagen principal */}
        <div className="relative aspect-[4/5] md:aspect-square w-full bg-neutral-100 rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Mobiliario Industrial Lumia"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded border border-neutral-100 hidden sm:block">
            <p className="text-xs font-mono text-neutral-500">Modelo en foto:</p>
            <p className="text-sm font-bold text-neutral-900">Estantería Estructural N1</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL "NOSOTROS" */}
      <section className="bg-[#c8aa8c] border-y border-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="p-3 bg-white rounded-full shadow-sm border border-neutral-100 text-neutral-800">
                <Hammer className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Fabricación Propia</h3>
              <p className="text-sm text-white leading-relaxed">
                Cada pieza nace en nuestro taller. Controlamos el corte de la madera y la soldadura del acero para garantizar acabados perfectos.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="p-3 bg-white rounded-full shadow-sm border border-neutral-100 text-neutral-800">
                <Ruler className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Ediciones Limitadas</h3>
              <p className="text-sm text-white leading-relaxed">
                Al no producir en masa, nos enfocamos en optimizar constantemente nuestros 15 diseños exclusivos basados en la funcionalidad real de tu espacio.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="p-3 bg-white rounded-full shadow-sm border border-neutral-100 text-neutral-800">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Garantía Estructural</h3>
              <p className="text-sm text-white leading-relaxed">
                La combinación de metalurgia y carpintería de ensamble asegura que tus estanterías y repisas soporten peso real sin vencerse.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}