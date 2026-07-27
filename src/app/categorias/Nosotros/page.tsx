'use client';

import React from 'react';
import { Hammer, Compass, Target, ShieldCheck } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      
      {/* SECCIÓN 1: CABECERA / QUIÉNES SOMOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-12 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
          Detrás de Lumia
        </span>
        <h1 className="text-4xl font-black tracking-tight text-neutral-900 mt-2 uppercase">
          Quiénes Somos ?
        </h1>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-6 text-neutral-600 leading-relaxed">
            <p className="text-lg font-medium text-neutral-900">
              Somos un estudio-taller dedicado a la conceptualización y fabricación de mobiliario estructural de alta resistencia.
            </p>
            <p>
              Nacimos con la idea de romper con lo comercial y lo desechable. Nos enfocamos exclusivamente en perfeccionar una línea de 15 modelos únicos entre repisas, estanterías y mesas de centro, donde la ingeniería del metal y la calidez de la madera se fusionan.
            </p>
            <p>
              Creemos firmemente que cada mueble debe resolver una necesidad espacial real sin perder un ápice de identidad estética, garantizando piezas duraderas que pasen de generación en generación.
            </p>
          </div>
          
          {/* Foto que simula el Taller */}
          <div className="aspect-[16/10] bg-neutral-200 rounded-xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80" 
              alt="Trabajo en herrería y carpintería"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LA ALTERNATIVA A MISIÓN Y VISIÓN (FILOSOFÍA DE MARCA) */}
      <section className="bg-white border-y border-neutral-200/60 py-12 sm:py-16 mt-6 sm:mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Misión transformada en "El Propósito" */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-900 text-white rounded-lg">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-neutral-900 uppercase">
                  Nuestro Enfoque
                </h2>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed pl-1">
                Optimizar tus espacios a través de geometría funcional. No buscamos saturar el mercado con cientos de opciones genéricas; nuestro propósito es entregar soluciones robustas y estéticas pensadas al milímetro para el diseño interior contemporáneo.
              </p>
            </div>

            {/* Visión transformada en "Hacia Dónde Vamos" */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-neutral-900 text-white rounded-lg">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-neutral-900 uppercase">
                  La Proyección
                </h2>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed pl-1">
                Consolidar nuestro taller como el referente predilecto de diseño industrial a medida. Buscamos evolucionar de la mano de arquitectos e interioristas, demostrando que la herrería artesanal y la carpintería fina tienen un lugar definitivo en los hogares modernos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 3: COMPROMISO INDUSTRIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white p-8 rounded-xl border border-neutral-200/60 flex gap-4 items-start shadow-sm">
          <div className="p-3 bg-neutral-100 rounded-full text-neutral-800 shrink-0">
            <Hammer className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-neutral-900 text-base">Materiales Sin Compromisos</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Trabajamos con acero estructural soldado con precisión micrométrica y acabados en pintura electrostática, asegurando que las piezas no sufran de corrosión ni pandeo.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-neutral-200/60 flex gap-4 items-start shadow-sm">
          <div className="p-3 bg-neutral-100 rounded-full text-neutral-800 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-neutral-900 text-base">Garantía Directa de Taller</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Al ser los fabricantes directos de cada una de las piezas, eliminamos intermediarios comerciales y aseguramos un control de calidad absoluto antes de que el mueble salga hacia tu hogar.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}