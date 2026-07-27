'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
        
        {/* Columna 1: Identidad Corta */}
        <div className="text-center md:text-left space-y-2">
          <span className="text-white font-black tracking-wider text-xl uppercase font-mono">
            Lumia<span className="text-amber-500 font-light">_Web</span>
          </span>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto md:mx-0">
            Taller conceptual de mobiliario industrial. Diseños geométricos y estructurales a medida.
          </p>
        </div>

        {/* Columna 2: Contacto Directo / WhatsApp */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contacto de Taller</p>
          <a 
            href="https://wa.me/522221234567" // Aquí irá tu WhatsApp real de Lumia
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-amber-500" /> WhatsApp Directo
          </a>
          <span className="text-[11px] text-neutral-500 flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" /> contacto@lumiaweb.com
          </span>
        </div>

{/* Columna 3: Redes Sociales */}
<div className="flex flex-col items-center md:items-end space-y-3">
  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Sigue el Proceso</p>
  <div className="flex gap-4">
    {/* Instagram SVG */}
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors border border-neutral-700"
      aria-label="Instagram Lumia"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>

    {/* Facebook SVG */}
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors border border-neutral-700"
      aria-label="Facebook Lumia"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </a>
  </div>
  <p className="text-[10px] text-neutral-600">
    &copy; {new Date().getFullYear()} Lumia Web. Hecho en México.
  </p>
</div>

      </div>
    </footer>
  );
}