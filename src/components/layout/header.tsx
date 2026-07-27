'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { SiMercadopago } from "react-icons/si";
import { CiShoppingCart } from 'react-icons/ci';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Categorías funcionales y específicas de tu nicho
  const navigation = [
    { name: 'Produtos', href: '/categorias/Productos' },
    { name: 'Nosotros', href: '/categorias/Nosotros' },  
    { name: 'Cotizaciones', href: '/categorias/Cotizaciones' },
    { name: 'Contacto', href: '/categorias/contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F6F6F6] border-b border-neutral-200/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <div className="flex-1 md:flex-none flex items-center justify-start min-w-0">
            <Link href="/" className="text-2xl font-black tracking-wider text-neutral-900 uppercase">
              <img
                src="/logo_lumia.png"
                alt="Lumia Logo"
                className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-sm font-medium tracking-wide">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 relative py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 text-neutral-700 flex-1 md:flex-none">
            <button onClick={() => window.location.href = "/carrito"} className="p-2 hover:text-neutral-900 transition-colors duration-200" aria-label="Lista de Compras">
              <CiShoppingCart className="w-5 h-5 stroke-[2]" />
            </button>

            <button onClick={() => window.location.href = "/perfil"} className="hidden sm:block p-2 hover:text-neutral-900 transition-colors duration-200" aria-label="Mi Cuenta">
              <User className="w-5 h-5 stroke-[2]" />
            </button>

            <button onClick={() => window.location.href = "https://www.mercadolibre.com.mx/"} className="p-2 hover:text-neutral-900 transition-colors duration-200 relative" aria-label="Ver Mercado Libre">
              <SiMercadopago className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden hover:text-neutral-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

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