'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Aseguramos que existan imágenes en el arreglo de galería
  const images = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.mainImage];

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar a la página del producto al presionar la flecha
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita navegar a la página del producto al presionar la flecha
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  return (
    <div className="group relative bg-neutral-950 border border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300">
      
      {/* --- ÁREA DEL MINI CARRUSEL --- */}
      <div className="relative aspect-square w-full bg-white p-6 flex items-center justify-center overflow-hidden">
        
        {/* Imagen actual con efecto drop-shadow para PNGs */}
        <Link href={`/categorias/Productos/${product.slug}`} className="w-full h-full flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`${product.name} - Vista ${currentImageIndex + 1}`}
            className="max-h-full max-w-full object-contain  transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Controles del mini-carrusel (solo si hay 2 o más fotos) */}
        {images.length > 1 && (
          <>
            {/* Flecha Izquierda */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Vista anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Flecha Derecha */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Siguiente vista"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Indicadores en Puntos (Pills) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleDotClick(e, idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentImageIndex === idx
                      ? 'w-5 bg-[#293e57]'
                      : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
                  }`}
                  aria-label={`Ir a la vista ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- INFORMACIÓN DEL PRODUCTO --- */}
      <div className="p-5 flex flex-col gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          {product.category.replace('_', ' ')}
        </span>
        
        <Link href={`/categorias/Productos/${product.slug}`}>
          <h3 className="font-semibold text-lg text-white hover:text-amber-400 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-neutral-400 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-800">
          <span className="text-lg font-mono font-bold text-wwhite">
            ${product.price.toLocaleString('es-MX')} MXN
          </span>
          <Link
            href={`/categorias/Productos/${product.slug}`}
            className="text-xs font-mono uppercase text-neutral-300 hover:text-white underline underline-offset-4"
          >
            Ver detalles →
          </Link>
        </div>
      </div>
    </div>
  );
}