'use client';

import React, { useState, use } from 'react';
import { PRODUCTS } from '../../../../data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Ruler, Hammer, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: Props) {
  // Desempaquetamos los params usando React.use()
  const resolvedParams = use(params);

  // 1. Buscamos el producto exacto según el slug de la URL
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  // 2. Si el slug no coincide con ningún mueble, manda a 404
  if (!product) {
    notFound();
  }

  // Galería de imágenes (si no hay galería, usa la principal)
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.mainImage];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mensaje personalizado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Hola Lumia, me interesa cotizar el mueble "${product.name}" (ID: ${product.id}).`
  );

  return (
    <main className="min-h-screen bg-white text-white px-6 py-12 lg:py-20 max-w-7xl mx-auto">
      {/* Botón de regresar */}
      <Link
        href="/categorias/Productos"
        className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors mb-8 text-xs uppercase tracking-widest font-mono"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al catálogo completo
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
        
        {/* ==========================================
            COLUMNA IZQUIERDA: GALERÍA DE IMÁGENES
           ========================================== */}
        <div className="flex flex-col gap-4 w-full">
          {/* Visor Principal */}
          <div className="relative aspect-square w-full bg-white rounded-2xl p-8 flex items-center justify-center border border-black overflow-hidden group">
            <img
              src={images[selectedImageIndex]}
              alt={`${product.name} - Imagen ${selectedImageIndex + 1}`}
              className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
            />

            {/* Flechas para cambiar imagen (si hay más de 1) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-all"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Miniaturas de Selección */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl bg-neutral-900 border p-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    selectedImageIndex === idx
                      ? 'border-amber-500 ring-2 ring-amber-500/20'
                      : 'border-neutral-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ==========================================
            COLUMNA DERECHA: INFORMACIÓN Y ACCIONES
           ========================================== */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {product.category.replace('_', ' ')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-amber-500">
              {product.name}
            </h1>
            <p className="text-3xl font-mono text-black mt-3 font-semibold">
              ${product.price.toLocaleString('es-MX')} MXN
            </p>
          </div>

          <p className="text-neutral-400 leading-relaxed text-base lg:text-lg">
            {product.description}
          </p>

          {/* Ficha Técnica */}
          <div className="py-6 flex flex-col gap-4 font-mono text-sm text-neutral-300 bg-neutral-950 px-6 rounded-xl border border-neutral-800">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-1 text-amber-500">
              Especificaciones Técnicas
            </h4>
            <div className="flex items-center gap-3">
              <Ruler className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span><strong>Dimensiones:</strong> {product.dimensions}</span>
            </div>
            <div className="flex items-center gap-3">
              <Hammer className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span><strong>Materiales:</strong> {product.material}</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span><strong>Garantía:</strong> 1 año en estructura de acero</span>
            </div>
          </div>

          {/* Llamados a la Acción (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`https://wa.me/521234567890?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-emerald-950/30 text-center"
            >
              <MessageSquare className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
            
            <Link
              href="/categorias/Cotizaciones"
              className="flex items-center justify-center gap-3 flex-1 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-4 px-6 rounded-xl transition-all border border-neutral-800 text-center"
            >
              Diseño a Medida
            </Link>
          </div>
          
          <p className="text-center sm:text-left text-xs text-neutral-500 font-mono">
            *Tiempos de fabricación: 10 a 15 días hábiles. Envíos disponibles a toda la República.
          </p>
        </div>

      </div>
    </main>
  );
}