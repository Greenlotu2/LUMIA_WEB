'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Datos ficticios para el boceto del carrusel
const slides = [
  {
    id: 1,
    title: 'Estanterías que optimizan tu espacio',
    description: 'Estructuras geométricas diseñadas para dar vida a tus muros y organizar tus libros u objetos favoritos.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Estudio Urbano'
  },
  {
    id: 2,
    title: 'Acentos mínimos en tu pared',
    description: 'Nuestras repisas flotantes combinan la calidez de la madera sólida con la rigidez del acero industrial.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Salas Reducidas'
  },
  {
    id: 3,
    title: 'El centro de tus reuniones',
    description: 'Mesas de centro de herrería artesanal que se convierten en la pieza clave de tu decoración.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Zonas de Convivencia'
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 text-center md:text-left space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 font-mono">
          Inspiración para tu hogar
        </span>
        <h2 className="text-3xl font-black tracking-tight text-white">
          Nuestros Muebles En Tu Espacio
        </h2>
        <p className="text-white text-sm max-w-md">
          Boceto visual de cómo lucirán las piezas en areas como tu lo requieras.
        </p>
      </div>

      {/* Contenedor Principal del Carrusel */}
      <div className="relative h-[450px] sm:h-[550px] w-full rounded-xl overflow-hidden bg-neutral-900 shadow-xl group">
        
        {/* Imágenes Animadas con Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Capa oscura encima de la foto para mejorar la legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent z-10" />
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Textos y Contenido Encima del Carrusel */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-xl text-white">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-xs font-medium tracking-wide border border-white/10 uppercase">
              <Eye className="w-3.5 h-3.5" /> {slides[currentIndex].tag}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-200/90 font-light leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Botones de Navegación del Carrusel */}
          <div className="flex gap-3 self-start md:self-auto z-30">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/10 transition-colors duration-200"
              aria-label="Anterior escenario"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white hover:bg-neutral-100 text-neutral-900 rounded-full shadow-md transition-colors duration-200"
              aria-label="Siguiente escenario"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicadores de posición (Líneas finas abajo al centro) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}