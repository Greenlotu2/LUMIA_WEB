'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Elegancia Geométrica en Tu Estancia',
    description: 'Mesas de centro con cubiertas de cristal templado y estructuras de acero con diseño arquitectónico único.',
    image: '/muebles/mueble_en_entornos/2.png',
    tag: 'Salas de Estar'
  },
  {
    id: 2,
    title: 'Harmonía e Iluminación Integral',
    description: 'Libreros de gran escala y repisas flotantes que transforman muros completos con madera cálida y herrería mate.',
    image: '/muebles/mueble_en_entornos/3.png',
    tag: 'Espacios Abiertos'
  },
  {
    id: 3,
    title: 'Versatilidad y Acentos Móviles',
    description: 'Estanterías curvas con rodamiento suave y mesas auxiliares tipo nido pensadas para optimizar cada rincón.',
    image: '/muebles/mueble_en_entornos/4.png',
    tag: 'Rincones Mínimos'
  }
];

export default function LifestyleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8 text-center md:text-left space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
          Inspiración para tu hogar
        </span>
        <h2 className="text-3xl font-black tracking-tight text-white">
          Nuestros Muebles En Tu Espacio
        </h2>
        <p className="text-neutral-300 text-sm max-w-md">
          Boceto visual de cómo lucirán las piezas en áreas como tú lo requieras.
        </p>
      </div>

      {/* Contenedor adaptado al ratio 4:3 de tus fotos */}
      <div className="relative aspect-[4/3] max-h-[600px] w-full rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl group border border-neutral-800">
        
        {/* Imágenes Animadas con Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Degradado para rescatar legibilidad de texto sobre la foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 pointer-events-none" />
            
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Textos y Contenido Encima del Carrusel */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <div className="space-y-2.5 max-w-xl text-white">
            <span className="inline-flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-medium tracking-wide border border-neutral-700/50 uppercase text-amber-400">
              <Eye className="w-3.5 h-3.5" /> {slides[currentIndex].tag}
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight drop-shadow-md">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed drop-shadow">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Botones de Navegación */}
          <div className="flex gap-3 self-start md:self-auto z-30">
            <button
              onClick={prevSlide}
              className="p-3 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full border border-neutral-700/60 transition-colors duration-200 backdrop-blur-sm"
              aria-label="Anterior escenario"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-full shadow-md font-bold transition-colors duration-200"
              aria-label="Siguiente escenario"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicadores de posición inferiores */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-amber-500' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}