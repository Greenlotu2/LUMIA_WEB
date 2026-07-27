'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '../../../data/products';
import ProductCard from '../../../components/ProductCard';

type CategoryFilter = 'Todas' | Product['category'];

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todas');

  // Filtramos los productos según la pestaña seleccionada
  const filteredProducts = selectedCategory === 'Todas'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'Todas', value: 'Todas' },
    { label: 'Estanterías', value: 'Estanterias' },
    { label: 'Mesas de Centro', value: 'Mesas_Centro' },
    { label: 'Mesas Laterales', value: 'Mesas_Laterales' },
    { label: 'Repisas', value: 'Repisas' },
  ];

  return (
    <main className="min-h-screen bg-white text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-7xl mx-auto">
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">Catálogo Industrial</h1>
        <p className="text-neutral-400 mt-2 font-mono text-sm">
          Explora nuestros 15 modelos de edición limitada.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                selectedCategory === cat.value
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Cuadrícula de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}