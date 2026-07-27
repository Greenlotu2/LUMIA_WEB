'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowLeft, MessageSquare, ShieldCheck, Truck } from 'lucide-react';
import fotoEstanteria from '/public/Estanterias/Estanteria_3_Niveles/1.jpg';
import fotoMesa from '/public/Mesas_Centro/Mesa_Cajones/1.jpg';

// Interfaz para los items de la lista
interface CarritoItem {
  id: string;
  nombre: string;
  medidas: string;
  acabado: string;
  precioUnitario: number;
  cantidad: number;
  imagen: string;
}

export default function CarritoPage() {
  // Estado inicial simulado con items del catálogo
  const [items, setItems] = useState<CarritoItem[]>([
    {
      id: 'mueble-1',
      nombre: 'Estantería Industrial Acero y Madera 3 Niveles',
      medidas: '180 x 80 x 35 cm',
      acabado: 'Negro Mate / Nogal',
      precioUnitario: 8500,
      cantidad: 1,
      imagen: 'muebles/Estanterias/Estanteria_3_Niveles/1.jpg'
    },
    {
      id: 'mueble-2',
      nombre: 'Mesa de Centro Con Cajones',
      medidas: '100 x 60 x 45 cm',
      acabado: 'Estructura Acero / Pino Reciclado',
      precioUnitario: 4200,
      cantidad: 2,
      imagen: 'muebles/Mesas_Centro/Mesa_Cajones/1.jpg',
    },
  ]);

  // Funciones de gestión del carrito
  const actualizarCantidad = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nuevaCantidad = item.cantidad + delta;
          return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : item;
        }
        return item;
      })
    );
  };

  const eliminarItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Cálculos de totales
  const subtotal = items.reduce((acc, item) => acc + item.precioUnitario * item.cantidad, 0);
  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0);

  // Generación del mensaje para WhatsApp con el desglose
  const generarMensajeWhatsApp = () => {
    let mensaje = "¡Hola Lumia Industrial! Quisiera cotizar/encargar los siguientes muebles de mi lista de compras:\n\n";
    items.forEach((item, index) => {
      mensaje += `${index + 1}. *${item.nombre}*\n`;
      mensaje += `   - Cantidad: ${item.cantidad}\n`;
      mensaje += `   - Medidas: ${item.medidas}\n`;
      mensaje += `   - Acabado: ${item.acabado}\n`;
      mensaje += `   - Precio estim.: $${(item.precioUnitario * item.cantidad).toLocaleString('es-MX')} MXN\n\n`;
    });
    mensaje += `*Total Estimado:* $${subtotal.toLocaleString('es-MX')} MXN\n`;
    mensaje += `*Ubicación de entrega:* (Indica si es Puebla, Tlaxcala, Morelos o Veracruz)\n`;

    return encodeURIComponent(mensaje);
  };

  return (
    <main className="min-h-screen bg-white text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-5 max-w-7xl mx-auto">
      {/* Botón de Regreso */}
      <div className="mb-1">
        <Link
          href="/categorias/Productos"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Seguir explorando el catálogo
        </Link>
      </div>

      {/* Encabezado */}
      <header className="mb-10 pb-6 border-b border-neutral-300 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Resumen de Selección
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mt-3 text-black">
            Lista de Compras
          </h1>
        </div>
        <div className="text-xs font-mono text-black">
          Muebles seleccionados: <strong className="text-amber-500">{totalItems}</strong>
        </div>
      </header>

      {items.length === 0 ? (
        /* ESTADO VACÍO */
        <div className="p-8 sm:p-12 lg:p-16 bg-[#E8E8E8] border border-neutral-300 rounded-2xl text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-neutral-800/90 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-100">
            <Trash2 className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-black">Tu lista está vacía</h2>
          <p className="text-xs font-mono text-black max-w-sm">
            Aún no has agregado ninguna pieza a tu selección. Navega por nuestros diseños industriales y añade lo que necesites.
          </p>
          <Link
            href="/categorias/Productos"
            className="mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold font-mono text-xs uppercase px-8 py-3.5 rounded-xl transition-all"
          >
            Ir al Catálogo
          </Link>
        </div>
      ) : (
        /* CONTENIDO CON ITEMS */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* LISTADO DE PRODUCTOS */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 bg-[#F1F1F1] border border-neutral-300 rounded-2xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hover:border-neutral-400 transition-all"
              >
                {/* Visualización / Imagen del mueble */}
                <div className="w-full sm:w-28 h-28 bg-neutral-100 rounded-xl border border-neutral-300 overflow-hidden relative flex-shrink-0">
                <Image
                    src={item.imagen}
                    alt={item.nombre}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 112px"
                />
                </div>

                {/* Detalles de la pieza */}
                <div className="flex-1 flex flex-col gap-1 text-center sm:text-left w-full">
                  <h3 className="font-bold text-black text-base">{item.nombre}</h3>
                  <p className="text-xs font-mono text-black">Medidas: {item.medidas}</p>
                  <p className="text-xs font-mono text-neutral-500">Acabado: {item.acabado}</p>
                  
                  <div className="text-sm font-bold text-amber-500 font-mono mt-2">
                    ${item.precioUnitario.toLocaleString('es-MX')} MXN
                  </div>
                </div>

                {/* Controles de Cantidad y Eliminación */}
                <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-300">
                  <div className="flex items-center bg-neutral-200 border border-neutral-300 rounded-xl p-1">
                    <button
                      onClick={() => actualizarCantidad(item.id, -1)}
                      className="p-1.5 text-neutral-700 hover:text-black transition-colors"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-white">{item.cantidad}</span>
                    <button
                      onClick={() => actualizarCantidad(item.id, 1)}
                      className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => eliminarItem(item.id)}
                    className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                    title="Eliminar mueble"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TARJETA DE RESUMEN Y ENVÍO */}
          <div className="bg-[#F2F2F2] border border-neutral-300 p-5 sm:p-6 lg:p-8 rounded-2xl flex flex-col gap-6 sticky top-20 sm:top-24">
            <h2 className="text-xl font-bold text-black border-b border-neutral-300 pb-4">
              Resumen de Pedido
            </h2>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between text-black">
                <span>Subtotal ({totalItems} piezas)</span>
                <span className="text-black">${subtotal.toLocaleString('es-MX')} MXN</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Flete / Entrega</span>
                <span className="text-amber-500 font-bold">Por cotizar</span>
              </div>
              <div className="border-t border-neutral-300 pt-3 mt-1 flex justify-between text-sm font-bold text-black">
                <span>Total Estimado</span>
                <span className="text-black font-mono text-base">${subtotal.toLocaleString('es-MX')} MXN</span>
              </div>
            </div>

            {/* Beneficios clave */}
            <div className="bg-neutral-100 border border-neutral-300 rounded-xl p-4 flex flex-col gap-2 font-mono text-[11px] text-neutral-700">
              <div className="flex items-center gap-2 text-neutral-900">
                <Truck className="w-4 h-4 text-amber-500" />
                <span>Cobertura directa: Puebla, Tlaxcala, Morelos y Veracruz.</span>
              </div>
              <div className="flex items-center gap-2 text-white mt-1">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Garantía de fabricación en estructura de acero.</span>
              </div>
            </div>

            {/* Acción de Envío directo a WhatsApp */}
            <a
              href={`https://wa.me/521234567890?text=${generarMensajeWhatsApp()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              Enviar Lista por WhatsApp →
            </a>

            <p className="text-[10px] font-mono text-neutral-500 text-center">
              Al hacer clic se abrirá un chat con nuestro taller para enviarte la cotización formal de flete e instalación.
            </p>
          </div>

        </div>
      )}
    </main>
  );
}