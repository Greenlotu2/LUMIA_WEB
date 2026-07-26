'use client';

import React from 'react';
import { Mail, MapPin, MessageSquare, Clock, Truck, ShieldCheck } from 'lucide-react';

// --- ÍCONOS SVG DE REDES SOCIALES ---
const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.11V9.41a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 1 0 6.34 6.34V9.25a8.27 8.27 0 0 0 4.77 1.49v-3.5a4.85 4.85 0 0 1-1-.05z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

export default function ContactoPage() {
  const estadosCobertura = ['Puebla', 'Tlaxcala', 'Morelos', 'Veracruz'];

  return (
    <main className="min-h-screen bg-white text-white px-6 py-12 lg:py-20 max-w-7xl mx-auto">
      {/* Encabezado */}
      <header className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Atención Personalizada
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight text-black">
          Contacto y Ubicación
        </h1>
        <p className="text-neutral-400 mt-2 font-mono text-sm max-w-2xl">
          Conoce nuestra zona de cobertura, canales de atención directa y redes sociales.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
        {/* ==========================================
            COLUMNA IZQUIERDA: CANALES Y REDES
           ========================================== */}
        <div className="flex flex-col gap-8">
          
          {/* Canales Directos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#D3D3D3] border border-neutral-800 hover:border-emerald-500/50 rounded-2xl transition-all group flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-black text-lg">WhatsApp</h3>
              <p className="text-xs text-black font-mono">Respuesta rápida para cotizaciones.</p>
              <span className="text-xs text-emerald-400 font-mono underline underline-offset-4 mt-2">
                Escribir ahora →
              </span>
            </a>

            {/* Email Card */}
            <div className="p-6 bg-[#D3D3D3] border border-neutral-800 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-black text-lg">Correo</h3>
              <p className="text-xs text-black font-mono">contacto@lumia-industrial.com</p>
              <span className="text-xs text-neutral-500 font-mono mt-2">Atención en 24 hrs</span>
            </div>
          </div>

          {/* --- SECCIÓN DE REDES SOCIALES --- */}
          <div className="p-6 bg-[#D3D3D3] border border-neutral-800 rounded-2xl flex flex-col gap-4">
            <h3 className="text-black font-bold text-sm tracking-wider uppercase text-amber-500 font-mono">
              Síguenos en Redes Sociales
            </h3>
            <p className="text-xs text-black font-mono">
              Descubre nuestros procesos de fabricación, nuevos lanzamientos y proyectos entregados:
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-[#c8aa8c] border border-neutral-800 rounded-xl hover:border-pink-500 hover:text-pink-400 transition-all gap-2 text-neutral-300 group"
              >
                <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-mono text-black">Instagram</span>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-[#c8aa8c] border border-neutral-800 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all gap-2 text-neutral-300 group"
              >
                <TikTokIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-mono text-black">TikTok</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/tu_pagina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-[#c8aa8c] border border-neutral-800 rounded-xl hover:border-blue-500 hover:text-blue-400 transition-all gap-2 text-neutral-300 group"
              >
                <FacebookIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-mono text-black">Facebook</span>
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div className="p-6 bg-[#D3D3D3] border border-neutral-800 rounded-2xl flex flex-col gap-3 font-mono text-xs text-black">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <div>
                <strong className="text-black block">Horarios de Atención:</strong>
                <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================
            COLUMNA DERECHA: TALLER Y ZONA DE COBERTURA
           ========================================== */}
        <div className="bg-[#D3D3D3] border border-neutral-800 p-8 rounded-2xl flex flex-col gap-8">
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-500">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-black">Taller y Entregas</h2>
            </div>
            <p className="text-black
             text-sm leading-relaxed">
              Diseñamos y fabricamos cada estructura metálica e industrial con acabados de alta calidad. Contamos con entregas directas e instalación técnica en la región centro.
            </p>
          </div>

          {/* Cobertura Principal */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4" /> Zona de Cobertura Principal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {estadosCobertura.map((estado) => (
                <div
                  key={estado}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 text-sm font-semibold text-white hover:border-amber-500/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {estado}
                </div>
              ))}
            </div>
          </div>

          {/* Garantía e Instalación */}
          <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div className="text-xs font-mono text-neutral-300 leading-relaxed">
              <strong className="text-white block text-sm mb-1">Envíos e Instalación Protegida</strong>
              Todos nuestros muebles incluyen embalaje de protección industrial. Si requieres instalación o medidas especiales dentro de Puebla, Tlaxcala, Morelos o Veracruz, consúltalo directamente en tu cotización.
            </div>
          </div>

          <a
            href="https://wa.me/521234567890?text=Hola%20Lumia,%20quisiera%20consultar%20el%20costo%20de%20env%C3%ADo/entrega%20para%20mi%20ubicaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#c8aa8c] hover:bg-[#293e57] hover:text-white text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
          >
            Consultar Flete a mi Ciudad →
          </a>

        </div>
      </div>
    </main>
  );
}