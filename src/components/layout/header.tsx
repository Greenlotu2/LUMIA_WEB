'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { SiMercadopago } from "react-icons/si";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Categorías funcionales y específicas de tu nicho
  const navigation = [
    { name: 'Produtos', href: '/categorias/Productos' },
    { name: 'Nosotros', href: '/categorias/Nosotros' },  
    { name: 'Cotizaciones', href: '/categorias/Cotizaciones' },
  ];

  return (
  // Busca la etiqueta <header> en tu archivo y cambia sus clases a esto:
<header className="sticky top-0 z-50 bg-[#F6F6F6] border-b border-neutral-200/60 backdrop-blur-md">  
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO - Identidad de marca limpia */}
          <div className="flex-1 md:flex-none flex items-center justify-start">
            <Link href="/" className="text-2xl font-black tracking-wider text-neutral-900 uppercase">
              <img 
      src="/logo_lumia.png" 
      alt="Lumia Logo" 
     className="h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
    />
            </Link>
          </div>

          {/* NAVEGACIÓN DESKTOP - Centrada para equilibrar el diseño editorial */}
          <nav className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 relative py-2 group"
              >
                {item.name}
                {/* Línea animada sutil al pasar el cursor */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ICONOS DE CONVERSIÓN - Lo que acostumbra cualquier comprador en línea */}
          <div className="flex items-center justify-end space-x-5 text-neutral-700 flex-1 md:flex-none">
            {/* Buscador */}
            <button className="p-2 hover:text-neutral-900 transition-colors duration-200" aria-label="Buscar">
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Cuenta de Usuario */}
            <button className="hidden sm:block p-2 hover:text-neutral-900 transition-colors duration-200" aria-label="Mi Cuenta">
              <User className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Carrito de Compras con indicador de productos */}
            <button className="p-2 hover:text-neutral-900 transition-colors duration-200 relative" aria-label="Ver Mercado Libre">
  <SiMercadopago className="w-5 h-5" />
</button>

            {/* Botón Menú Móvil (Hamburguesa) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden hover:text-neutral-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ DESPLEGABLE PARA MÓVILES */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/cuenta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block sm:hidden px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 rounded-md"
            >
              Mi Cuenta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}